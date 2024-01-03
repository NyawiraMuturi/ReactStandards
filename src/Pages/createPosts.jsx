import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {Input,Button, Textarea, Text, FormControl} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import axiosClient from '../api/axios'
import { useAddPost } from '../hooks/usePostDetails'

const CreatePosts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
} = useForm()




  const [title, setTitle]= useState('')
  const [body, setBody]= useState('')


  const {mutate}=useAddPost()

  const onSubmit = ()=>{
    const newPost = {title, body}
    mutate(newPost)
    console.log({title, body})
  }
  return (

    <>

  <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <label htmlFor="">Title</label>
        <Input
        
        mb={4}
          // value={title}
          onChange={(e)=> {
            title.onChange(e);
            setTitle(e)
          }}
          placeholder='Title'
          {...register("title", { required: true })}
          aria-invalid={errors.title ? "true" : "false"}
        />
        {errors.title?.type === "required" && (
          <Text color='tomato'>Title cannot be blank</Text>
        )}

          <label htmlFor="">Description</label>
        <Textarea
          // value={body}
          onChange={(e)=>setBody(e.target.value)}
        placeholder='Description'
        
          {...register("body", { required: "Description is required" })}
          aria-invalid={errors.body ? "true" : "false"}
        />
        {errors.body && <Text color='tomato'>{errors.body.message}</Text>}
      </FormControl>


      <Button type='submit' my={4}>Add post</Button>
    </form>

   
    </>

  )
}

export default CreatePosts