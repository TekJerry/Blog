import './App.css';
import {useEffect, useState} from 'react' 
import { Routes, Route } from 'react-router-dom'
import { grabPosts } from './services';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs'
import Form from './components/Form';
import Blog from './components/Blog';


function App() {
  const [posts, setPosts] = useState([])
  const [toggle, setToggle]= useState(false)

  useEffect(() => {
    const getApi = async () => {
    const res = await grabPosts()
    setPosts(res)
    }
    getApi()
  }, [toggle])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs posts={posts} />} />
        <Route path="/newer" element={<Form setToggle={setToggle} />} />
        <Route path="/posts/:id" element={<Blog posts={posts}/>} />
        </Routes>
    </div>
  );
}

export default App;
