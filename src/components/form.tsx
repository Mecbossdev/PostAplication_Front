'use client'
import { useState } from "react";
import { InputComponent } from "./input-component";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useUsersData } from "@/hooks/usePostMutate";
import { useRouter } from "next/navigation";


export interface IFormNewProps {
}

export default function FormNew (props: IFormNewProps) {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [error, setError] = useState("")
  const router = useRouter()

  const submit = async () => {
    try {
      const data = {
        name,
        description,
      };

      const response = await fetch("https://localhost:7201/api/Post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();

        localStorage.setItem("token", responseData.token);

        router.push("/listing/get");
      } else {
        setError("Falha na autenticação");
        // console.error("Falha na autenticação");
      }
    } catch (error) {
      console.error("Erro durante a autenticação", error);
    }
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
