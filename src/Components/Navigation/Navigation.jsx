import React from 'react'
import logo from '../assets/logo.png'
const Navigation = () => {
  return (
    <nav>
        <div>
            <img src={logo} alt='Do Some Coding'></img>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    </nav>
  )
}

export default Navigation