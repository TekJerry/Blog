import React, {useRef} from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Form from './Form';
import { useSpring, animated } from 'react-spring'



const Background = styled.div`
width: max-content;
height:100;
position:absolute;
left: 18%;
border: 5px green solid;
`;


const ModalWrapper = styled.div`
width: 1200px;
height: 600px;
border: red 3px solid;
background: #fff;
color:#000;
display grid;
position: center;

border-radius:10px;
`;

const ModalContent = styled.div`
  display: flex;
  align-content:center;
  align-items: center;
  justify-content: center;
  background-image: url("https://i.imgur.com/u7iegZo.jpg");
  background-position:center;
  background-size:cover;
  line-height: 1.8;
  color: #141414;
  border:blue 3px solid;
  input {
    border: 3px black solid;
    margin: 1rem;
    width: 310px;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  textarea {
    width:500px;
    height:175px;
    resize:none;
    border: 3px solid black;
  }

`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  border: pink 3px solid;
`;


export const Modal = ({ showModal, setShowModal, setToggle }) => {
  
  const modalRef = useRef()
  
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
      <Background ref={modalRef} onClick={closeModal}> 
          <animated.div style={animation}>
        <ModalWrapper showModal={showModal} >
          <ModalContent>
            <Form setToggle={setToggle} />
            </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal(prev => !prev)}
              />
        </ModalWrapper>
        </animated.div>
      </Background>
      ) : null}
    </>
  )
}