import React from 'react';
import { useEffect,useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 

const Education = ({isDarkmode}) => {
  const [activeEdu,setactiveEdu]=useState("education");
     useEffect(() => {
      AOS.init({
        duration: 1100, // animation duration in ms
        easing: "ease-out", // easing function
        once: false, // animation only happens once
        // mirror:true,
        offset:120,
      });
      AOS.refresh();
    }, []);
  return (
  <>
  <section className=' h-fit sm:h-full md:h-full mt-20 sm:mt-0 md:mt-0'>
    <div className='sm:mt-5 md:mt-5 mt-2 flex justify-center items-center gap-2 text-2xl sm:text-4xl font-semibold' style={{color: isDarkmode? "white" : "black" }} data-aos="fade-up">
      Educational 
      <div className='' style={{color: isDarkmode? "grey" : "royalBlue" }}>
        Background
      </div>
    </div>
    <p data-aos="fade-up" className='hidden sm:flex md:flex justify-center items-center' style={{color: isDarkmode? "white" : "grey" }} >My academic journey and continuous learning path in computer science and web </p>
    <p data-aos="fade-up" className='hidden sm:flex md:flex justify-center items-center'style={{color: isDarkmode? "white" : "grey" }}>development</p>
    <div data-aos="fade-up" className='flex justify-center items-center mt-15'>
    <span className='shadow-lg rounded-3xl pt-2 pb-2' style={{backgroundColor: isDarkmode?  "Silver" : "white"}}>
      <span className='p-3 rounded-3xl text-sm sm:text-lg md:text-lg lg:text-lg cursor-pointer  ' onClick={()=> setactiveEdu("education")} style={{backgroundColor: activeEdu==="education"? "royalBlue" : " ",color: activeEdu==="education"? "white" : "black"}}>
        Formal Education
      </span>
      <span className='p-3 text-sm sm:text-lg md:text-lg lg:text-lg rounded-3xl cursor-pointer' onClick={()=> setactiveEdu("certifications")} style={{backgroundColor: activeEdu==="certifications"? "royalBlue" : "",color: activeEdu==="certifications"? "white" : "black"}} >
        Certification
      </span>
    </span>
    </div>
    <>
    {/* left side formal education part */}
    { activeEdu==="education" &&(
      <div data-aos="fade-right" className=' mt-10 hidden sm:flex md:flex lg:flex justify-around items-center' style={{color: isDarkmode? "white" : "black"}}>
        <div className='shadow-lg px-9 rounded-3xl py-15 border-transparent bg-[rgb(234, 233, 233)] hover:border-blue-600 border-2'  >
        <div className='flex gap-2'>
          <div className='w-10 h-10 flex justify-center items-center rounded-full' style={{backgroundColor: "royalBlue"}}>
          <img src="/education.png" width={20} height={20} style={{filter: isDarkmode? "invert(1)" : "invert(1)"}}/> 
          </div>
          <div className='text-xl flex justify-center items-center font-semibold '>Bachelor of Computer Science</div>
        </div>
          <div className='flex items-center justify-start ml-12 text-md'>University of the Punjab</div>
         <div className='ml-12 mt-2 flex gap-3' style={{color: "grey"}}>
          <div className='text-sm flex gap-1 items-center justify-center'>
          <img src="/calender.png" width={10} height={10}  style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}/> 2024 - 2028
          </div>
          <div className='text-sm flex items-center justify-center gap-1' >
          <img src="/location.png" width={12} height={12}  style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}/>Punjab, Pakistan
          </div>
         </div>
         <div className='flex mt-4 ml-15 items-center gap-4'>
          <div className='text-sm px-2 py-1 rounded-full shadow-lg' style={{backgroundColor: "skyBlue", color: "blue"}}>
          GPA: 3.68/4.00
          </div>
          <div className='shadow-lg text-sm px-2 py-1 rounded-full' style={{backgroundColor: "lightGreen", color: "Green"}}>
          Undergraduated
          </div>
         </div>
         <div className='flex text-sm mt-6 ' style={{color: "grey"}}>
          Focusing on Web development, data structures, algorithms, and modern <br /> programming paradigms. Completed capstone on front-end web <br />application development.
         </div>
         <div className='mt-5 font-semibold text-md'>
          Key Courses:
          <div className='flex font-normal text-sm gap-3 mt-3'>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver",color: "black"}}>
              Data Structures 
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             Algorithms
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
              n8n Automations
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             Web Development
            </div>
          </div>
         </div>
         <div className='flex items-centter gap-3 mt-3 text-sm'>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             Office Management
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             Shopify Designing
            </div>
         </div>
        </div>
        {/* right side Formal education part */}
      <div className='shadow-lg px-18 py-15 rounded-3xl border-transparent bg-[rgb(234, 233, 233)] hover:border-green-500 border-2'  >
        <div className='flex gap-2'>
          <div className='w-10 h-10 flex justify-center items-center rounded-full' style={{backgroundColor: "green"}}>
          <img src="/brackets.png" width={20} height={20} style={{filter: isDarkmode? "invert(1)" : "invert(1)"}}/> 
          </div>
          <div className='text-xl flex justify-center items-center font-semibold '>Full Stack Web Development</div>
        </div>
          <div className='flex items-center justify-start ml-12 text-md'>Online Courses</div>
         <div className='ml-12 mt-2 flex gap-3' style={{color: "grey"}}>
          <div className='text-sm flex gap-1 items-center justify-center'>
          <img src="/calender.png" width={10} height={10}  style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}/> 2025
          </div>
         </div>
         <div className='flex mt-4 ml-15 items-center gap-4'>
          <div className='text-sm px-2 py-1 rounded-full shadow-lg' style={{backgroundColor: "SkyBlue", color: "blue"}}>
          GPA: Outstanding
          </div>
          <div className='shadow-lg text-sm px-2 py-1 rounded-full' style={{backgroundColor: "lightGreen", color: "Green"}}>
          Certified
          </div>
         </div>
         <div className='flex text-sm mt-6 ' style={{color: "grey"}}>
          Intensive 16-week bootcamp covering modern Web Development <br /> technologies including React, Node.js, Tailwindcss. Working on <br />real world projects. 
         </div>
         <div className='mt-5 font-semibold text-md'>
          Key Courses:
          <div className='flex font-normal text-sm gap-3 mt-3'>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver",color: "black"}}>
              React Js
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             Tailwind CSS
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
            Javascript
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
            HTML
            </div>
          </div>
         </div>
         <div className='flex items-centter gap-3 mt-3 text-sm'>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
            CSS
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             C++
            </div>
         </div>
        </div>

      </div>
    )
    }

</>
  {/* code for mobile screen */}
    { activeEdu==="education" &&(
      <div className=' mt-5 sm:hidden md:hidden lg:hidden flex flex-col items-center' style={{color: isDarkmode? "white" : "black"}}>
        <div data-aos="fade-right" className='shadow-lg px-8 rounded-3xl py-12 bg-[rgb(234, 233, 233)] '  >
        <div className='flex gap-2'>
          <div className='w-10 h-10 flex justify-center items-center rounded-full' style={{backgroundColor: "royalBlue"}}>
          <img src="/education.png" width={20} height={20} style={{filter: isDarkmode? "invert(1)" : "invert(1)"}}/> 
          </div>
          <div className='text-xl flex justify-center items-center font-semibold '>Bachelor of Computer Science</div>
        </div>
          <div className='flex items-center justify-start ml-12 text-md'>University of the Punjab</div>
         <div className='ml-12 mt-2 flex gap-3' style={{color: "grey"}}>
          <div className='text-sm flex gap-1 items-center justify-center'>
          <img src="/calender.png" width={10} height={10}  style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}/> 2024 - 2028
          </div>
          <div className='text-sm flex items-center justify-center gap-1' >
          <img src="/location.png" width={12} height={12}  style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}/>Punjab, Pakistan
          </div>
         </div>
         <div className='flex mt-4 ml-5 items-center gap-4'>
          <div className='text-sm px-2 py-1 rounded-full shadow-lg' style={{backgroundColor: "skyBlue", color: "blue"}}>
          GPA: 3.68/4.00
          </div>
          <div className='shadow-lg text-sm px-2 py-1 rounded-full' style={{backgroundColor: "lightGreen", color: "Green"}}>
          Undergraduated
          </div>
         </div>
         <div className='flex text-sm mt-6' style={{color: "grey"}}>
          Focusing on Web development, data structures, algorithms, and modern <br /> programming paradigms. 
         </div>
         <div className='mt-5 font-semibold text-md'>
          Key Courses:
          <div className='flex font-normal text-sm gap-3 mt-3 flex-wrap'>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver",color: "black"}}>
              Data Structures 
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             Algorithms
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
              n8n Automations
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             Web Development
            </div>
          </div>
         </div>
         <div className='flex items-centter gap-3 mt-3 text-sm'>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             Office Management
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             Shopify Designing
            </div>
         </div>
        </div>
        {/* down side Formal education part */}
      <div data-aos="fade-right" className='shadow-lg px-8 py-15  rounded-3xl  bg-[rgb(234, 233, 233)] '  >
        <div className='flex gap-2'>
          <div className='w-10 h-10 flex justify-center items-center rounded-full' style={{backgroundColor: "green"}}>
          <img src="/brackets.png" width={20} height={20} style={{filter: isDarkmode? "invert(1)" : "invert(1)"}}/> 
          </div>
          <div className='text-xl flex justify-center items-center font-semibold '>Full Stack Web Development</div>
        </div>
          <div className='flex items-center justify-start ml-12 text-md'>Online Courses</div>
         <div className='ml-12 mt-2 flex gap-3' style={{color: "grey"}}>
          <div className='text-sm flex gap-1 items-center justify-center'>
          <img src="/calender.png" width={10} height={10}  style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}/> 2025
          </div>
         </div>
         <div className='flex mt-4 ml-5 items-center gap-4'>
          <div className='text-sm px-2 py-1 rounded-full shadow-lg' style={{backgroundColor: "SkyBlue", color: "blue"}}>
          GPA: Outstanding
          </div>
          <div className='shadow-lg text-sm px-2 py-1 rounded-full' style={{backgroundColor: "lightGreen", color: "Green"}}>
          Certified
          </div>
         </div>
         <div className='flex text-sm mt-6 ' style={{color: "grey"}}>
          Intensive 16-week bootcamp covering modern Web Development <br /> technologies including React, Node.js, Tailwindcss.
         </div>
         <div className='mt-5 font-semibold text-md'>
          Key Courses:
          <div className='flex font-normal text-sm gap-3 mt-3 flex-wrap'>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver",color: "black"}}>
              React Js
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             Tailwind CSS
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
            Javascript
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
            HTML & CSS
            </div>
            <div className='flex justify-center items-center px-2 py-1 rounded-full' style={{backgroundColor: "silver", color: "black"}}>
             C++
            </div>
          </div>
         </div>
        
        </div>

      </div>
    )
    }
<>
{/* certifications code for both mob and laptop */}
    {activeEdu==="certifications" &&(
      <div data-aos="fade-up" className='sm:mt-20 md:mt-20 mt-17' style={{color: isDarkmode? "white" : "black"}}>
        <div className='sm:flex-row md:flex-row flex flex-col justify-evenly items-center gap-4 sm:gap-0 md:gap-0 '>
        <div className='flex flex-col justify-center items-center gap-1 px-22 py-8 sm:px-25 sm:py-15 md:px-25 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid LightGrey": ""}}>
          <div className='w-12 h-12 rounded-full flex justify-center items-center' style={{backgroundColor: "royalBlue"}}>
            <img src="/reactLogo.png"width={18} height={18} />
          </div>
          <div className='font-semibold mt-1'>React Js</div>
          <div className='text-sm' style={{color: "grey"}}>Youtube</div>
          <div className='py-1 px-2 rounded-full text-sm flex justify-center items-center mt-2' style={{color: "green",backgroundColor:"lightgreen"}}>2025</div>
        </div>
         <div className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-17 sm:py-15 md:px-17 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full flex justify-center items-center' style={{backgroundColor: "royalBlue"}}>
            <img src="/n8n.png"width={18} height={18} style={{filter: "invert(1)"}} />
          </div>
          <div className='font-semibold mt-1'>n8n Automations</div>
          <div className='text-sm' style={{color:"grey"}}>Gulf Digital</div>
          <div className='py-1 px-2 rounded-full text-sm mt-2' style={{color: "green",backgroundColor:"lightgreen"}}>2025</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-1 px-20 py-8 sm:px-24 sm:py-15 md:px-24 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full flex justify-center items-center' style={{backgroundColor: "royalBlue"}}>
            <img src="/js-logo.png"width={18} height={18} />
          </div>
          <div className='font-semibold mt-1'>JavaScript</div>
          <div className='text-sm' style={{color: "grey"}}>Youtube</div>
          <div className='py-1 px-2 rounded-full text-sm flex justify-center items-center mt-2' style={{color: "green",backgroundColor:"lightgreen"}}>2025</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-1 px-21 py-8 sm:px-24.5 sm:py-15 md:px-24.5 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full flex justify-center items-center' style={{backgroundColor: "royalBlue"}}>
            <img src="/mongodb.png"width={18} height={18} />
          </div>
          <div className='font-semibold mt-1'>DJango</div>
          <div className='text-sm' style={{color: "grey"}}>Youtube</div>
          <div className='py-1 px-2 rounded-full text-sm flex justify-center items-center mt-2' style={{color: "green",backgroundColor:"lightgreen"}}>2025</div>
        </div>
        </div>
      </div>


    )}

</>
  </section>
  
  
  
  </>
  )
}

export default Education;
