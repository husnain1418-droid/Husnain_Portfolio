import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 

const About = ({isDarkmode}) => {
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-out", // easing function
      once: false, // animation only happens once
      // mirror:true,
      offset:120,
    });
    AOS.refresh();
  }, []);


  return (
    <>
    {/* laptop screen code */}
    <section className='hidden sm:block md:block h-screen'  style={{color:isDarkmode? "white" : "black"}}>
    <div className='flex justify-center items-center gap-3 mt-8 text-3xl font-semibold  sm:text-5xl md:text-5xl' data-aos="fade-up">
      About 
      <div style={{color: isDarkmode? "grey" : "royalBlue"}}>
        Me
      </div>
    </div>
     <p className='text-center md:text-lg sm:text-lg md:pt-3 sm:pt-3' data-aos="fade-up" style={{color: isDarkmode? "white" : "grey"}}>Discover my journey, passions, and the story behind my work</p>
    <div className='flex justify-around items-center'>
      <div className='hidden sm:flex' data-aos="fade-up">
        <img src="/MyImg.png" width={300} height={300} />
      </div>
      <div className='grid grid-cols-3 mt-3' data-aos="fade-left">
        <div className='h-fit flex-wrap mt-3'>
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-10 h-10 rounded-full' style={{backgroundColor: isDarkmode? "skyBlue" : "skyBlue"}}> <img src="bio.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={20} height={20} /> </div>
          <div className='items-center justify-center flex sm:text-lg md:text-lg'><strong>Bio</strong></div>
        </div>
        <p className='text-sm pt-2' style={{color: isDarkmode? "white" : "grey"}}>Passionate Web Developer with over <br /> 1 year of experience in frontend  <br />development. Dedicated to building <br />user friendly and scalable web <br /> applications.</p>
        </div>
         <div className='flex-wrap mt-3' data-aos="fade-left">
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-10 h-10 rounded-full' style={{backgroundColor: isDarkmode? "lightGreen" : "lightGreen"}}> <img src="hobbies.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={30} height={30} /> </div>
          <div className='items-center justify-center flex text-xl sm:text-lg md:text-lg'><strong>Hobbies</strong></div>
        </div>
        <p className='text-sm pt-2' style={{color: isDarkmode? "white" : "grey"}}>Enjoy Cricket, tennis, reading novels,<br /> and contributing to open- <br /> source projects.</p>
        </div>
        <div className='flex-wrap mt-3' data-aos="fade-left">
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-10 h-10 rounded-full' style={{backgroundColor: isDarkmode? "Orange" : "Orange"}}> <img src="languages.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={20} height={20} /> </div>
          <div className='items-center justify-center flex text-xl sm:text-lg md:text-lg'><strong>Languages</strong></div>
        </div>
        <p className='text-sm pt-2' style={{color: isDarkmode? "white" : "grey"}}>Fluent in English and Urdu. A little <br /> bit Proficiency in Persian.</p>
        </div>
        <div className='flex-wrap mt-5' data-aos="fade-left">
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-10 h-10 rounded-full' style={{backgroundColor: isDarkmode? "orchid" : "orchid"}}> <img src="mailImg.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={17} height={17} /> </div>
          <div className='items-center justify-center flex text-xl sm:text-lg md:text-lg'><strong>Contact</strong></div>
        </div>
        <p className='text-sm pt-2 pr-5' style={{color: isDarkmode? "white" : "grey"}}>Email: husnain1418@gmail.com <br /> Phone: +92 348 1436469 <br />linkedin: <br /> linkedin.com/in/husnain-ahmed-880baa302/</p>
        </div>
         <div className='flex-wrap mt-5' data-aos="fade-left">
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-10 h-10 rounded-full' style={{backgroundColor: isDarkmode? "salmon" : "Salmon"}}> <img src="location.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={17} height={17} /> </div>
          <div className='items-center justify-center flex text-xl sm:text-lg md:text-lg'><strong>Location</strong></div>
        </div>
        <p className='text-sm pt-2' style={{color: isDarkmode? "white" : "grey"}}>Based in Punjab, Pakistan. Available <br /> for remote work worldwide.</p>
        </div>
       <div className='flex-wrap mt-5'data-aos="fade-left">
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-10 h-10 rounded-full' style={{backgroundColor: isDarkmode? "turquoise" : "Turquoise"}}> <img src="education.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={17} height={17} /> </div>
          <div className='items-center justify-center flex text-xl sm:text-lg md:text-lg'><strong>Education Summary</strong></div>
        </div>
        <p className='text-sm pt-2' style={{color: isDarkmode? "white" : "grey"}}>Bachelor of Computer Science, <br />University of Punjab (Continue), <br /> n8n Internship at Gulf <br /> Digital. </p>
        </div>
      </div>
      </div>
         <div className="hidden sm:flex md:flex justify-center items-center mt-2 gap-2" data-aos="fade-up">
      <div className="text-base  md:text-md " style={{color: isDarkmode? "White" : "black"}}>
        Follow Me on:
      </div>
      <div className="flex flex-row gap-2 md:gap-3 sm:gap-3">
        {/* linkedin logo */}
       <a href="https://www.linkedin.com/in/husnain-ahmed-880baa302/" target='blank'><div className='shadow-lg sm:w-10 sm:h-10 md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full' style={{backgroundColor: isDarkmode? "rgba(53, 53, 60, 1)" : "rgba(215, 214, 214, 1)"}}><img src="/linkedin.png" alt="linkedin" className='w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5' style={{filter: isDarkmode? 'invert(1)' : 'invert(0)'}}/></div></a>
       {/* upwork logo */}
       <a href="https://www.upwork.com/freelancers/~0147842910af9b870a" target='blank'><div  className=' shadow-lgsm:w-10 sm:h-10 md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full' style={{backgroundColor: isDarkmode? "rgba(53, 53, 60, 1)" : "rgba(215, 214, 214, 1)"}}><img src="/upwork.png" alt="upwork" className='w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5' style={{filter: isDarkmode? 'invert(1)' : 'invert(0)'}} /></div></a>
       {/* facebook logo */}
       <a href="https://www.facebook.com/husnain.mehar.325906" target='blank'><div className='shadow-lg sm:w-10 sm:h-10 md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full' style={{backgroundColor: isDarkmode? "rgba(53, 53, 60, 1)" : "rgba(215, 214, 214, 1)"}}><img src="/facebook.png" alt="Facebook" className='w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5' style={{filter: isDarkmode? 'invert(1)' : 'invert(0)'}} /></div></a>
       {/* instagram logo */}
       <a href="https://www.instagram.com/husnainmehar1418/" target='blank'><div className='shadow-lg sm:w-10 sm:h-10 md:w-10 md:h-10 w-8 h-8 flex justify-center items-center rounded-full' style={{backgroundColor: isDarkmode? "rgba(53, 53, 60, 1)" : "rgba(215, 214, 214, 1)"}}><img src="/instagram.png" alt="Instagram" className='w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5' style={{filter: isDarkmode? 'invert(1)' : 'invert(0)'}} /></div></a>
        <a 
            href="/Husnain's Resume.pdf" 
            target='blank'
            className="ml-10 bg-black shadow-lg text-white transition px-4 py-2 rounded cursor-pointer gap-2 flex justify-center items-center"
            style={{backgroundColor: isDarkmode? "none" : "black" , color: isDarkmode? "White" : "White" , border: isDarkmode? "2px solid white" : "2px solid black"}}
          >
            <img src='/DownloadLogo.png' className='w-2 h-2' style={{filter: isDarkmode? "invert(1)" : "invert(1)" }} />Download CV
          </a>
      </div>
    </div>
    </section>

    {/* mobile code */}

    <section className='pb-0 block h-fit mt-30 sm:hidden md:hidden lg:hidden' data-aos="fade-up" style={{color:isDarkmode? "white" : "black"}}>
    <div className='flex justify-center items-center gap-3 mt-5 text-3xl font-semibold' >
      About 
      <div style={{color: isDarkmode? "grey" : "royalBlue"}}>
        Me
      </div>
    </div>
     <p className='text-center text-sm' data-aos="fade-up" style={{color: isDarkmode? "white" : "grey"}}>Discover my journey, passions, and the <br />story behind my work</p>
    <div className='flex justify-center mt-2 items-center'>
      <div className='grid grid-cols-2 ml-2 mr-2 'data-aos="fade-up">
        <div className='h-fit flex-wrap mt-4'>
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-8 h-8 rounded-full' style={{backgroundColor: isDarkmode? "skyBlue" : "skyBlue"}}> <img src="bio.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={17} height={17} /> </div>
          <div className='items-center justify-center flex '><strong>Bio</strong></div>
        </div>
        <p className='text-sm pt-2' style={{color: isDarkmode? "white" : "grey"}}>Passionate frontend developer. Dedicated to building <br />user friendly and scalable web <br /> applications.</p>
        </div>
         <div className='flex-wrap mt-4'>
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-8 h-8 rounded-full' style={{backgroundColor: isDarkmode? "lightGreen" : "lightGreen"}}> <img src="hobbies.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={25} height={25} /> </div>
          <div className='items-center justify-center flex'><strong>Hobbies</strong></div>
        </div>
        <p className='text-sm pt-2' style={{color: isDarkmode? "white" : "grey"}}>Enjoy Cricket, tennis, reading novels,<br /> and contributing to open- <br /> source projects.</p>
        </div>
        <div className='flex-wrap mt-5'>
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-8 h-8 rounded-full' style={{backgroundColor: isDarkmode? "Orange" : "Orange"}}> <img src="languages.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={17} height={17} /> </div>
          <div className='items-center justify-center flex'><strong>Languages</strong></div>
        </div>
        <p className='text-sm pt-2' style={{color: isDarkmode? "white" : "grey"}}>Fluent in English and Urdu. A little <br /> bit Proficiency in Persian.</p>
        </div>
        <div className='flex-wrap mt-5'>
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-8 h-8 rounded-full' style={{backgroundColor: isDarkmode? "orchid" : "orchid"}}> <img src="mailImg.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={14} height={14} /> </div>
          <div className='items-center justify-center flex '><strong>Contact</strong></div>
        </div>
        <p className='text-sm pt-2 pr-5' style={{color: isDarkmode? "white" : "grey"}}>Email: husnain1418@gmail.com <br /> Phone: +92 348 1436469 <br />linkedin: <br /> linkedin.com/in/husnain-ahmed-880baa302/</p>
        </div>
         <div className='flex-wrap mt-5'>
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-8 h-8 rounded-full' style={{backgroundColor: isDarkmode? "turquoise" : "Turquoise"}}> <img src="education.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={14} height={14} /> </div>
          <div className='items-center justify-center flex '><strong>Education Summary</strong></div>
        </div>
        <p className='text-sm pt-2' style={{color: isDarkmode? "white" : "grey"}}>Bachelor of Computer Science, University  <br />of Punjab (Continue), <br /> n8n Internship at Gulf <br /> Digital. </p>
        </div>
         <div className='flex-wrap mt-5'>
        <div className='flex gap-1'>
         <div className='shadow-lg items-center flex justify-center w-8 h-8 rounded-full' style={{backgroundColor: isDarkmode? "salmon" : "Salmon"}}> <img src="location.png" style={{filter: isDarkmode? "invert(0)" : "invert(0)"}} width={14} height={14} /> </div>
          <div className='items-center justify-center flex '><strong>Location</strong></div>
        </div>
        <p className='text-sm pt-2' style={{color: isDarkmode? "white" : "grey"}}>Based in Punjab,  <br /> Pakistan. Available <br /> for  remote work worldwide.</p>
        </div>
      </div>
      </div>
    </section>
    </>
  )
};

export default About;
