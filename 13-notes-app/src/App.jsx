import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);
    console.log(copyTask);
    

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx)=>{    
    const copyTask = [...task];

    copyTask.splice(idx,1);

    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 gap-4 p-10 flex-col items-start ' action="">
        <h1 className='text-5xl font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 py-2  outline-none h-15 font-medium w-full border-2 rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          name=""
          id=""
          className='px-5 py-2 outline-none font-medium w-full h-32 border-2 rounded'
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        >
        </textarea>

        <button
          className='bg-white active:bg-gray-500 w-full h-15 outline-none text-black px-5 py-2 rounded'
        >
          Add Note
        </button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 h-screen p-10 flex flex-col'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-y-auto flex-1 ">
          {task.map((elem, idx) => {
            return <div key={idx} className=" flex justify-between items-start flex-col relative h-60 w-50 text-2xl text-black px-4 pb-4 py-8 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] rounded-xl">
              <div>
                <h3 className=' leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-sm font-medium text-gray-700'>{elem.details}</p>
              </div>
              <button onClick={(idx)=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs text-white rounded font-bold'>Delete</button>
            </div>

          })}
        </div>
      </div>
    </div>
  )
}

export default App
