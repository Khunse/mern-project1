import React from 'react'
import {FaSearchLocation} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-orange-400 shadow-lg'>
        <div className='flex justify-between p-3 items-center'>
            <Link to='/home'>
                    <h1>
                        <span>Real</span>
                        <span>Eastate</span>
                    </h1>
            </Link>

            <form action="#" className='rounded-lg bg-slate-400 flex items-center' >
                <input type="search" name="" id="" placeholder='search.....'  className='bg-transparent w-24 focus:outline-none p-3'/>
                <FaSearchLocation  className='text-slate-200'/>
            </form>
           
           <div className='flex'>
           <Link to='/hOmE'> 
            <h2>
                Home
            </h2>
           </Link>
           <Link to='/'> 
            <h2>
                Singup
            </h2>
           </Link>
           <Link to='/AboUt'> 
            <h2>
                About
            </h2>
           </Link>
           </div>

        </div>
    </header>
  )
}
