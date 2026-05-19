import { color } from 'framer-motion';
import React, { useState } from 'react';


function Contact({isDarkmode}) {
    const [activeCon,setactiveCon]=useState("contact");
  return (
   <>
   <section className='h-screen mt-22'>
    <div className='sm:mt-5 md:mt-5 mt-2 flex justify-center items-center gap-2 text-2xl sm:text-4xl font-semibold' data-aos="fade-up" style={{color: isDarkmode? "white" : "black" }} >
    Get In
      <div className='' style={{color: isDarkmode? "grey" : "royalBlue" }}>
       Touch
      </div>
    </div>
     <p data-aos="fade-up" className='hidden sm:flex md:flex justify-center items-center' style={{color: isDarkmode? "white" : "grey" }} >Reach out to collaborate, discuss opportunities, or just say hello! </p>
      <p data-aos="fade-up" className='mt-2 sm:hidden md:hidden flex justify-center items-center text-sm px-4' style={{color: isDarkmode? "white" : "grey" }} >Reach out to collaborate, discuss opportunities, </p>
       <p data-aos="fade-up" className='flex sm:hidden md:hidden text-sm justify-center items-center'style={{color: isDarkmode? "white" : "grey" }}>or just say hello!</p>
   <div data-aos="fade-up" className='flex justify-center items-center mt-10'>
    <span className='shadow-lg rounded-3xl pt-2 pb-2' style={{backgroundColor: isDarkmode?  "Silver" : "white"}}>
      <span className='py-3 px-4 rounded-3xl text-sm sm:text-lg md:text-lg lg:text-lg cursor-pointer  ' onClick={()=> setactiveCon("contact")} style={{backgroundColor: activeCon==="contact"? "royalBlue" : " ",color: activeCon==="contact"? "white" : "black"}}>
      Contact Me
      </span>
      <span className='py-3 px-4 text-sm sm:text-lg md:text-lg lg:text-lg rounded-3xl cursor-pointer' onClick={()=> setactiveCon("methods")} style={{backgroundColor: activeCon==="methods"? "royalBlue" : "",color: activeCon==="methods"? "white" : "black"}} >
       Contact Methods
      </span>
    </span>
    </div>

    {activeCon==="contact" && (
        <>
       <div className=' mt-10 h-fit flex justify-center' >
        <div className=' shadow-lg w-full m-2 sm:m-0 md:m-0 lg:m-0 px-5 py-10 sm:w-1/2 md:w-1/2 lg:w-1/2 bg-[rgb(234, 233, 233)] sm:px-15 md:px-15 sm:py-20 md:py-20 rounded-2xl  cursor-pointer border-transparent hover:border-gray-300 border-2'>
        <div>
            <div className='text-md font-semibold'>
                Name
            </div>
            <input type="text" placeholder='Your Name' className='w-full h-10 px-2 rounded-lg' style={{border: "1px solid silver" , backgroundColor: isDarkmode? "" : "#F5F5F5",color: "grey"}} />
        </div>
           <div className='mt-6'>
            <div className='text-md font-semibold'>
                Email
            </div>
            <input type="email" placeholder='Your Email' className='w-full h-10 px-2  rounded-lg' style={{border: "1px solid silver" , backgroundColor: isDarkmode? "" : "#F5F5F5",color: "grey"}} />
        </div>

        <div className='mt-6'>
            <div className='text-md font-semibold'>
                Message
            </div>
            <textarea type="textArea" placeholder='Your Message' className='w-full h-40 px-2 flex items-start rounded-lg' style={{border: "1px solid silver" , backgroundColor: isDarkmode? "" : "#F5F5F5",color: "grey"}} />
        </div>
        <button className='bg-[blue] gap-2 flex justify-center items-center h-9 mt-6 w-full rounded-full' style={{color: "white"}}> <img src="send.png" width={15} height={15} style={{filter: "invert(1)"}}/> Send Message</button>
        </div>
       </div>
        
        


        </>
    )}

    {activeCon==="methods" && (
        <>
      <div className='flex sm:flex-row md:flex-row lg:flex-row flex-col justify-evenly items-center mt-15 sm:mt-25 md:mt-25 lg:mt-25 gap-6 sm:gap-0 md:gap-0 lg:gap-0' style={{color: isDarkmode? "white" : "black"}}>
        <div className='rounded-2xl pt-10 pb-32 pr-22 pl-5  shadow-lg cursor-pointer border-transparent hover:border-gray-300 border-2' style={{backgroundColor: isDarkmode? "" : "rgb(234,233,233)",border: isDarkmode? "2px solid lightgrey" : ""}}>
            <div className='flex justify-start items-center gap-1 '>
                <div className='flex justify-center items-center w-10 shadow-lg h-10 rounded-full' style={{backgroundColor: "royalBlue" }}>
                <img src="email.png" width={18} height={18} style={{filter: "invert(1)"}}/>
                </div>
                <div className='font-semibold text-md'>Email</div>
            </div>
            <div className='flex items-center gap-2 mt-7'>
                <img src="message.png" width={17} height={17} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
                <div className='flex flex-col items-start'>
                   <p className='text-sm font-semibold ' > Personal Email</p>
                    <p className='text-[12px] ' style={{color: "grey"}}> husnain1418@gmail.com</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-8'>
                <img src="chat.png" width={18} height={18} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
                <div className='flex flex-col items-start'>
                   <p className='text-sm font-semibold' > Work Email</p>
                    <p className='text-[12px] ' style={{color: "grey"}}> husnainyaseen1418@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='rounded-2xl pt-10 pb-10 pr-13 pl-5 shadow-lg cursor-pointer border-transparent hover:border-gray-300 border-2' style={{backgroundColor: isDarkmode? "" : "rgb(234,233,233)",border: isDarkmode? "2px solid lightgrey" : ""}}>
            <div className='flex justify-start items-center gap-1 '>
                <div className='flex justify-center items-center w-10 shadow-lg h-10 rounded-full' style={{backgroundColor: "orange" }}>
                <img src="share.png" width={16} height={16} style={{filter: "invert(1)"}}/>
                </div>
                <div className='font-semibold text-md'>Social Media</div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <img src="linkedin.png" width={20} height={20} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
                <div className='flex flex-col items-start'>
                   <p className='text-sm font-semibold ' > Linkedin</p>
                    <p className='text-[12px] ' style={{color: "grey"}}>https://www.linkedin.com/in/husnain- <br />ahmed-880baa302/</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-5'>
                <img src="facebook.png" width={20} height={20} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
                <div className='flex flex-col items-start'>
                   <p className='text-sm font-semibold' > Facebook</p>
                    <p className='text-[12px] ' style={{color: "grey"}}>https://www.facebook.com/husnain. <br />mehar.325906</p>
                </div>
            </div>
             <div className='flex items-center gap-2 mt-5'>
                <img src="instagram.png" width={20} height={20}  style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}/>
                <div className='flex flex-col items-start'>
                   <p className='text-sm font-semibold' > Instagram</p>
                    <p className='text-[12px] ' style={{color: "grey"}}>https://www.instagram.com/husnain <br />mehar1418/</p>
                </div>
            </div>
        </div>
         <div className='rounded-2xl pt-10 pb-32 pr-42 pl-5 shadow-lg cursor-pointer border-transparent hover:border-gray-300 border-2' style={{backgroundColor: isDarkmode? "" : "rgb(234,233,233)",border: isDarkmode? "2px solid lightgrey" : ""}}>
            <div className='flex justify-start items-center gap-1 '>
                <div className='flex justify-center items-center w-10 shadow-lg h-10 rounded-full' style={{backgroundColor: "orchid" }}>
                <img src="phone-call.png" width={18} height={18} style={{filter: "invert(1)"}}/>
                </div>
                <div className='font-semibold text-md'>Phone</div>
            </div>
            <div className='flex items-center gap-2 mt-7'>
                <img src="telephone.png" width={17} height={17} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}/>
                <div className='flex flex-col items-start'>
                   <p className='text-sm font-semibold ' >Mobile</p>
                    <p className='text-[12px] ' style={{color: "grey"}}>0309-4825173</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-8'>
                <img src="whatsapp.png" width={18} height={18}  style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}/>
                <div className='flex flex-col items-start'>
                   <p className='text-sm font-semibold' > WhatsApp</p>
                    <p className='text-[12px] ' style={{color: "grey"}}>+92-348-1436469</p>
                </div>
            </div>
        </div>
      </div>
        
        
        </>



    )}

   </section>
   </>
  )
}

export default Contact;
