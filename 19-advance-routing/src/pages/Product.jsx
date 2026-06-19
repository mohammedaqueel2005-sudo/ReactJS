import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex gap-10 px-4 py-5 justify-center'>
          <Link className='text-lg font-semibold' to='/product/men'>Men</Link>
          <Link className='text-lg font-semibold' to='/product/women'>Women</Link>
          <Link className='text-lg font-semibold' to='/product/kid'>Kid</Link>
        </div>

        <Outlet />
    </div>
  )
}

export default Product