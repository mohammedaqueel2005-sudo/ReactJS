import React from 'react'

const App = () => {

  // function btnclick(){
  //   console.log('button is clicked');
  // }

  // function mouseEnter(){
  //   console.log('Mouse Entered');
  // }

  // function inputChange(val){
  //   console.log(val);
  // }

  const pageScroling = (val) => {
        console.log('Page Scrolling.... at Speed ', val);
      }

      

  return (
    <div>
      {/* <button onMouseEnter={mouseEnter} onClick={btnclick}>Click Here</button> */}
      {/* <input onChange={
        function (elem) {
          inputChange(elem.target.value);
        }
      } type="text" placeholder='Enter Name' /> */}

      {/* <div onMouseMove={(elem)=>{
        console.log(elem.clientX);
      }} className="box"></div> */}

      

      {/* <div onWheel={(elem)=>{
        pageScroling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div> */}

      
    </div>
  )
}

export default App
