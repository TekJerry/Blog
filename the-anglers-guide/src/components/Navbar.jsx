import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


export default function Navbar() {
  return (
    <div>

      
      <div className="navbar">
      
      <button className="fish-button"><Link to="/"><p className="test">Home</p><img src="https://i.imgur.com/LO8OyLp.png" height="80" width="150" alt="fish"/></Link></button>
      <button className="fish-button"><Link to="/new"><p className="test">Create Post</p><img src="https://i.imgur.com/LO8OyLp.png" height="80" width="150" alt="fish"/></Link></button>
      <button className="fish-button"><Link to="/newer"><p className="test">Post Your Catch</p><img src="https://i.imgur.com/LO8OyLp.png" height="80" width="150" alt="fish"/></Link></button>
      
      </div>

    </div>
  )
}
