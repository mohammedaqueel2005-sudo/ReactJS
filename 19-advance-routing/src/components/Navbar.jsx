import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between px-8 py-5 bg-cyan-600'>
            <h2 className='font-bold text-2xl'>Mohammed Aqueel</h2>
            <div className='flex gap-8 '>
                <Link className='font-medium text-lg' to='/' >Home</Link>
                <Link className='font-medium text-lg' to='/about' >About</Link>
                <Link className='font-medium text-lg' to='/courses' >Courses</Link>
                <Link className='font-medium text-lg' to='/product' >Product</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar