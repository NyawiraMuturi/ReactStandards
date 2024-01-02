import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {FormErrorMessage,FormLabel,FormControl,Input,Button, Textarea} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import axiosClient from '../api/axios'

const CreatePosts = () => {
  const [title, setTitle] = useState('')
  const [descrition, setDescription] = useState('')

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const { isLoading, isError, error, mutate } = useMutation(createPost, {
    retry: 3,
  });

  const createPost = async ()=>{
    try {
      const response = await axiosClient.post('/posts')
      return response.data

    } catch (error) {

    }
  }
  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.title && errors.description}>
        <FormLabel htmlFor='title'>Add New Post Here</FormLabel>
        <Input
          id='title'
          placeholder='title'
          {...register('title', {
            required: 'This field is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
        
        </FormErrorMessage>
   
        <Textarea
          mt={4}
          id='description'
          placeholder='description'
          {...register('description', {
            required: 'This field is required',
            
          })}
        />

        <FormErrorMessage>

          {errors.description && errors.description.message}
        </FormErrorMessage>

      </FormControl>
      <Button my={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Add Post
      </Button>
    </form>
  )
}

export default CreatePosts