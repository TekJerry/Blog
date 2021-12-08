import React from 'react'
import { useState } from 'react'
import { postPost } from '../services'
import { useNavigate } from 'react-router'
import "./Form.css"


export default function Form(props, closeModal) {

  const [angler, setAngler] = useState("")
  const [description, setDescription] = useState("")
  const [lure, setLure] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [lake, setLake] = useState("")
  const [freshwater, setFreshwater] = useState("")
  const [bank, setBank] = useState("")
  const [fish, setFish] = useState("")
  const [image, setImage] = useState("")
  const [date, setDate] = useState("")
  const navigate = useNavigate()
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      angler,
      description,
      lure,
      state,
      city,
      lake,
      freshwater,
      bank,
      fish,
      image,
      date,
      
    }
    const response = await postPost(newPost)
      props.setToggle(prevToggle => !prevToggle)
      if (response) {
        navigate(`/`)
      }
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="input-form" id="user-form">
        <input type='text'
          value={angler}
          placeholder="Type Your Name"
          onChange={(e) => setAngler(e.target.value)}
        /> 
        <input type='text'
          value={lure}
          placeholder="What Lure/Bait Did You Use?"
          onChange={(e) => setLure(e.target.value)}
        />
        <input type='text'
          value={state}
          placeholder="State. ex..Texas,Florida,etc."
          onChange={(e) => setState(e.target.value)}
        /> 
        <input type='text'
          value={city}
          placeholder="City. ex..Houston,Miami, etc."
          onChange={(e) => setCity(e.target.value)}
        />
        <input type='text'
          value={lake}
          placeholder="What Lake/Ocean/River Did You Catch It?"
          onChange={(e) => setLake(e.target.value)}
        />
        <input type='text'
          value={freshwater}
          placeholder="Freshwater or Saltwater?"
          onChange={(e) => setFreshwater(e.target.value)}
        /> 
        <input type='text'
          value={bank}
          placeholder="Catch It On Boat Or Bank?"
          onChange={(e) => setBank(e.target.value)}
        />
        <input type='text'
          value={fish}
          placeholder="What Fish Did You Catch?"
          onChange={(e) => setFish(e.target.value)}
        />
        <input type='text'
          value={image}
          placeholder="Let's See Your Catch!"
          onChange={(e) => setImage(e.target.value)}
        /> 
        <input type='text'
          value={date}
          placeholder="When Did You Catch It? ex.23 Dec 2022"
          onChange={(e) => setDate(e.target.value)}
        />
        
        <button>Post My Catch!</button>
      </form>
      <textarea
          form="user-form"
          value={description}
          placeholder="Write Your Story/Description Here"
          onChange={(e) => setDescription(e.target.value)}
        /> 
    </div>
  )
}
