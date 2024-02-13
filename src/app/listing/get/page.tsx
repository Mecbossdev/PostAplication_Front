'use client'
import { InputComponent } from '@/components/input-component';
import PostList from '@/components/post-list';
import { Plus, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export interface IGetListingProps {
}

export default function GetListing (props: IGetListingProps) {
  
  const submit = () => {
    console.log('pesquisa')
  }

  return (
    <div>
      <h1 className='text-xl font-bold'>Listagem dos Posts</h1>
      <nav className="flex justify-between items-center">
          <div className="flex max-w-sm mb-2 items-center rounded-lg mt-4 bg-gray-200">
            <Search size={26} className='pl-2 text-gray-500 '/>
            <InputComponent
              placeholder="Pesquise"
              className="max-w-sm p-2 outline-none focus:border-none placeholder-gray-500 rounded-lg bg-gray-200"
              updateValue={submit}
            />
          </div>
          <button className="flex items-center px-6 font-semibold rounded-lg bg-blue-800 text-gray-50">
            <Plus size={22} />
            <Link href={'/listing/post'} className="p-2">novo</Link>
          </button>
        </nav>
      <PostList />
    </div>
  );
}
