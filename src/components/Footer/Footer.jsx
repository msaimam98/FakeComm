import React from 'react'
import './footer.css'
import FacebookIcon from '../../assets/imgs/facebook_2168281.png'
import InstaIcon from '../../assets/imgs/instagram_1384089.png'
import LinkedInIcon from '../../assets/imgs/linkedin_3128219.png'
import Image from 'react-bootstrap/esm/Image'
const Footer = () => {
  return (
    <div className='footer mt-5'>
        <a href="https://www.facebook.com">
        <Image 
        className='image-icon'
        src={FacebookIcon} />
        </a>
        <a href="https://www.instagram.com">
        <Image 
        className='image-icon'
        src={InstaIcon} />
        </a>
        <a href="https://www.linkedin.com">
        <Image 
        className='image-icon'
        src={LinkedInIcon} />
        </a>
    </div>
  )
}

export default Footer
