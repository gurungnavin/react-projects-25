import React from 'react'
import data from '../constants/accordian.data.js'

const Accordian = () => {
  return (
    <div className='w-full h-lvh flex items-center justify-center flex-col bg-blue-100'>
      {data && data.length > 0 ? 
      (data.map((item)=> 
      <div key={item.id} className='bg-green-100'>
        <div>
        <h3>{item.question}</h3>
        <span>▼</span>
        </div>
      </div>
      ))
      : 
      (<div>No Data Found</div>)}
    </div>
  )
}

export default Accordian