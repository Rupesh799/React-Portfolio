import React from 'react'
import "./Experience.css"
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa6';
import {  RiFlutterFill, RiGithubFill, RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiDjango, SiMysql, SiTypescript } from 'react-icons/si';
// import { MdHtml } from "react-icons/md";
const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>Experience</h2>
      {/*main container*/}
      <div className="container experience_container">
        {/* <div className="exp_frontend"> */}
          {/* <h3>Frontend </h3> */}
          <div className="exp_content">
              
              <div className='exp_info'>
              <FaHtml5 color='brown'/>

              </div>

              <div className='exp_info'>
              <FaCss3 color='lightblue'/>

              </div>

              <div className='exp_info'>
              <FaJs color='yellow'/>

              </div>

              <div className='exp_info'>
              <FaReact color='skyblue'/>

              </div>

              <div className='exp_info'>
              <RiNextjsFill color=''/>

              </div>

              <div className='exp_info'>
              <RiTailwindCssFill color=''/>

              </div>

              <div className='exp_info'>
              <RiFlutterFill color=''/>

              </div>
         
        
          <div className='exp_info'>
              <SiMysql color='orange'/>

              </div>

              <div className='exp_info'>
              <RiGithubFill color='black'/>

              </div>

            <div className='exp_info'>
              <SiTypescript color='lightblue'/>

              </div>
              <div className='exp_info'>
              <SiDjango color='green'/>

              </div>

           
             {/*end exp_content */}
        </div>
         
      </div>
      {/*end experience_container */}
    </section>
  )
}

export default Experience