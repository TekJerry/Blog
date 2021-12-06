import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
        <h4>{post.field.city}</h4>
        <h2>{post.fields.state}</h2>
        </>
      }
      
    </div>
  )
}
