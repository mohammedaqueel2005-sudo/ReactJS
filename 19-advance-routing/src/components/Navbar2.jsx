import React from 'react';
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

      const navigate = useNavigate();

  return (
    <div className='bg-blue-300 '>
      <button
        onClick={()=>{
          navigate('/')
        }} 
        className='bg-emerald-800 py-2 px-5 m-2 cursor-pointer active:scale-95 font-medium rounded-md'
      >
        Return to Home Page
      </button>
      <button
        onClick={()=>{
          navigate(-1);
        }} 
        className='bg-emerald-800 py-2 px-5 m-2 cursor-pointer active:scale-95 font-medium rounded-md'
      >
        Back
      </button>
      <button
        onClick={()=>{
          navigate(+1);
        }} 
        className='bg-emerald-800 py-2 px-5 m-2 cursor-pointer active:scale-95 font-medium rounded-md'
      >
        Next
      </button>
    </div>
  );
}

export default Navbar2;
