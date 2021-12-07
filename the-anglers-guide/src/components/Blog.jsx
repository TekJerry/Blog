import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Blog.css"

export default function Blog(props) {

  const [post, setPost] = useState({})
  const params = useParams()

  useEffect(() => {
    const foundPost = props.posts.find(post => {
      return post.id === params.id
    })
    setPost(foundPost)
  }, [params.id, props.posts])

  return (
    <div>
      { post && post.fields &&
        <>
      <div className="container">
            <div className="image-containers">
              <img className="main-image" src={post.fields.image} alt="Fish Caught" />
                <div className="lake">{post.fields.lake}</div>
                <div className="freshwater">{post.fields.freshwater}</div>
          </div>
          <div className="inner-container">
          <div className="angler">{post.fields.angler}</div>
          <div className="caught">{post.fields.date}</div>
          <p className="description">{post.fields.description}</p>
          <div className="location">
            <h3>{post.fields.state} , {post.fields.city}</h3>
            </div>
          </div>
        </div>
        </>
      }
      
    </div>
  )
}
