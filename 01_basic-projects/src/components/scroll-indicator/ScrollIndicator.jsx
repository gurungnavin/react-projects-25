import React, { useEffect, useState } from 'react'
import { VscLoading } from 'react-icons/vsc';
import { MdErrorOutline } from "react-icons/md";

const scrollIndicator = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = "https://dummyjson.com/products?limit=100"
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data);
      if(data && data.products && data.products.length > 0) {
       setData(data.products);
       setLoading(false)  
      }
       
    } catch (error) {
      console.log(error.message);
      setError(error.message)
      setLoading(false)
    }
  }
  


  useEffect(() => {
    fetchData()
  }, [])
  
  
  const handlerScrollPercentage = () => {
    const howMuchScrolled =
    document.body.scrollTop || document.documentElement.scrollTop;
  
    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    // to ignore the decimal value and get the whole number
    // Math.ceil to round up the value to the nearest whole number
    setScrollPercentage(Math.ceil((howMuchScrolled/ height) * 100));
  }

  useEffect(() => {
    window.addEventListener('scroll', handlerScrollPercentage)
    return () => {
      window.removeEventListener('scroll', ()=> {})
    }
  },[])


//  console.log(scrollPercentage);

  if (loading) {
     return <div className="min-h-[60vh] w-full flex items-center justify-center">
       <VscLoading size={40} className="animate-spin" />
       <span className='m-3 text-xl font-bold'>データを読み込み中です！ しばらくお待ちください。</span>
     </div>
 
   }

    // error handling
     if(error) {
       return <div className="min-h-[60vh] w-full flex items-center justify-center">
         <MdErrorOutline size={40} className="text-red-600 animate-bounce" /><span className='m-3 text-xl font-extrabold text-blue-500'>"エラーが発生しました！ データを取得できませんでした。"</span>
       </div>
     }
  
  return (
    <div>
      {/* This div is for scroll bar display while scrolling */}
      <div className='fixed top-0 left-0 w-full h-[10px] bg-gray-200'>
        <div className='bg-green-500 h-full' style={{width: `${scrollPercentage}%`}}></div>
      </div>
       <div>
        {
          data && data.length ? data.map((item, index) => {
            return (
                <h1 className='px-6 py-2 border bg-slate-300 text-center text-black font-bold mx-32' key={index}>{item.title}</h1>
            )
          })
          : null
        }
       </div>
    </div>
  )
}

export default scrollIndicator