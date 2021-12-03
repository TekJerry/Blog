import './App.css';
// import Form from './components/Form';
import {useEffect, useState} from 'react' 
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom'
import { grabPosts } from './services';
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
 


function App() {
  const [post, setPost] = useState([])

  useEffect(() => {
    const getApi = async () => {
    const res = await grabPosts()
    setPost(res)
    }
    getApi()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Blogs post={post}/> 
    </div>
  );
}

export default App;
