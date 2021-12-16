import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './search.scss'

const Search = () => {
  return (
    <>
      <input type="text" name="city" id="city" className="search__input" placeholder="Another location"/>
      <FontAwesomeIcon icon={faSearch} className="search__button" />
    </>
  )
}

export default Search
