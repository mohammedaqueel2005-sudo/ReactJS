import React from 'react'

const App = () => {

  // localStorage.setItem("user","Mohammed Aqueel");

  // localStorage.setItem("age",20);

  // const user = localStorage.getItem("user");
  // console.log(user);

  // localStorage.removeItem("user");

  // localStorage.clear();

  const user = {
    name: "Mohammed Aqueel",
    age: 20,
    college: "BMS"
  }

  // localStorage.setItem("user",JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("user"));

  console.log(typeof(users));
  
  

  return (
    <div>
      App
    </div>
  )
}

export default App
