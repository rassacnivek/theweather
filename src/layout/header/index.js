import React from 'react'
import { motion } from 'framer-motion'
import './header.scss'

const Header = () => {
  return (
    <motion.div className="brand" whileHover={{ scale: 1.2 }} >
      the.weather
    </motion.div>
  )
}

export default Header
