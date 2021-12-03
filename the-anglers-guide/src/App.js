import './App.css';
// import Form from './components/Form';
import {useEffect, useState} from 'react' 
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom'



function App() {
  const [post, setPost] = useState([])

  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get(
        `https://api.airtable.com/v0/${process.env.REACT_APP_API_BASE}/fishing?api_key=${process.env.REACT_APP_API_KEY}`
      )
      console.log(res.data)
    }
    getApi()
  }, [])

  return (
    <div className="App">
      {/* <Form /> */}
    </div>
  );
}

export default App;
