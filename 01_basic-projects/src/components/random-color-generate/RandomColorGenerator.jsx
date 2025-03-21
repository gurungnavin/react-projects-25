import React, { useEffect, useState } from 'react'

const RandomColorGenerator = () => {
  const [typeOfCOlor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#D3B176')

  /**
   * Generates a random hexadecimal color code and updates the state with the new color.
   * 
   * Steps:
   * 1. Defines an array of valid hexadecimal characters (0-9, A-F).
   * 2. Initializes a string with a '#' to represent the start of a hex color.
   * 3. Iterates 6 times to randomly select characters from the hex array.
   *    - Generates a random index within the range of the hex array.
   *    - Appends the randomly selected character to the hex color string.
   * 4. Logs the random index and the intermediate hex color during each iteration for debugging.
   * 5. Updates the state with the generated hex color using `setColor`.
   */
  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * hex.length)
      // console.log("RANDOM: " +random);
      hexColor += hex[random]
      // console.log("hexCOlor: " + hexColor);
    }
    setColor(hexColor)
  }


  const handleCreateRandomRGBColor = () => {
    const random = () => Math.floor(Math.random() * 256)
    const rgbColor = `rgb(${random()}, ${random()}, ${random()})`
    setColor(rgbColor)
  }
  

  /* 
  We use useEffect to re-render and generate a new color automatically whenever 'typeOfColor' changes, ensuring the UI stays in sync with the selected color type.
  */

  useEffect(() => {
    if (typeOfCOlor === 'hex') {
      handleCreateRandomHexColor()
    } else {
      handleCreateRandomRGBColor()
    }
  }, [typeOfCOlor])

  return (
    <section
      className='w-full h-lvh flex flex-col items-center justify-center'
      style={{ backgroundColor: color }}
    >
      <div className='max-w-[550px] display flex flex-col items-center justify-center gap-6 border p-4'>
        <div className='flex gap-6 items-center justify-center'>
          <button 
          className='bg-red-400 px-9 py-3 text-xl font-semibold text-white rounded-xl'
          onClick={() => setTypeOfColor('hex')}
          >HEX COLOR</button>
          <button 
          className='bg-orange-500 px-9 py-3 text-xl font-semibold text-white rounded-xl'
          onClick={() => setTypeOfColor('rgb')}
          >RGB COLOR</button>
        </div>
        <button
          className='bg-slate-500 px-9 py-3 text-xl font-semibold text-white rounded-xl'
          onClick={() =>
            typeOfCOlor === 'hex'
              ? handleCreateRandomHexColor()
              : handleCreateRandomRGBColor()
          }
        >
          GENERATE RANDOM COLOR
        </button>
      </div>
      <div className='bg-white min-w-[420px] h-16 mt-4 content-center text-center font-bold text-xl'>
        {typeOfCOlor === 'hex' ? `HEX COLOR : ${color}`: `RGB COLOR : ${color}`}
      </div>
    </section>
  )
}

export default RandomColorGenerator