// import { useState } from 'react'
import { useEffect, useState } from 'react';
import {motion}  from "framer-motion";

import './App.css'

import Nav from './compoent/nav.tsx';
import Home from './views/Home.tsx';
import Project from './views/Project.tsx';
import Contact from './views/Contact.tsx';



function App() {
  const [activeSection, setActiveSection] = useState<string>('Home');

  const handleScroll = () => {
    const sections = ['Home', 'Project', 'Contact'];
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
      <div className={`fixed right-5 top-[20vh]`}><Nav  activeSection={activeSection} /></div>
      {/* </motion.div> */}
      <Home/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
