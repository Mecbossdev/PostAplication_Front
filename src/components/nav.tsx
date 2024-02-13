'use client'
import { 
  LayoutDashboard, 
  Home, 
  Filter, 
  BadgeCheck,
  LogOut,
  HelpCircle,
  Settings,
  ChevronDown,
  UserPlus,
  CheckSquare
} 
  from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

export function Nav() {
  const [filterNav, setfilterNav] = useState<string>('')
  const [open, setOpen] = useState<boolean>(true);
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  const inactiveLink = 'flex gap-4 mb-6 border-gray-600 transition ease-in-out delay-200 hover:border-purple-250 duration-150 ...';
  const activeLink = inactiveLink+' text-primary-blue-700';
  const pathname = usePathname();

  return (
    <aside className=' p-6 text-primary-gray-500 border'>
      <div className="flex justify-center">
      </div>
      <nav className='flex flex-col'>
        <div className='text-sm mb-4 mt-4'></div>
        <div className='mt-4 mb-8'>
          <Link href={'/home'} className={pathname.includes('/home') ? activeLink : inactiveLink}>
            <Home
              className="ml-2"
              size={22}
            />
            Inicial
          </Link>
          <Link href={'/dashboard'} className={pathname.includes('/dashboard') ? activeLink : inactiveLink}>
            <LayoutDashboard
              className="ml-2"
              size={22}
            />
            Dashboard
          </Link>
          <Link href={'/listing/get'} className={pathname.includes('/listing/get') ? activeLink : inactiveLink}>
            <UserPlus size={22} className="ml-2"/>
            Listagem
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