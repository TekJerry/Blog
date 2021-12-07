import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


export default function Navbar() {
  return (
    <div>

      
      <div className="navbar">
      
      <button className="fish-button"><img src="https://i.imgur.com/LO8OyLp.png" height="60" width="100" alt="fish"/><Link to="/">Home</Link></button>
      <Link to="/new"><button className="fish-button">All Posts</button></Link>
      <button className="fish-button">create Post<Link to="/newer"><img src="https://i.imgur.com/LO8OyLp.png" height="60" width="100" alt="fish"/></Link></button>
      
      </div>

    </div>
  )
}
