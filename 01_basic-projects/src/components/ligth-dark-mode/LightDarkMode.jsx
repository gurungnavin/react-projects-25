import React, {useState} from 'react'
import ToggleButton from '../ToggleButton'
import UseLocalStorage from './UseLocalStorage'

const LigntDarkMode = () => {
  const [isOn, setIsOn] = UseLocalStorage("theme", false)
  return (
    <section className={`${isOn ? 'bg-gray-900 text-white' : 'bg-blue-100 text-black'} w-full min-h-lvh flex items-center justify-center flex-col  pt-20 pb-10`}>
    <h2 className='text-2xl font-bold'>Change Theme</h2>
    <div className='flex flex-col items-center gap-3 border py-7 px-14 mt-2 rounded-2xl'>
      <p className='text-xl font-bold'>{isOn ? 'Dark Mode' : 'Light Mode'}</p>
    <ToggleButton isOn={isOn} setIsOn={setIsOn}/>
    </div>
    </section>
  )
}

export default LigntDarkMode