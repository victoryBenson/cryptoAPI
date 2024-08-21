import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <Link to='/'>
        <div className='navbar flex justify-center items-center'>
            <FaCoins className='icon text-[2rem] text-[#8774a1]'/>
            <h1 className='font-bold text-3xl'>Coin <span className='purple text-[#6900ff]'>Search</span></h1>
        </div>
    </Link>
  )
}
