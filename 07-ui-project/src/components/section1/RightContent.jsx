import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-4 rounded-4xl flex flex-nowrap gap-10 overflow-x-auto'>
     { props.users.map(function(ele, idx) {

        return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag} />
      })}  
    </div>
  )
}

export default RightContent
