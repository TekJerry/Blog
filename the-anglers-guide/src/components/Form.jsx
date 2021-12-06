import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services'

export default function Form() {

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
    await axios.post(BASE_URL, newPost)
    setToggle(prevToggle => !prevToggle)
  }


  return (
    <div>
      <form>
        <input type='text'
          value={angler}
          onChange={(e) => setAngler(e.target.value)}
        />
        <input type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type='text'
          value={lure}
          onChange={(e) => setLure(e.target.value)}
        />
        <input type='text'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input type='text'
          value={lake}
          onChange={(e) => setLake(e.target.value)}
        />
        <input type='text'
          value={freshwater}
          onChange={(e) => setFreshwater(e.target.value)}
        />
        <input type='text'
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
        <input type='text'
          value={fish}
          onChange={(e) => setFish(e.target.value)}
        />
        <input type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input type='text'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        
      </form>
    </div>
  )
}
