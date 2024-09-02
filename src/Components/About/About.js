import React from 'react'
import "./About.css"
import { FaAward } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import profile from "../../Assets/rupesh.JPG";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_img">
            <img src={profile} alt="about_image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_card">
            <article className="about_info">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>

          

            <article className="about_info">
              <AiOutlineFundProjectionScreen className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Projects Done</small>
            </article>
          </div>
          <p>
            Hi, My name is Rupesh Khatri. Introducing myself as a frontend developer.
          </p>

          <a href="#contact" className="btn btn_primary">
            Let's chat
          </a>
        </div>
      </div>
    </section>
  )
}

export default About