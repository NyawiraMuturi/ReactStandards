import axiosClient from "../api/axios";
import {useMutation} from "@tanstack/react-query"


const addPost = (newPost)=>{
 return axiosClient.post('/post', newPost)
}
export const useAddPost = () => {
    return useMutation(addPost)
}