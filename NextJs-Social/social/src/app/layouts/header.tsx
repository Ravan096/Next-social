'use client'
import React from 'react'
import Link from 'next/link'
import { Bell, Blocks, Feather, House, MessageCircleMore, MonitorPlay, Settings, Store, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/signup') {
    return null;
}
  return (
    <div className='header border-2 border-red-800 flex h-16 bg-black text-white'>

      <div className='border-2 border-yellow-500 flex w-1/4 items-center justify-around'>
        <div>
          <Feather />
        </div>
        <div>
          <input type="text" placeholder='search social' />
        </div>
      </div>

      <div className='border-2 border-green-600 w-2/4 flex items-center justify-end'>
        <nav className='w-2/4 border-2 border-white h-full  flex items-center '>
          <ul className="flex space-x-4 justify-around w-full">
            <li>
              <Link href="/">
                <House />
              </Link>
            </li>
            <li>
              <Link href="explorer">
                <MonitorPlay />
              </Link>
            </li>
            <li>
              <Link href="contact">
                <Store />
              </Link>
            </li>
            <li>
              <Link href="userProfile">
                <Users />
              </Link>
            </li>
            <li>
              <Link href="contact">
                <Blocks />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className='border-2 border-white flex items-center justify-end w-1/4'>
        <div className='flex justify-around w-2/4 items-center h-full'>
          <div>
            <Link href='/message'>
            <MessageCircleMore />
            </Link>
          </div>
          <div>
            <Link href='notification'>
            <Bell />
            </Link>
          </div>
          <div className="avatar online h-full">
            <Link href='userProfile'>
            <div className="w-24 rounded-full h-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='h-full rounded-full' />
            </div>
            </Link>
          </div>
          <div>
          <Settings />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header