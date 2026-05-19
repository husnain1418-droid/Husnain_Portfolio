import React from 'react';
import { useState,useEffect,useRef} from 'react';
import {Menu,Sun,X,Moon} from "lucide-react";
import {Link} from 'react-scroll';
import Typed from 'typed.js';
import {motion} from 'framer-motion';


const Home=({isDarkmode,Toggletheme,menuOpen,toggleMenu}) => {
  const TypedText=()=> {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Frontend Developer', 'React Developer', 'n8n Automation Engineer'],
      typeSpeed: 70,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return <span ref={typedRef}></span>;
  }


  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 100); // Delay so transition applies after mount
    return () => clearTimeout(timeout);
  }, []);




  return (
<>
    
    <nav className={`w-full shadow-md px-6 py-4 flex fixed z-1000 top-0 justify-between items-center transition-all duration-1000 ease-out transform ${
          show? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`} style={{backgroundColor: isDarkmode? "black" : "white",color: isDarkmode? "white" :"black"}}>
      {/* Logo */}
      <div className="text-2xl font-bold sm:ml-10 " style={{color: isDarkmode? "white" : "black"}}>
        MyPortfolio
      </div>
      <div className='flex flex-row-reverse gap-7  sm:mr-10'>
      {/* Hamburger for mobile */}
      <div className="sm:hidden" >
        {menuOpen ? (
          <X className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
        ) : (
          <Menu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
        )}
      </div>
      <div onClick={Toggletheme}>
      {isDarkmode? (
      <Sun className='w-6 h-6 text-white'></Sun>
      ):(
          <Moon className='w-6 h-6 text-black'></Moon>
      )}
     </div>
      

      {/* Nav List for desktop */}
      <ul className="hidden sm:flex gap-6 font-medium nav-item">
        <li className=" cursor-pointer nav-item" style={{'--underline-color': isDarkmode? "white" : "black"}}>
             <Link activeClass='active' to='Home' spy={true} smooth={true} offset={-70} duration={500} >Home</Link></li>
        <li className=" cursor-pointer nav-item" style={{'--underline-color': isDarkmode? "white" : "black"}}> 
          <Link activeClass='active' to='About' spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
        <li className="cursor-pointer  nav-item" style={{'--underline-color': isDarkmode? "white" : "black"}}>
         <Link activeClass='active' to='Education' spy={true} smooth={true} offset={-70} duration={500} >Education</Link></li>
        <li className=" cursor-pointer nav-item" style={{'--underline-color': isDarkmode? "white" : "black"}}>
           <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></li>
        <li className=" cursor-pointer nav-item" style={{'--underline-color': isDarkmode? "white" : "black"}}>
           <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></li>
        <li className="cursor-pointer nav-item" style={{'--underline-color': isDarkmode? "white" : "black"}}>
           <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
      </ul>
      </div>
      {/* Mobile Menu (vertical list) */}
      {menuOpen && (
        <ul className="absolute top-16 right-0 h-80 mt-1 w-47 shadow-md flex flex-col items-center gap-4 py-4 sm:hidden z-50 " style={{background: isDarkmode? "black" : "white", color: isDarkmode? "white" : "black"}}>
          <li className=" cursor-pointer  "><Link activeClass='active' to='Home' spy={true} smooth={true} offset={-70} duration={500} >Home</Link></li>
          <li className=" cursor-pointer  "><Link activeClass='active' to='About' spy={true} smooth={true} offset={-70} duration={500} >About</Link></li>
          <li className=" cursor-pointer  "><Link activeClass='active' to='Education' spy={true} smooth={true} offset={-70} duration={500} >Education</Link></li>
          <li className=" cursor-pointer "><Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-70} duration={500} >Skills</Link></li>
          <li className=" cursor-pointer  "><Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-70} duration={500} >Projects</Link></li>
          <li className=" cursor-pointer "><Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-70} duration={500} >Contact</Link></li>
        </ul>
      )}
    </nav>
    {/* main image coding from here */}
        <section className='sm:mt-10 md:mt-15 mt-17 w-full h-fit sm:h-screen md:h-screen lg:h-screen flex flex-col-reverse items-center justify-end md:flex-row md:gap-10 md:justify-around' >
        {/* <div className='border-2 w-full md:w-1/2 md:ml-10 '>
          Info
        </div> */}
         <div className={` md:mb-20 md:ml-20 w-full md:w-1/2 text-left  md:text-left transition-all duration-1000 ease-out transform ${
          show? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
         <h1 className="text-3xl ml-3 sm:ml-0 md:ml-0 md:text-5xl font-bold mb-2 font-sans " style={{color: isDarkmode? "white" : "black"}}>Hi, I'm Husnain</h1>
       <p className="text-lg ml-3 sm:ml-0 md:ml-0 md:text-2xl mb-3 font-sans" style={{color: isDarkmode? "white" : "black"}}><TypedText/></p>
       <p className="text-base ml-3 sm:ml-0 md:ml-0 mb-6 mr-5 mt-4" style={{color: isDarkmode? "white" : "grey"}}>
        I design intelligent automations that think for your business, and interfaces that feel built just for you.
       </p>
       {/* social-media block from here */}
        <div className="ml-3 sm:ml-0 md:ml-0 flex flex-row items-center gap-3 md:gap-5 sm:gap-5 mt-3 md:mt-4 sm:mt-4">
      <div className="text-base  md:text-xl " style={{color: isDarkmode? "White" : "black"}}>
        Follow Me on:
      </div>
      <div className="flex flex-row gap-2 md:gap-3 sm:gap-3">
        {/* linkedin logo */}
       <a href="https://www.linkedin.com/in/husnain-ahmed-880baa302/" target='blank'><div className='sm:w-10 sm:h-10 md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full' style={{backgroundColor: isDarkmode? "rgba(53, 53, 60, 1)" : "rgba(215, 214, 214, 1)"}}><img src="/linkedin.png" alt="linkedin" className='w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5' style={{filter: isDarkmode? 'invert(1)' : 'invert(0)'}}/></div></a>
       {/* upwork logo */}
       <a href="https://www.upwork.com/freelancers/~0147842910af9b870a" target='blank'><div  className='sm:w-10 sm:h-10 md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full' style={{backgroundColor: isDarkmode? "rgba(53, 53, 60, 1)" : "rgba(215, 214, 214, 1)"}}><img src="/upwork.png" alt="upwork" className='w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5' style={{filter: isDarkmode? 'invert(1)' : 'invert(0)'}} /></div></a>
       {/* facebook logo */}
       <a href="https://www.facebook.com/husnain.mehar.325906" target='blank'><div className='sm:w-10 sm:h-10 md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full' style={{backgroundColor: isDarkmode? "rgba(53, 53, 60, 1)" : "rgba(215, 214, 214, 1)"}}><img src="/facebook.png" alt="Facebook" className='w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5' style={{filter: isDarkmode? 'invert(1)' : 'invert(0)'}} /></div></a>
       {/* instagram logo */}
       <a href="https://www.instagram.com/husnainmehar1418/" target='blank'><div className='sm:w-10 sm:h-10 md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full' style={{backgroundColor: isDarkmode? "rgba(53, 53, 60, 1)" : "rgba(215, 214, 214, 1)"}}><img src="/instagram.png" alt="Instagram" className='w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5' style={{filter: isDarkmode? 'invert(1)' : 'invert(0)'}} /></div></a>
      </div>
    </div>
       <div className="flex flex-col justify-center md:justify-start sm:justify-start mt-10 md:flex-row items-center md:items-start gap-4">
         <a 
            href="/Husnain's Resume.pdf" 
            target='blank'
            className="bg-black shadow-lg text-white transition px-4 py-2 rounded cursor-pointer gap-1 flex justify-center items-center"
            style={{backgroundColor: isDarkmode? "none" : "black" , color: isDarkmode? "White" : "White" , border: isDarkmode? "2px solid white" : "2px solid black"}}
          >
            <img src='/DownloadLogo.png' className='w-2 h-2' style={{filter: isDarkmode? "invert(1)" : "invert(1)" }} />Download CV
          </a>
          <Link
          to='Contact' smooth="true" duration={600} offset={-50}>
          <a 
            className="shadow-lg px-6 py-2 rounded flex justify-center items-center gap-1 transition" style={{backgroundColor: isDarkmode? "white" : "rgb(234, 233, 233)",border: isDarkmode? "2px solid white" : "2px solid black", color: isDarkmode? "black" : "black" , }}
          >
           <img src="/mailImg.png" className='w-3 h-3' /> Contact Me
          </a>
          </Link>
        </div>
      </div>
        {/* Main pic container */}
        <div className={`w-full h-60  md:w-1/2 flex justify-evenly mt-3 md:mr-18 md:h-120 transition-all duration-1000 ease-out transform ${
          show? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
        <div className=' flex flex-col justify-center gap-8 items-center'>
        {/* html pic */}
        <div className='shadow-lg flex justify-center items-center w-10 h-10 md:w-15 md:h-15 animate-bounce rounded-full relative left-12 bottom-2 sm:bottom-10 md:bottom-20 sm:left-15 md:left-20' style={{backgroundColor: isDarkmode? "black" : "white"}}><img src={isDarkmode? "/tailwindcss.png" : "/tailwindcss.png"} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} alt="html" className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' /></div>
        {/* react pic */}
          <div className='shadow-lg flex justify-center items-center w-10 h-10 md:w-15 md:h-15 animate-bounce rounded-full relative left-3 bottom-7 sm:bottom-20 md:bottom-22' style={{backgroundColor: isDarkmode? "black" : "white"}}><img src={isDarkmode? "/reactLogo.png" : "/reactLogo.png"} style={{filter: isDarkmode? "invert(0)" : "invert(1)"}} alt="html" className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' /></div>
          {/* c++ pic */}
           <div className='shadow-lg flex justify-center items-center w-10 h-10 md:w-15 md:h-15 animate-bounce rounded-full relative left-10 sm:top-10 sm:left-8 md:top-10' style={{backgroundColor: isDarkmode? "black" : "white"}}><img src={isDarkmode? "/C++White.png" : "/C++White.png"} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} alt="html" className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ' /></div>
           </div>
          {/* main pic */}
          <div className='flex justify-center items-center'><img src="/MyPic@.png" alt="Profile" className='w-45 h-45 object-cover rounded-full sm:w-90 sm:h-90 md:w-100 md:h-100 '  /></div>
           <div className='justify-center items-center flex gap-18 flex-col'>
           {/* n8n pic */}
             <div className='shadow-lg flex justify-center items-center w-10 h-10 md:w-15 md:h-15 animate-bounce rounded-full relative right-8 sm:bottom-10 md:bottom-15' style={{backgroundColor: isDarkmode? "black" : "white"}}><img src={isDarkmode? "/n8n.png" : "/n8n.png"} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} alt="html" className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' /></div>
             {/* js pic */}
              <div className='shadow-lg flex justify-center items-center w-10 h-10 md:w-15 md:h-15 animate-bounce rounded-full relative right-8 sm:top-10 sm:right-6 md:top-10' style={{backgroundColor: isDarkmode? "black" : "white"}}><img src={isDarkmode? "/js-logo.png" : "/js-logo.png"} style={{filter: isDarkmode? "invert(0)" : "invert(1)"}} alt="html" className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' /></div>
              </div>
        </div>
        </section>
 
     

</>
  )
}

export default Home;
