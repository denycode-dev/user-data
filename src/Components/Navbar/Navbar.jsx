import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <h1><Link to="/">Front-End Developer List</Link></h1>
    </nav>
  )
}
