import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'Aqueel', age:22});

  const changeNum = ()=>{
    const newNum = {...num};
    newNum.user = 'Madhu';
    newNum.age = 24;
    setNum(newNum);

    console.log(newNum);
    
    
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
