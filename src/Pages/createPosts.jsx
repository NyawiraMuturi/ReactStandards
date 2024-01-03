import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {Input,Button, Textarea, Text} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import axiosClient from '../api/axios'

const CreatePosts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

const onSubmit =()=>{
  alert('Form Submitted')
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Title</label>
      <Input
      mb={4}
        placeholder='Title'
        {...register("newPost", { required: true })}
        aria-invalid={errors.newPost ? "true" : "false"}
      />
      {errors.newPost?.type === "required" && (
        <Text color='tomato'>Title cannot be blank</Text>
      )}

        <label htmlFor="">Description</label>
      <Textarea
      placeholder='Description'
      
        {...register("description", { required: "Description is required" })}
        aria-invalid={errors.description ? "true" : "false"}
      />
      {errors.description && <Text color='tomato'>{errors.description.message}</Text>}

      <Button 
      type='submit' my={4}>Add post</Button>
    </form>
  )
}

export default CreatePosts