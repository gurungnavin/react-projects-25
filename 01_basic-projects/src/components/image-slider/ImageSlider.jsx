import React, { useEffect, useState } from 'react'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { VscLoading } from 'react-icons/vsc';
import { MdErrorOutline } from "react-icons/md";

const ImageSlider = () => {
  // images array for the slider
  const [images, setImages] = useState([]);
  // index for the current image
  const [currentSlide, setCurrentSlide] = useState(0);
  // error handling
  const [errorMessages, setErrorMessages] = useState(null);
  // loading state
  const [loading, setLoading] = useState(false);
  // page state
  const [page, setPage] = useState(1);
  // limit state
  const [limit, setLimit] = useState(10);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const url = 'https://picsum.photos/v2/list';
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data.length > 0) {
        setImages(data);
        setLoading(false);
        // console.log(images);
      }
      else return setErrorMessages('No images found');


    } catch (error) {
      console.error(error);
      setErrorMessages(error.message);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchImages();
  }, [page]);

  if (loading) {
    return <div className="min-h-[60vh] w-full flex items-center justify-center">
      <VscLoading size={40} className="animate-spin" />
      <span className='m-3 text-xl font-bold'>データを読み込み中です！ しばらくお待ちください。</span>
    </div>

  }

  // error handling
  if(errorMessages) {
    return <div className="min-h-[60vh] w-full flex items-center justify-center">
      <MdErrorOutline size={40} className="text-red-600 animate-bounce" /><span className='m-3 text-xl font-extrabold text-blue-500'>"エラーが発生しました！ データを取得できませんでした。"</span>
    </div>
  }
 
  return (
    <section className='min-h-[60vh] w-full flex flex-col justify-center items-center gap-12 bg-slate-300'>
      <div className='flex items-center justify-center relative w-[600px] h-[400px] bg-gray-100 p-4'>
        <GrPrevious
          className='absolute top-1/2 left-[-50px] transform -translate-y-1/2 cursor-pointer text-4xl bg-white  hover:bg-slate-300 hover:text-white hover:border hover:shadow-lg rounded-full p-2'
          onClick={() => setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)}
        />
        <div className='w-full h-full flex items-center justify-center overflow-hidden'>
          {images && images.length
            ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={`${currentSlide === index
                  ? "opacity-100 transition-opacity duration-300"
                  : "hidden opacity-0 transition-opacity duration-300"
                  }`}
              />
            ))
            : null}

        </div>
        <GrNext
          className='absolute top-1/2 right-[-50px] transform -translate-y-1/2 cursor-pointer text-4xl bg-white hover:bg-slate-300 hover:text-white hover:border hover:shadow-lg rounded-full p-2'
          onClick={() => setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)}
        />
        <span className='absolute bottom-[-30px] flex gap-4'>
          {
            images && images.length ? images.map((_, index) => (
              <button
                key={index}
                className={currentSlide === index ? 'bg-orange-400 w-4 h-4 rounded-full' : 'bg-white w-4 h-4 rounded-full'}
                onClick={() => setCurrentSlide(index)}
              ></button>

            )) : null
          }
        </span>
      </div>

      {/* Page Selector */}
      <div className="mt-4 flex gap-4 justify-center items-center">
        <select
          value={page}
          onChange={(e) => setPage(e.target.value)}
          className="border p-2 rounded"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,19,20].map((pageNum) => (
            <option key={pageNum} value={pageNum}>
              ページ {pageNum}
            </option>
          ))}
        </select>

      </div>
    </section>
  )
}

export default ImageSlider