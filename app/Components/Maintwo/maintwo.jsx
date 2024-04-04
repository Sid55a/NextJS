import React from 'react'
import "./maintwo.css"
export const Maintwo = () => {
  return (
    <div className=' main-grid'>
       <div className='cart'>
         <h1 className=' cart-heading'>
            <div><img 
            alt='people'
            src='./people.svg'
            className='people'></img></div>
            <div>People</div>
         </h1>
         <p className=' para'>
         Find a teacher, coach, or expert for your 
         hobby interest in your locality.  Find a partner, 
         teammate, accompanist or collaborator.
         </p>
         <div className='button-people'>
         <button type="button" class="btn btn-outline-secondary">Connect</button>
         </div>
       </div>

       <div className='cart'>
         <h1 className=' cart-heading'>
            <div><img 
            alt='people'
            src='./location.svg'
            className='people'></img></div>
            <div>Place</div>
         </h1>
         <p className=' para'>
         Find a class, school, playground, auditorium, 
         studio, shop or an event venue.  Book a slot at 
         venues that allow booking through hobbycue.
         </p>
         <div className='button-people'>
         <button type="button" class="btn btn-outline-secondary">Meet up</button>
         </div>
       </div>

       <div className='cart'>
         <h1 className=' cart-heading'>
            <div><img 
            alt='people'
            src='./bag.svg'
            className='people'></img></div>
            <div>Product</div>
         </h1>
         <p className=' para'>
         Find equipment or supplies
          required for your hobby.
            Buy, rent or borrow from shops, online stores
          or from community members.
         </p>
         <div className='button-people'>
         <button type="button" class="btn btn-outline-secondary">Get it</button>
         </div>
       </div>

       <div className='cart'>
         <h1 className=' cart-heading'>
            <div><img 
            alt='people'
            src='./checkbox.svg'
            className='people'></img></div>
            <div>Program</div>
         </h1>
         <p className=' para'>
         Find events, meetups and workshops related to your hobby.  
         Register or buy tickets online.
         </p>
         <div className='button-people'>
         <button type="button" class="btn btn-outline-secondary">Attend</button>
         </div>
       </div>
    </div>
  )
}
