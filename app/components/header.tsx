import React from 'react'
import Image from 'next/image'
import userLogo from '../../public/img/user-logo.png'

const Header = () => {
    return (
        <nav className='w-full bg-black text-white px-6 py-4'>
        <div className='flex justify-between items-center'> 
            <ul className='flex gap-6'>
            <li>Home</li>
            <li>Content</li>
            <li>Categories</li>
            <li>Settings</li>
            </ul>
            <div className='flex bg-white text-black rounded-full p-1'>
            <Image
            width="25"
            height="10"
            src={userLogo}
            alt="user image"
            className='rounded-full'
            />
            <span>&nbsp;ismail ihsan bulbul</span>
            </div>
        </div>
        </nav>
      )
}

export default Header