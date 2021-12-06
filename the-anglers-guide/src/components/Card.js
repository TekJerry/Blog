import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom"

export default function Card({ state, image, city, post }) {
  return (
    <div className='card-container'>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="card-content">
      <div className="card-title">
        <h3>{state}</h3>
      </div>
      <div className="card-body">
        <p>{city}</p>
      </div>
      </div>
      <div className="btn" >
        <button>
          <Link key={post.id} to={`/posts/${post.id}`}>
            View More
          </Link>
        </button>
      </div>

    </div>
  )
}
