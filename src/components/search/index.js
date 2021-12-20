import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './search.scss'

const Search = () => {
  return (
    <>
      <span className="search__container">
        <input type="text" name="city" id="city" className="search__container-input" placeholder="Another location" />
      </span>
      <FontAwesomeIcon icon={faSearch} className="search__button" />
    </>
  )
}

export default Search
