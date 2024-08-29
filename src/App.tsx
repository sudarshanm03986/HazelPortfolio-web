// import { useState } from 'react'
import { useEffect, useState } from 'react';

import './App.css'

import Nav from './compoent/nav.tsx';
import Home from './views/Home.tsx';
import Project from './views/Project.tsx';
import Contact from './views/Contact.tsx';



function App() {
  const [activeSection, setActiveSection] = useState<string>('Home');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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

    useEffect(() => {
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <>
      <div className={`fixed right-5 top-[${windowHeight/2}px]`}><Nav  activeSection={activeSection} /></div>
      <Home/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
