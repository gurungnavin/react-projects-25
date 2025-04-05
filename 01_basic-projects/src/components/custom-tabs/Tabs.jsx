import React, { useState } from 'react'

const Tabs = ({ tabContent }) => {
  const [CurrentIndex, setCurrentIndex] = useState(0)

  const handleTabClick = (index) => {
    setCurrentIndex(index)
    // onChange(index)
  }
  return (
    <section className='w-full h-lvh bg-gray-100 flex items-center justify-center'>
      <div className='w-1/2 h-[70%] bg-white shadow-lg rounded-lg p-10'>
        <div className='flex justify-between mb-4 bg-white border p-1 border-green-500 shadow-inner rounded-full'>
          {tabContent.map((tab, index) => (
            <button
              key={index}
              className={`text-xl font-bold py-2 px-6  ${CurrentIndex === index ? 'bg-green-500 text-white rounded-full' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='min-h-[510px] flex items-start justify-center rounded-lg shadow-lg py-4 px-10'>
          {tabContent[CurrentIndex].content}
        </div>
      </div>
    </section>
  )
}

export default Tabs