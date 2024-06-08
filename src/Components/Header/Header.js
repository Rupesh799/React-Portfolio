import React from 'react'
import Headbtn from './Headbtn'
import "./Header.css"
import HeaderIcon from './HeaderIcon'
import profile1 from "../../Assets/user3.png"
const Header = () => {
  return (
    
      <header>
        <div className='container header_container'>

          <h5>Hello I am</h5>
          <h1>Rupesh</h1>
          <h5 className='text-light'>A Frontend Developer</h5>
          <Headbtn/>
          <HeaderIcon/>

          <div className="picture">
          <img src={profile1} alt="profilepicture" />
        </div>
        <a href="#about"className='Scroll'>Scroll Down</a>
      </div>
        
      </header>
    
  )
}

export default Header