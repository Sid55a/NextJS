import React from 'react'
import "./footer.css"
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='row'>
            <span className='footerheading'>Hobbycue</span>
            <span>About Us</span>
            <span>Our Services</span>
            <span>Work with Us</span>
            <span>FAQ</span>
            <span>Contact Us</span>
        </div>
        <div className='row'>
            <span className='footerheading'>How Do I</span>
            <span>Sign Up</span>
            <span>Add a Listing</span>
            <span>Claim Listing</span>
            <span>Post a Query</span>
            <span>Add a Blog Post</span>
            <span>Other Queries</span>
        </div>
        <div className='row'>
            <span className='footerheading'>Quick Links</span>
            <span>Listings</span>
            <span>Blog Posts</span>
            <span>Shop / Store</span>
            <span>Community</span>
        </div>
      <div className='row-two'>
      <div>
        <h1 className=' social-media'>Social Media</h1>
        <div className=' social-icons'>
            <img
             alt='logo-facebook'
             className='iconSocial'
             src='./logo-facebook.svg'></img>
             <img
             alt='logo-facebook'
             className='iconSocial'
             src='./logo-instagram.svg'></img>
             <img
             alt='logo-facebook'
             className='iconSocial'
             src='./logo-twitter.svg'></img>
             <img
             alt='logo-facebook'
             className='iconSocial'
             src='./mail-outline.svg'></img>
             <img
             alt='logo-facebook'
             className='iconSocial'
             src='./logo-facebook.svg'></img>
             <img
             alt='logo-facebook'
             className='iconSocial'
             src='./mail-outline.svg'></img>
             <img
             alt='logo-facebook'
             className='iconSocial'
             src='./logo-youtube.svg'></img>
        </div>
        <div className=' invite'>
            <input 
            placeholder='Email Id'
            className='footer-input'></input>
            <div className='invitebutton'>
                Invite
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
