import React from 'react'
import Favorites from '../../components/favorites'
import Search from '../../components/search'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Search />
      <div className="sidebar__scroll">
        <Favorites />
      </div>
    </div>
  )
}

export default Sidebar
