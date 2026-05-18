import React from 'react'

const App = () => {

  const subitHandler = (e)=>{
    e.preventDefault();
    console.log('Form submitted.');
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        subitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
