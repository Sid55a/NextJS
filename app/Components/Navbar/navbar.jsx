import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import React from 'react'
import {Search,Compass,Bookmark,Shoping,Bell} from "lucide-react"
export const Navbar = () => {
  return (
    <nav class="navbar nav navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <img
        src='./Logo.png'
        alt='logo'
        className='logo'
      />
      <div class=" flex " id="navbarSupportedContent">
      <div className='search-here mr-96'>
          <input class=" form form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <div className='icon'>
           <Search className='search-icon' width={8} height={8}/>
          </div>
     </div>

      <div className='nav-items'>
      {/* Explore */}
        <div className='nav-dropdown'>
        <img src='./compass.svg'
        className='image'></img>
            <select class="select" aria-label="Default select example">
           <option selected>Explore</option>
         <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
         </select>
        </div>
     {/* Hobbies */}
     <div className=' nav-dropdown'>
     <img src='./compass.svg'
     className='image'></img>
            <select class="select" aria-label="Default select example">
           <option selected>Hobbies</option>
         <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
         </select>
        </div>
    {/* nav-item-icon */}
    <img src='./bookmark.svg'
   className='image'></img>
   <img src='./notifications.svg'
   className='image'></img>
      <img src='./cart.svg'
   className='image'></img>
      </div>
      </div>
    </div>
  </nav>
  )
}
