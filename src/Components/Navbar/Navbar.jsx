import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.svg'
import underLine from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='Navbar' id='home'>
      <img src={Logo} lt="" /> 
      <ul className='Listt'>
        <li><AnchorLink className='AnchorTab' offset={50} href='#home' ><p onClick={() => setMenu("home")}> Home </p></AnchorLink>{menu === "home" ? <img src={underLine} alt='' /> : <></>}</li>
        <li><AnchorLink className='AnchorTab' offset={50} href='#about'><p onClick={() => setMenu("About_me")}> About Me </p></AnchorLink>{menu === "About_me" ? <img src={underLine} alt='' /> : <></>}</li>
        <li><AnchorLink className='AnchorTab' offset={50} href='#project'><p onClick={() => setMenu("My_project")}> Projects </p></AnchorLink>{menu === "My_project" ? <img src={underLine} alt='' /> : <></>}</li>
        <li><AnchorLink className='AnchorTab' offset={50} href='#education'><p onClick={() => setMenu("Education")}>  Education</p></AnchorLink>{menu === "Education" ? <img src={underLine} alt='' /> : <></>}</li>
        <li><AnchorLink className='AnchorTab' offset={50} href='#contact'><p onClick={() => setMenu("Contact")}> Connact </p></AnchorLink>{menu === "Contact" ? <img src={underLine} alt='' /> : <></>}</li>
      </ul>
      <div className='Connect'>
  <AnchorLink className='AnchorTab' offset={50} href='#contact'>
    <p onClick={() => setMenu("Contact")}>Connect With Me</p>
  </AnchorLink>
</div>

    </div>
  )
}

export default Navbar
