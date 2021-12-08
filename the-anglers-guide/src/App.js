import './App.css';
import {useEffect, useState} from 'react' 
import { Routes, Route } from 'react-router-dom'
import { grabPosts } from './services';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs'
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';


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
      <Header />
      <Navbar setToggle={setToggle}/>
      <Routes>
        <Route path="/" element={<Blogs posts={posts} />} />
        <Route path="/posts/:id" element={<Blog posts={posts}/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
