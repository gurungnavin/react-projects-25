import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";



const LoadMore = () => {
  // for loading before data is fetched
  const [loading, setLoading] = useState(false)

  // for products
  const [products, setProducts] = useState([])

  // for count
  const [count, setCount] = useState(0)

  // for disable button
  const [disableButton, setDisableButton] = useState(false)

  // for error handling
  const [error, setError] = useState(false)

  // for fetching data
  const fetchData = async () => {
    setLoading(true)
    try {
      const url = `https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`
      const response = await fetch(url)
      const data = await response.json()
      if (data && data.products && data.products.length) {
        setProducts((prevData)=> [...prevData, ...data.products])
        setLoading(false)
      }

    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [count])

  useEffect(()=> {
    if(products && products.length === 80) setDisableButton(true)
  },[products])

  // Display a loading spinner while data is being fetched but not where product's length is not zero.
  if (loading && products.length === 0) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <AiOutlineLoading3Quarters className='animate-spin text-4xl text-blue-500' />
        <p className='ml-4 text-lg font-semibold'>データを読み込み中です, しばらくお待ちください...</p>
      </div>
    );
  }

  // error handling
  if(error) {
     return <div className="min-h-screen w-full flex flex-col items-center justify-center">
          <MdErrorOutline size={60} className="text-red-600 animate-bounce" /><span className='m-3 text-xl font-extrabold text-gray-500 text-center'>エラーが発生しました<br />データを取得できませんでした。<br />再読み込みしてください。</span>
        </div>
        }


  return (
    <section className='bg-blue-100 min-h-screen w-full flex items-center justify-center py-10'>
      <div className='flex flex-col justify-center items-center'>
        {
          products.length ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5'>
              {
                products.map((product, index) => {
                  return (
                    // This div represents a single product card
                    <div key={index} className='p-3 w-[280px] h-auto rounded-2xl shadow-lg cursor-pointer border-white border-4'>
                      <img src={product.images[0]
                      } alt={product.title} className='w-full h-44 object-contain mb-2 border-2 border-white bg-white rounded-lg' />
                      <h2 className='text-lg font-bold text-center mb-2'>{product.title}</h2>
                      <p className='text-gray-600 text-xs text-justify px-4'>{product.description}</p>
                      <div className='flex justify-between items-center mt-4 px-1'>
                        <p className='text-center text-lg font-bold px-2 py-1 bg-white'>${product.price}</p>
                        <button className='bg-blue-500 text-white px-2 py-1 rounded-md'>Add to Cart</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          ) : null
        }
        {
          error && <p className='text-center text-2xl font-bold text-red-500'>{error}</p>
        }
       {
         products.length ? (
          <div className='flex flex-col items-center justify-center'>
          <button 
          disabled = {disableButton}
          className={`px-4 py-1 rounded-md mt-8 ${disableButton ? 'bg-gray-400 text-black' : 'bg-green-400 text-white'}`}
          onClick={()=> setCount(count + 1)}
          >{disableButton ? '⊘ Disable Button' : 'Load More...'}</button>
          <p className='text-center text-[16px] mt-4'>{disableButton ? 'アイテムは80個までです。' : `80個中${products.length}個の商品が表示されています。`}</p>
          </div>
         ) : null
       }
      </div>
    </section>
  )
}

export default LoadMore