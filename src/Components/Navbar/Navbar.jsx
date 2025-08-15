import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='d-flex bg-secondary p-4 justify-content-around '>
      <h1 className='text-white h2 fw-bold'>START FRAMEWORK</h1>
      <ul className='d-flex list-unstyled gap-4 align-items-center text-white mb-0 pb-0'>
        <li ><NavLink className='fs-4 fw-bold text-white text-decoration-none' to="about">About</NavLink></li>
        <li ><NavLink className='fs-4 fw-bold text-white text-decoration-none' to="contact">Contact</NavLink></li>
        <li ><NavLink className='fs-4 fw-bold text-white text-decoration-none' to="portfolio">Portfolio</NavLink></li>
      </ul>
    </div>
  )
}
