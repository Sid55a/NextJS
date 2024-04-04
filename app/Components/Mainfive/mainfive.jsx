import React from 'react'
import "./mainfive.css"
export const Mainfive = () => {
  return (
    <div className='fivebox'>
     <h1 className='five-heading'>
      Your <span className='Hobby'>Hobby</span>, Your <span className='Community'>Community...</span>
     </h1>
     <div className='buttonfive'>
     <button class="five-button" type="submit">Get Started</button>
     </div>
     <img src='./peopleforfive.png'
     alt='image'
     className='peopleforfive'></img>
    </div>
  )
}

