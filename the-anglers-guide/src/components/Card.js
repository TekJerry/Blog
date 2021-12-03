import React from 'react'
import "./Card.css"

export default function Card({ state, image, city }) {
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
          <a>
            View More
          </a>
        </button>
      </div>

    </div>
  )
}
