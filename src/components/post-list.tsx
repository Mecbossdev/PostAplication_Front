'use client'
import { api } from '@/data/api';
import { fetchData, useQueryPost } from '@/hooks/usePostData';
import { PostData, PostResponse } from '@/interfaces/post-data';
import { Delete } from 'lucide-react';
import { useState } from 'react';



export interface IPostListProps {
}

export default function PostList() {
  const [value, setValue] = useState<PostData[]>([])
  const {data} = useQueryPost()
  const handleDelete = (id: number) => {
    const deleteItem = value.filter(item => {
      return item.id !== id
    })
    setValue(deleteItem)
    
  }


  return (
    <div className='grid grid-cols-3 gap-4 p-4'>  
      {data?.map((data) => (
        <ul key={data.id} className='flex flex-col p-4 border rounded-xl bg-sky-200 w-52'>
          <li className='flex justify-between'>
            {data.name}
            <Delete className="cursor-pointer"/>
          </li>
          <li className='text-xs'>{data.description}</li>
          
        </ul>  
      ))}
    </div>
  );
}
