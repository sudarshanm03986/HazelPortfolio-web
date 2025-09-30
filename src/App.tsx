// import { useState } from 'react'
import { useEffect, useState } from 'react';
// import {motion}  from "framer-motion";

import './App.css'

import Nav from './compoent/nav.tsx';
import Home from './views/Home.tsx';
import Project from './views/Project.tsx';
import Contact from './views/Contact.tsx';
import About from './views/About.tsx';



function App() {
  const [activeSection, setActiveSection] = useState<string>('Home');

  const handleScroll = () => {
    const sections = ['Home','About', 'Project', 'Contact'];
    const scrollPos = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const { offsetTop, offsetHeight } = sectionElement;
        if (scrollPos > offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  //  window.addEventListener("mousemove", (e) => {
  //    setMousePosition({ x: e.clientX, y: e.clientY });
  //  });



  return (
    <>
      {/* <motion.div
      
        initial="hidden"
        animate="visible"
        // viewport={{ once: true }}
        transition={{ duration: 0.5, delay:0.25 }}
        variants={{
          visible: {x:0},
          hidden: { x:100 }
        }}

      > */}

      {/* Example: Render 10 divs */}
      {/* {[...Array(15)].map((_, i) => (

          <motion.div
        className="fixed pointer-events-none z-50"
       
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 + i * 2 }} // Increase delay for each subsequent div
      >
        <div className='bg-primary opacity-20' style={{height : (200 -  (i*5)) /10, width :  (200 -  (i*5)) /10,  borderRadius: "50%" }}></div>
      </motion.div>
      
      ))} */}

    
      <div className={`fixed sm:right-5 right-1 top-[20vh]`}><Nav  activeSection={activeSection} /></div>
      {/* </motion.div> */}
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
