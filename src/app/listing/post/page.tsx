import FormNew from "@/components/form";
import { useState } from "react";

export interface InewListingProps {
}

export default function newListing (props: InewListingProps) {
  
  
  return (
    <div className='p-10'>
      <h1 className='text-lg font-bold'>Novo Post</h1>
      <FormNew />
    </div>
  );
}
