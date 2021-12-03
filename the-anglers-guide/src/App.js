import './App.css';
// import Form from './components/Form';
import {useEffect, useState} from 'react' 
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom'
import { grabPosts } from './services';
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getApi = async () => {
    const res = await grabPosts()
    setPosts(res)
    }
    getApi()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs posts={posts} />}/>
    
        </Routes>
    </div>
  );
}

export default App;
