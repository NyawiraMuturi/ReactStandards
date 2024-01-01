
import { useQuery } from '@tanstack/react-query'
import axiosClient from '../api/axios'


const fetchPosts = async () =>{
  try{
    const response = await axiosClient.get('/posts')
    return response.data

  } catch (error){
    throw new Error('Cannot Fetch Posts')
  }
}

const Posts = () => {

  const {isLoading, isError, data, error} = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if(isLoading){
    return <span>Loading ...</span>
  }

  if(isError){
    return <span>Error:{error.message}</span>
  }
 


  return (
    <div>
      <h1>All Posts</h1>
      {data?.map((post) =>{
        return <li key={post.id}>{post.title}</li>
      })}
    </div>
  )
}

export default Posts
