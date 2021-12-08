import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import styled from 'styled-components'
import { GlobalStyle } from './globalStyles'
import { Modal } from './Modal'


const Button = styled.button`
min-width:100px
padding:16px 32px;
border: none;
background: none;
color: #fff;
font-size: 24px;
cursor:pointer;
`;


export default function Navbar() {
  
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }
 
  return (
    <div>

      
      <div className="navbar">
      
      <button className="fish-button"><Link to="/"><p className="test">Home</p><img src="https://i.imgur.com/LO8OyLp.png" height="80" width="150" alt="fish"/></Link></button>

      
        <Button onClick={openModal}>  
            <button className="fish-button"><Link to="/"><p className="test">Post Your Catch</p><img src="https://i.imgur.com/LO8OyLp.png" height="80" width="150" alt="fish" /></Link></button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <GlobalStyle />
        </Button>
      


      </div>

    </div>
  )
}
