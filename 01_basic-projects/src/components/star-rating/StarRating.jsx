import React, { useState } from 'react'
import { IoIosStarOutline } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";


// noOfStar is set to 5 by default
const StarRating = ({noOfStar = 5}) => {
  // rating is set to 0 by default
  const [rating, setRating] = useState(0);
  // hover is set to 0 by default
  const [hover, setHover] = useState(0);

  // starOnClick function
  // getCurrentIndex is the current index of the star
  // setRating is set to getCurrentIndex
  const starOnClick = (getCurrentIndex) => {
    setRating(getCurrentIndex)
    // console.log(getCurrentIndex); 
  }
  const starOnHover = (getCurrentIndex) => {
    setHover(getCurrentIndex)
  }

  const starOnLeave = () => {
    setHover(rating)
  }
  
  return (
    <section className='h-[40vh] w-full flex justify-center items-center bg-slate-100'>
      <div className='flex flex-col items-center justify-center w-80 bg-gray-100 h-32 shadow-md'>
      <h1 className='text-xl'>{rating > 1 ? `${rating} Stars Ratings` : `${rating} Star Rating`}</h1>
      <div className='flex'>  {/* Make stars align horizontally */}
        {[...Array(noOfStar)].map((_, index) => {
          index += 1;
          return (
            <div 
              key={index} 
              className='cursor-pointer text-4xl'
              onClick={() => starOnClick(index)}
              onMouseMove={() => starOnHover(index)}
              onMouseLeave={() => starOnLeave()}
            >
              {index <= (hover > 0 ? hover : rating) ? (
                <IoStarSharp color='#f8db45'/>
              ) : (
                <IoIosStarOutline color='gray' />
              )}
            </div>
          )
        })}
      </div>
    </div>
    </section>
  )
}

export default StarRating

/*
StarRating Component

This component is designed to display a star rating system.

Features:
a. Allows users to visually see a star-based rating.
b. Utilizes React properties (props) to manage dynamic data and behavior.
c. Implements interactive functionality for user engagement.
d. Can be customized and reused across different parts of the application.
 
Props:
- `rating` (number): The current rating value to display. 
- `onRate` (function): Callback function triggered when a user selects a rating.
- `maxStars` (number, optional): The maximum number of stars to display (default is 5).
 
Usage:
Import and use the `StarRating` component wherever a star rating system is needed.

a. Created a `StarRating` component to display a star rating system.

*/
