import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './search.scss'
import cities from 'cities.json'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from '../../actions/location'
import axios from 'axios'
import { TextHoverVariant } from '../../utils/variants/textHover'

const SetCurrentLocation = (lat, lng) => {
  const dispatch = useDispatch()
  axios.get(`${process.env.REACT_APP_API_ENDPOINT}&lat=${lat}&lon=${lng}`)
    .then((res) => {
      dispatch(setLocation(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

const Search = () => {
  const [componentState, setComponentState] = useState({
    search: "",
    searchCities: [],
    isVisible: false
  })
  const SearchVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-100%", opacity: 0 }
  }

  const handleSearch = (favorites, search) => {
    if (search !== "") {
      const splitSearch = search.split(',')
      splitSearch[0] = splitSearch[0].trim()
      let citiesFiltered = []
      if (splitSearch[1] && splitSearch[1] !== "") {
        splitSearch[1] = splitSearch[1].trim()
        citiesFiltered = cities.filter(city => city.name.toLowerCase().indexOf(splitSearch[0].toLowerCase()) > -1 && city.country.indexOf(splitSearch[1].toUpperCase()) > -1)
      } else {
        citiesFiltered = cities.filter(city => city.name.toLowerCase().indexOf(splitSearch[0].toLowerCase()) > -1)
      }

      let citiesSliced = citiesFiltered.slice(0, 4)

      let finalCities = []
      citiesSliced.forEach(city => {
        city.isFav = isFav(favorites, city)
        finalCities.push(city)
      })

      setComponentState({
        ...componentState,
        isVisible: true,
        search,
        searchCities: finalCities
      })
    } else {
      setComponentState({
        ...componentState,
        isVisible: false,
        search: "",
        searchCities: []
      })
    }
  }

  const favorites = JSON.parse(useSelector(state => state.favorites.favorites))

  const isFav = (favorites, city) => favorites.findIndex(fav => fav.name === city.name && fav.country === city.country)

  return (
    <div className="search">
      <div className="search__container">
        <span className="search__container-input__container">
          <input type="text" name="city" id="city" value={componentState.search} className="search__container-input__container-input" placeholder="Ex: New York, US" onChange={(e) => handleSearch(favorites, e.target.value)} />
        </span>
        <FontAwesomeIcon icon={faSearch} className="search__container-input__container-button" />
      </div>
      {componentState.searchCities !== [] && (
        <motion.div className="search__list" animate={componentState.isVisible ? "visible" : "hidden"} variants={SearchVariants} >
          {componentState.searchCities.map(city =>
            <div className="search__list-item" key={`${city.lng}${city.lat}`}>
              <motion.div className="search__list-item__name" whileHover={TextHoverVariant} onClick={() => SetCurrentLocation(city.lat, city.lng)}>{city.name}, {city.country}</motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div >
  )
}

export default Search
