'use client'
import { 
  Home, 
  List, 
  LogOut,
  UserPlus,
} 
  from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export function Nav() {
  const inactiveLink = 'flex gap-4 mb-6 border-gray-600 transition ease-in-out delay-200 hover:border-purple-250 duration-150 ...';
  const activeLink = inactiveLink+' text-blue-700';
  const pathname = usePathname();

  return (
    <aside className=' p-6 text-gray-500 border'>

      <nav className='flex flex-col'>
        <div className='font-extrabold text-xl text-blue-500 mb-4 mt-4'>
          <p>PostAplication</p>
        </div>
        <div className='mt-4 mb-8'>
          <Link href={'/listing/get'} className={pathname.includes('/listing/get') ? activeLink : inactiveLink}>
            <List size={22} className="ml-2"/>
            Listagem
          </Link>
          <Link href={'/listing/post'} className={pathname.includes('/listing/post') ? activeLink : inactiveLink}>
            <UserPlus size={22} className="ml-2"/>
            Novo post
          </Link>             
        </div>
        
        <div className='fixed bottom-0'>
          <Link href={'/'} className={inactiveLink}>
            <LogOut size={22} className="ml-2"/>
            Sair
          </Link>            
        </div>
      </nav>
    </aside>
  )
}