import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center p-5 shadow-sm justify-between w-full'>
        <h1 className='text-2xl font-bold'>FlashTeXt⚡</h1>
        <ul className='text-slate-500 flex gap-5'>
            <li className='hover:text-black text-sm font-semibold transition-colors'>Pricing</li>
            <li className='hover:text-black text-sm font-semibold transition-colors'>Log in</li>
            <li className='hover:text-black text-sm font-semibold transition-colors'>Sign up</li>
        </ul>
    </nav>
  )
}

export default Navbar