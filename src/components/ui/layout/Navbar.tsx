import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center p-5 shadow-sm justify-between w-full'>
        <h1 className='text-2xl'>FlashTeXt⚡</h1>
        <ul className='text-slate-700 flex gap-5'>
            <li className='hover:text-black transition-colors'>Pricing</li>
            <li className='hover:text-black transition-colors'>Log in</li>
            <li className='hover:text-black transition-colors'>Sign up</li>
        </ul>
    </nav>
  )
}

export default Navbar