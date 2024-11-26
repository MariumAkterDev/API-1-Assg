import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="menu_row px-8 py-8 bg-gray-900 flex justify-between">
            <div className="logo">
              <img className='w-[200px] h-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJp4nJq-CYXl6qp8tWOzFMoZFmV-dieoXmQ&s" alt="logo" />
            </div>
            <div className="menu_items text-[white] text-4xl flex gap-7 items-center w-[500px] ">
              <Link to="">Home</Link>
              <Link to="">Service</Link>
              <Link to="">About</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar