import React from 'react'
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Header from "./Components/Header/Header"
import Nav from './Components/Nav/Nav';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from "./Components/Services/Services"
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from "./Components/Contact/Contact"
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;