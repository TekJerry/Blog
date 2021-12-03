import React from 'react'
import Card from './Card'
import "./Blogs.css"

export default function Blogs({posts}) {
  return (
    <div>
      <div className="all-content"> 
      {posts.map((post) => (
        <Card
          key={post.id}
        state={post.fields.state}
        image={post.fields.image}
        city={post.fields.city} />
      ))}
    </div>
    </div>
  )
}
