'use client'
import { api } from '@/data/api';
import { PostData } from '@/interfaces/post-data';
import axios from 'axios';
import { useEffect, useState } from 'react';


export interface IPostListProps {
}

export default function PostList() {
  const [data, setData] = useState<PostData[]>([])

  const fetchData = async () => {
    const response = await axios.get("https://localhost:7201/api/Post")
    return setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='grid grid-cols-3 gap-4 p-4'>  
      {data?.map((data) => (
        <ul key={data.id} className='flex flex-col p-4 border rounded-xl bg-sky-500 w-52'>
          <li>{data.name}</li>
          <li className='text-xs'>{data.description}</li>
        </ul>  
      ))}
    </div>
  );
}
