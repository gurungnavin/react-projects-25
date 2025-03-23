import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('')
  const [qrValue, setQrValue] = useState('')

  const handleQRGenerate = () => {
    setQrValue(inputValue)
    setInputValue('')
  }

  return (
    <section className="w-full min-h-lvh flex items-center justify-center flex-col bg-blue-100 pt-20 pb-10">
      <div className='flex flex-col gap-6 '>
        <h2 className='text-2xl text-center font-bold'>QR Code Generator</h2>
        <QRCode
          size={330}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={qrValue}
          viewBox={`0 0 256 256`}
        />
        <input 
          type="text" 
          placeholder='input text for QR Generate'
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          className="p-3 border rounded-md text-xl"
        />
        <button
          disabled = {inputValue && inputValue.trim() !== '' ? false : true} 
          className= {`py-2 px-6 ${inputValue && inputValue.trim() !== ''? 'bg-blue-400' : 'bg-gray-300'} text-xl font-bold rounded-md text-white`}
          onClick={handleQRGenerate}
        >
          {inputValue && inputValue.trim() !== "" ? 'QR Generate' : '🚫 Disable to Click' }
        </button>
      </div>
    </section>
  );
}

export default QRCodeGenerator