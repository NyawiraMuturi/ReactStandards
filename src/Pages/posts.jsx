import React, { useState, useEffect }  from 'react'
import axiosClient from '../api/axios'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")

    useEffect(()=>{
        getPosts();
    }, [])

    const getPosts = () =>{
        axiosClient
         .get('/posts')
         .then(res =>{
            setPosts(res.data)
            // return axiosClient.get(`/posts/${postId}/comments?postId=${postId}`)
         })
        //  .then(res => {
        //     setComments(res.data)
        //  })
         .catch( error => {
            setError(error.message)
         } )
    }

  return (
    <div>
      <ul>
        {error && <p>Error Message: {error}</p>}
        {posts.map((post) => (
            <li key = {post.id}>
                <p>Title : {post.title} </p>
                <br />
                <h5>{post.body}</h5>
                
                <h3>Comments: </h3> 
                <hr />

            </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
