import PostList from '@/components/post-list';
import { Plus, Search } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

export interface IGetListingProps {
}

export default function GetListing (props: IGetListingProps) {
  return (
    <div>
      <h1 className='text-xl font-bold'>Listagem dos Posts</h1>
      <nav className="flex justify-between items-center">
          <div className="flex max-w-sm mb-2 items-center rounded-lg mt-4 bg-primary-gray-200">
            <Search size={26} className='pl-2 text-primary-gray-500'/>
            <input
              placeholder="Pesquise"
              className="max-w-sm p-2 outline-none focus:border-none placeholder-primary-gray-500 rounded-lg bg-primary-gray-200"
              
            />
          </div>
          <button className="flex items-center px-6 outline-none placeholder-gray-50 font-semibold rounded-lg bg-blue-800 text-gray-50">
            <Plus size={22} />
            <Link href={'/screening/new'} className="p-2">novo</Link>
          </button>
        </nav>
      <PostList />
    </div>
  );
}
