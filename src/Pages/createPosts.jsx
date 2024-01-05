import React, {useState} from 'react'
import {Input,Button, Textarea, Text, FormControl, FormHelperText, FormErrorMessage, FormLabel} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import axiosClient from '../api/axios'
import { useAddPost } from '../hooks/usePostDetails'

const CreatePosts = () => {

  const [title, setTitle]= useState('')
  const [body, setBody]= useState('')

  const {mutate}=useAddPost()

  const onSubmit = (e)=>{
    e.preventDefault();
    const newPost = {title, body}
    mutate(newPost)
    console.log({title, body})

    setTitle('')
    setBody('')
  }
  return (

    <>

  <form onSubmit={onSubmit}>

    <FormControl isRequired>
        <FormLabel>Add Post</FormLabel>
        <Input
        type='text'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
       
    </FormControl>

    <FormControl isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea
        type='text'
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
        
    </FormControl>

      <Button type='submit' my={4} colorScheme='teal'>Add post</Button>
    </form>

   
    </>

  )
}

export default CreatePosts