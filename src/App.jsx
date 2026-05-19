import React from 'react';
import './App.css';
 import Home from "./components/Home"
 import {Element,Link} from 'react-scroll';
 import { useState,useEffect } from 'react';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [isDarkMode,setisDarkMode]=useState(false);
  useEffect(()=>{
    document.body.style.backgroundColor=isDarkMode? "rgba(8, 7, 19, 1)" : "rgb(234, 233, 233)";
    document.body.classList.toggle("dark-mode",isDarkMode);
  },[isDarkMode]);
  const toggleTheme=()=>{
    setisDarkMode((prevMode)=>!prevMode)
    document.documentElement.classlist.toggle('dark');
  };
   const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
  <>
  <Element name='Home'>
  <Home isDarkmode={isDarkMode} Toggletheme={toggleTheme} menuOpen={menuOpen} toggleMenu={toggleMenu}></Home>
  </Element>
  <Element name='About'>
  <About isDarkmode={isDarkMode} Toggletheme={toggleTheme} ></About>
  </Element>
    <Element name='Education'>
  <Education isDarkmode={isDarkMode} Toggletheme={toggleTheme} ></Education>
  </Element>
   <Element name='Skills'>
  <Skills isDarkmode={isDarkMode} Toggletheme={toggleTheme} ></Skills>
  </Element>
   <Element name='Projects'>
  <Projects isDarkmode={isDarkMode} Toggletheme={toggleTheme} ></Projects>
  </Element>
     <Element name='Contact'>
  <Contact isDarkmode={isDarkMode} Toggletheme={toggleTheme} ></Contact>
  </Element>
  </>
  )
}

export default App;



