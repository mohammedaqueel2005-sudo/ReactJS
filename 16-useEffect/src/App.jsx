import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100)

  useEffect(function(){
    console.log("use effect is running...");
    
  },[num])


  return (
    <div>
      <h1>Num is {num}</h1>
      <h1>Num2 is {num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num+1);
      }}

      onMouseLeave={()=>{
        setNum2(num2+10);
      }}
      >
        Cllick
      </button>
    </div>
  )
}

export default App
