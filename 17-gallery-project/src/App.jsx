import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);

    setUserData(response.data);

  }

  useEffect(()=>{
    getData();
  },[index])

  let printUserData = <h3 className='text-gray-300 font-bold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      

      <div className='flex flex-wrap gap-4 p-4'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 mt-3 items-center'>
        <button 

          style={{opacity: index == 1 ? 0.5 : 1}}          

          className="bg-amber-400 text-sm text-black cursor-pointer py-4 px-6 font-bold active:scale-95 "

          onClick={()=>{
            if(index > 1) {
              setIndex(index-1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h4 className='font-semibold'>Page {index}</h4>
        <button 
          className="bg-amber-400 text-sm text-black cursor-pointer py-4 px-6 font-bold active:scale-95 "

          onClick={()=>{
            setUserData([])
            setIndex(index+1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
