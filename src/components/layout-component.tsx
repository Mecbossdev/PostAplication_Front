'use client'
import { Nav } from "@/components/nav";
  

type PropsLayout = {
  children: React.ReactNode
}

export default function LayoutComponent({children}: PropsLayout) {
  return (
    <div className="bg-primary-gray-100 mx-auto min-h-screen w-full max-w-[1600px] flex dark:bg-primary-gray-900">
      <Nav />
      <div className="bg-primary-gray-200 flex-grow dark:bg-primary-gray-600">
        {children}
      </div>
    </div>
  )
}