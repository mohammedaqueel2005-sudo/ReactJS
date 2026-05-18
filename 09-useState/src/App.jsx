import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const increaseNum = ()=>{
    setNum(num+1);
  }

  const decreaseNum = ()=>{
    setNum(num-1);
  }

  const jump5Num = ()=>{
    setNum(num+5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrese</button>
      <button onClick={jump5Num}>Increase by 5</button>
    </div>
  )
}

export default App
