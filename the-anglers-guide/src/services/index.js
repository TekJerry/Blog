import axios from 'axios'

export const BASE_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_API_BASE}/fishing`

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  }
}

export const grabPosts = async () => {
  const response = await axios.get(BASE_URL, config)
  return response.data.records
}