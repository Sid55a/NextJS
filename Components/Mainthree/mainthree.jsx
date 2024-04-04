import React from 'react'
import "./mainthree.css"

export const Mainthree = () => {
  return (
    <div className='mainthree-box'>
        <div className='inner-box'>
            <h1 className='box-three-heading'>
            <span>
                <img
                className='icon-threebox'
                alt='icon'
                 src='./add-circle.svg'></img>
            </span>
            <span className='text-heading'>Add your own</span>
            </h1>
            <p className=' boxthree-para'>
            Are you a teacher or expert? 
             Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue? 
             Go ahead and Add your Own page
            </p>
            <div className='button-threebox'>
         <button type="button" class="btn btn-outline-secondary">Attend</button>
            </div>
        </div>
    </div>
  )
}


