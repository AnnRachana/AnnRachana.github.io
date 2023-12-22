import React from 'react'
import About from './components/About/About'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/Options/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import Service from './components/Services/Service'
import'./App.css'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
// import AboutUs from './components/About/AboutUs'
// import Blog from './components/Blog/Blog'


function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      {/* <AboutUs/> */}
      <About />
      <Service />
      <Skills />

      <Resume />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App