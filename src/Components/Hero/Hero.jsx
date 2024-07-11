import React from 'react'
import './Hero.css'
import ProfileImg from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='Hero' id='education'>
      <img src={ProfileImg} alt="" />
      
      <div className="intro">
      <h1 >I am Akshay, a dedicated and enthusiastic fresher web developer.</h1> 
      <p>I am eager to leverage my skills and passion for coding to contribute to innovative web projects. Committed to continuous learning and professional growth, I am excited to embark on my career in web development.</p>

      </div>


    

  <div className="Hero-action">
    <div className="Connect-action">Connect With Me</div>
  </div>
  <div className="Hero-Resume">My Resume</div>
    </div>
  )
}

export default Hero
