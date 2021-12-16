import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getLocation } from '../../actions/location'
import Meteo from '../../components/meteo'
import './home.scss'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      axios.get(`${process.env.REACT_APP_API_ENDPOINT}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        .then((res) => {
          dispatch(getLocation(res.data))
        })
        .catch(err => {
          console.log(err)
        })
    })
  }, [dispatch])

  const city = useSelector(state => state.location.currentCity)

  const [bgImg, setBgImg] = useState(null);

  if (city) {
    import(`../../assets/${city.bgImg}`).then((module) => {
      setBgImg(module.default);
    });
  }

  return (
    <>
      {bgImg && (
        <>
          <img className="hero" src={bgImg} alt="" />
          <Meteo />
        </>
      )}
    </>
  )
}

export default Home
