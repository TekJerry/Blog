import React, {useRef, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Form from './Form';
import { useSpring, animated } from 'react-spring'



const Background = styled.div`
width: max-content;
height:100;
position:absolute;
right: 500px;
border: 5px green solid;
`;


const ModalWrapper = styled.div`
width: 900px;
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
  flex-flow: column wrap;
  justify-content: center;

  line-height: 1.8;
  color: #141414;
  border:blue 3px solid;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
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


export const Modal = ({ showModal, setShowModal }) => {
  
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
            <Form />
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