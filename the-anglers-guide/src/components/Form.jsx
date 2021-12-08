import React from 'react'
import { useState } from 'react'
import { postPost } from '../services'
import { useNavigate } from 'react-router'
import "./Form.css"


export default function Form(props) {

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
      <form onSubmit={handleSubmit} className="input-form">
        <label>Your Name</label>
        <input type='text'
          value={angler}
          onChange={(e) => setAngler(e.target.value)}
        /> <label>Write Your Story/Description Here</label>
        <input type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /> <label>What Lure/Bait Did You Use?</label>
        <input type='text'
          value={lure}
          onChange={(e) => setLure(e.target.value)}
        /> <label>State</label>
        <input type='text'
          value={state}
          onChange={(e) => setState(e.target.value)}
        /> <label>City</label>
        <input type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        /> <label>What Body Of Water Did You Catch It?</label>
        <input type='text'
          value={lake}
          onChange={(e) => setLake(e.target.value)}
        /> <label>Freshwater or Saltwater?</label>
        <input type='text'
          value={freshwater}
          onChange={(e) => setFreshwater(e.target.value)}
        /> <label>Catch It On Boat Or Bank</label>
        <input type='text'
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        /> <label>What Fish Did You Catch</label>
        <input type='text'
          value={fish}
          onChange={(e) => setFish(e.target.value)}
        /> <label>Let's See Your Catch!</label>
        <input type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        /> <label>Date Caught</label>
        <input type='text'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>Post My Catch!</button>
      </form>
    </div>
  )
}
