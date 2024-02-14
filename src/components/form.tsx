'use client'
import { useState } from "react";
import { InputComponent } from "./input-component";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { postData, useMutatePost, } from "@/hooks/usePostMutate";
import { useRouter } from "next/navigation";
import { useQueryPost } from "@/hooks/usePostData";


export interface IFormNewProps {
}

export default function FormNew (props: IFormNewProps) {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [error, setError] = useState("")
  const router = useRouter()

  const { mutate } = useMutatePost()
  

  const submit =  () => {

    const data = {
      name,
      description,
    };

    mutate(data)
  };

  return (
    <>
      <form action="post">
        <div className='my-5'>
          <InputComponent
            value={name} 
            type="text"
            className="max-w-sm p-2 outline-none focus:border-none placeholder-gray-500 rounded-lg bg-gray-200"
            updateValue={setName}
          />
        </div>
        <div className='my-5'>
          <InputComponent
            value={description} 
            type="text"
            className="max-w-sm p-2 outline-none focus:border-none placeholder-gray-500 rounded-lg bg-gray-200"
            updateValue={setDescription}
          />
        </div>
        <button type='submit' className='p-2 font-semibold rounded-lg bg-blue-800 text-gray-50' onClick={submit}>Postar</button>
      </form>
    </>
  );
}
