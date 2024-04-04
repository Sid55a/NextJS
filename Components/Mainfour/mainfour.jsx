import React from 'react'
import "./mainfour.css"
export const Mainfour = () => {
  return (
    <div className='fourbox'>
      <div  className='inner-four-box'>
        <h1 className='heading-boxfour'>
           <span className='comma'>"</span> 
           <span>Testimonials</span>
        </h1>
        <p className="para-fourbox">
        In a fast growing and ever changing city 
        like Bangalore, it sometimes becomes very 
        difficult to find or connect with like minded
         people. Websites like hobbycue.com is a great
          service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof,
         is an excellent idea and I highly recommend it.
        </p>
     <div className='images flex'>
        <img 
        alt='song'
        className='song'
        src='./song.png'></img>
        <img 
        alt='dance'
        className='dance'
        src='./dancer.png'></img>
    </div>
      </div>
    </div>
  )
}

