import React, { useState } from 'react';


function Skills({isDarkmode}) {
    const [activeSkill,setactiveSkill]=useState("technical")

  return (
  <>
  <section className=' h-full mt-22 sm:mt-15 md:mt-15'>
     <div className='sm:mt-5 md:mt-5 mt-2 flex justify-center items-center gap-2 text-2xl sm:text-4xl font-semibold' data-aos="fade-up" style={{color: isDarkmode? "white" : "black" }} >
      Skills & 
      <div className='' style={{color: isDarkmode? "grey" : "royalBlue" }}>
        Expertise
      </div>
    </div>
     <p data-aos="fade-up" className='hidden sm:flex md:flex justify-center items-center' style={{color: isDarkmode? "white" : "grey" }} >Technical competencies and professional skills I've developed through experience </p>
      <p data-aos="fade-up" className='hidden sm:flex md:flex justify-center items-center'style={{color: isDarkmode? "white" : "grey" }}>and continuous learning</p>
      <p data-aos="fade-up" className='mt-2 sm:hidden md:hiddenflex justify-center items-center text-sm px-4' style={{color: isDarkmode? "white" : "grey" }} >Technical competencies and professional skills I've </p>
       <p data-aos="fade-up" className='flex sm:hidden md:hidden text-sm justify-center items-center'style={{color: isDarkmode? "white" : "grey" }}>developed through continuous learning</p>
   <div data-aos="fade-up" className='flex justify-center items-center mt-10'>
    <span className='shadow-lg rounded-3xl pt-2 pb-2' style={{backgroundColor: isDarkmode?  "Silver" : "white"}}>
      <span className='py-3 px-4 rounded-3xl text-sm sm:text-lg md:text-lg lg:text-lg cursor-pointer  ' onClick={()=> setactiveSkill("technical")} style={{backgroundColor: activeSkill==="technical"? "royalBlue" : " ",color: activeSkill==="technical"? "white" : "black"}}>
      Technical Skills
      </span>
      <span className='py-3 px-4 text-sm sm:text-lg md:text-lg lg:text-lg rounded-3xl cursor-pointer' onClick={()=> setactiveSkill("soft")} style={{backgroundColor: activeSkill==="soft"? "royalBlue" : "",color: activeSkill==="soft"? "white" : "black"}} >
       Soft Skills
      </span>
       <span className='py-3 px-4 text-sm sm:text-lg md:text-lg lg:text-lg rounded-3xl cursor-pointer' onClick={()=> setactiveSkill("tools")} style={{backgroundColor: activeSkill==="tools"? "royalBlue" : "",color: activeSkill==="tools"? "white" : "black"}} >
       Tools
      </span>
    </span>
    </div>
   
    {activeSkill==="technical" &&(
        <>
        <div className=' flex flex-col sm:flex-row md:flex-row lg:flex-row justify-evenly items-center mt-15' style={{color: isDarkmode? "white" : "black"}}>
          <div data-aos="fade-right" className='sm:w-1/4 md:w-1/4 lg:w-1/4  shadow-lg px-5 py-15 rounded-2xl cursor-pointer border-transparent hover:border-gray-300 border-2 ' style={{backgroundColor: isDarkmode? "" : "bg-[rgb(234, 233, 233)]", border: isDarkmode? "2px solid grey" : ""}} >
       <div className='flex items-center gap-2'>
        <div className='shadow-lg w-10 h-10 flex justify-center items-center rounded-full' style={{backgroundColor: "royalBlue"}}>
        <img src="brackets.png" width={20} height={20} style={{filter: "invert(1)"}} />
        </div>
        <div className='flex justify-center items-center font-semibold sm:text-lg md:text-lg'>
          Frontend Development
        </div>
         </div>
         <div>
        <div className='mt-8 flex justify-between items-center '>
          <div  className='flex justify-start items-center gap-1'>
            <img src="reactLogo.png" width={17} height={17} style={{filter: isDarkmode? "invert(0)" : "invert(1)"}} />
            <div>
              React.Js
            </div>
          </div>
          <div className='text-sm'>
            85%
          </div>
        </div>
       </div>
       <div className='mt-1 w-[100%]  rounded-full h-1.5 bg-[Lightgrey] flex  items-center'>
       <p className=' w-[85%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
       <div className='mt-8 flex justify-between items-center '>
          <div  className='flex justify-start items-center gap-1'>
            <img src="tailwindcss.png" width={17} height={17} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
            <div>
              Tailwind Css
            </div>
          </div>
          <div className='text-sm'>
            75%
          </div>
        </div>
        <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[75%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
        <div className='mt-8 flex justify-between items-center '>
          <div  className='flex justify-start items-center gap-1'>
            <img src="js-logo.png" width={20} height={20} style={{filter: isDarkmode? "invert(0)" : "invert(1)"}} />
            <div>
              JavaScript
            </div>
          </div>
          <div className='text-sm'>
            80%
          </div>
        </div>
        <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[80%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
          <div className='mt-8 flex justify-between items-center '>
          <div  className='flex justify-start items-center gap-1'>
            <img src="htmlBlack.png" width={20} height={20} style={{filter: isDarkmode? "invert(0)" : "invert(1)"}} />
            <div>
              HTML
            </div>
          </div>
          <div className='text-sm'>
            90%
          </div>
        </div>
        <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[90%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
             <div className='mt-8 flex justify-between items-center '>
          <div  className='flex justify-start items-center gap-1'>
            <img src="css.svg" width={14} height={14} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
            <div>
              CSS
            </div>
          </div>
          <div className='text-sm'>
            80%
          </div>
        </div>
        <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[80%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
        </div>
        {/* right side expertise block */}
        
            <div data-aos="fade-right" className='sm:w-1/4 md:w-1/4 lg:w-1/4 mt-5 sm:mt-0 md:mt-0 lg:mt-0   shadow-lg px-5 py-15 rounded-2xl border-transparent cursor-pointer hover:border-gray-300 border-2 ' style={{backgroundColor: isDarkmode? "" : "bg-[rgb(234, 233, 233)]", border: isDarkmode? "2px solid grey" : ""}} >
       <div className='flex items-center gap-2'>
        <div className='shadow-lg w-10 h-10 flex justify-center items-center rounded-full' style={{backgroundColor: "lightgreen"}}>
        <img src="bio.png" width={20} height={20} style={{filter: "invert(0)"}} />
        </div>
        <div className='flex justify-center items-center font-semibold sm:text-lg md:text-lg'>
         Other Expertise&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
         </div>
         <div>
        <div className='mt-8 flex justify-between items-center '>
          <div  className='flex justify-start items-center gap-1'>
            <img src="n8n.png" width={17} height={17} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
            <div>
             n8n Automations
            </div>
          </div>
          <div className='text-sm'>
            80%
          </div>
        </div>
       </div>
       <div className='mt-1 w-[100%]  rounded-full h-1.5 bg-[Lightgrey] flex  items-center'>
       <p className=' w-[80%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
       <div className='mt-8 flex justify-between items-center '>
          <div  className='flex justify-start items-center gap-1'>
            <img src="python.svg" width={20} height={20} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
            <div>
              Python
            </div>
          </div>
          <div className='text-sm'>
            60%
          </div>
        </div>
        <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[60%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
        <div className='mt-8 flex justify-between items-center '>
          <div  className='flex justify-start items-center gap-1'>
            <img src="microsoft.svg" width={20} height={20} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
            <div>
             MS Office
            </div>
          </div>
          <div className='text-sm'>
            85%
          </div>
        </div>
        <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[85%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
          <div className='mt-8 flex justify-between items-center '>
          <div  className='flex justify-start items-center gap-1'>
            <img src="C++White.png" width={17} height={17} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
            <div>
           C++
            </div>
          </div>
          <div className='text-sm'>
            82%
          </div>
        </div>
        <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[82%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
             <div className='mt-8 flex justify-between items-center '>
          <div  className='flex justify-start items-center gap-1'>
            <img src="shopify.svg" width={14} height={14} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
            <div>
             Shopify
            </div>
          </div>
          <div className='text-sm'>
            95%
          </div>
        </div>
        <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[95%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
        </div>
       </div>
        </>
    )}
    {activeSkill==="soft" && (
      <>
      <div className=' grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 grid-cols-1  place-items-center m-10 gap-5' style={{color: isDarkmode? "white" : "black"}}>
       <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-6 sm:py-15 md:px-6 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "royalBlue"}}>
            <img src="/book.png"width={20} height={20} style={{filter: "invert(1)"}} />
          </div>
          <div className='font-semibold mt-1'>Problem Solving</div>
          <div className='text-sm' style={{color:"grey"}}>Analytical thinking and creative solution development</div>
          <div className='text-sm mt-2'>
            88%
          </div>
          <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[88%] bg-[royalblue] h-2 rounded-full'>
       </p>
       </div>
        </div>
        <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-12 sm:py-15 md:px-12 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "lightGreen"}}>
            <img src="/group.png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>Team Collaboration</div>
          <div className='text-sm' style={{color:"grey"}}>Effective communication and teamwork abilities</div>
          <div className='text-sm mt-2'>
            95%
          </div>
          <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[95%] bg-[green] h-2 rounded-full'>
       </p>
       </div>
        </div>

        <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-12 sm:py-15 md:px-12 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "orange"}}>
            <img src="/crown.png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>LeaderShip</div>
          <div className='text-sm' style={{color:"grey"}}>Project management and team guidance skills</div>
          <div className='text-sm mt-2'>
            90%
          </div>
          <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[90%] bg-[orange] h-2 rounded-full'>
       </p>
       </div>
        </div>

         <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-10 sm:py-15 md:px-10 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg flex justify-center items-center' style={{backgroundColor: "orchid"}}>
            <img src="/reuse.png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>AdaptAbility</div>
          <div className='text-sm' style={{color:"grey"}}>Quick learning and adaptation to new technologies</div>
          <div className='text-sm mt-2'>
            84%
          </div>
          <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[84%] bg-[orchid] h-2 rounded-full'>
       </p>
       </div>
        </div>

        <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-10 sm:py-15 md:px-10 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg flex justify-center items-center' style={{backgroundColor: "salmon"}}>
            <img src="/chat.png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>Communication</div>
          <div className='text-sm' style={{color:"grey"}}>Clear technical communication and documentation</div>
          <div className='text-sm mt-2'>
            86%
          </div>
          <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[86%] bg-[salmon] h-2 rounded-full'>
       </p>
       </div>
        </div>

        
        <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-10 sm:py-15 md:px-10 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg flex justify-center items-center' style={{backgroundColor: "skyblue"}}>
            <img src="/clock.png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>Time Management</div>
          <div className='text-sm' style={{color:"grey"}}>Efficient project planning and deadline management</div>
          <div className='text-sm mt-2'>
            89%
          </div>
          <div className='mt-1 w-[100%] rounded-full h-1.5 bg-[Lightgrey] flex items-center'>
       <p className=' w-[89%] bg-[skyblue] h-2 rounded-full'>
       </p>
       </div>
        </div>
      </div>
      </>
    )}
  {activeSkill==="tools" &&(
    <>
    <div  className=' mt-25 flex justify-evenly items-center sm:flex-row md:flex-row lg:flex-row flex-col' style={{color: isDarkmode? "white" : "black"}}>
   <div data-aos="fade-up" className='px-10 py-10 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey " : ""}}>
   <div className='flex justify-center items-center gap-2'>
    <div className='flex justify-center items-center w-10 h-10 bg-[royalblue] rounded-full'>
    <img src="wrench.png" width={20} height={20} />
    </div>
    <div className='font-semibold text-md'>
      Development Tools
    </div>
   </div>
   <div className='mt-7 grid grid-cols-2 gap-4 '>
    <div className='flex justify-center items-center gap-1 shadow-md rounded-md p-1' style={{border: "1px solid grey"}}>
      <img src="logo.png" width={13} height={13}  />
      <div className='text-sm'>VS Code</div>
    </div>
   <div className='flex justify-start pl-1 items-center gap-1 shadow-md rounded-md p-1' style={{border: "1px solid grey"}}>
      <img src="social.png" width={13} height={13}  />
      <div className='text-sm'>Git</div>
    </div>
    <div className='flex justify-start pl-1 items-center gap-1 shadow-md rounded-md p-1' style={{border: "1px solid grey"}}>
      <img src="social-1.png" width={13} height={13} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}} />
      <div className='text-sm'>GitHub</div>
    </div>
    <div className='flex justify-start pl-1 items-center gap-1 shadow-md rounded-md p-1' style={{border: "1px solid grey"}}>
      <img src="code.png" width={13} height={13}  />
      <div className='text-sm'>Dev C++</div>
    </div>
      <div className='flex justify-start pl-1 items-center gap-1 shadow-md rounded-md p-1' style={{border: "1px solid grey"}}>
      <img src="n8n.png" width={13} height={13} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}  />
      <div className='text-sm'>n8n</div>
    </div>
    </div>
   </div>
     
     <div data-aos="fade-up" className='mt-8 sm:mt-0 md:mt-0 lg:mt-0 px-8 pb-20 pt-12 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey " : ""}}>
   <div className='flex  items-center gap-2'>
    <div className='flex justify-center items-center w-10 h-10 bg-[lightGreen] rounded-full'>
    <img src="paint-brush.png" width={20} height={20} />
    </div>
    <div className='font-semibold text-md'>
      Design Tools&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
   </div>
   <div className='mt-7 grid grid-cols-2 gap-4 '>
    <div className='flex justify-start items-center gap-1 shadow-md rounded-md p-1' style={{border: "1px solid grey"}}>
      <img src="figma.png" width={13} height={13} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}  />
      <div className='text-sm'>Figma</div>
    </div>
   <div className='flex justify-start items-center gap-1 shadow-md rounded-md p-1' style={{border: "1px solid grey"}}>
      <img src="illustrator.png" width={13} height={13} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}  />
      <div className='text-sm'>AdobeXD</div>
    </div>
    <div className='flex justify-start pl-1 items-center gap-1 shadow-md rounded-md p-1' style={{border: "1px solid grey"}}>
      <img src="add.png" width={13} height={13}  />
      <div className='text-sm'>Canva</div>
    </div>
    <div className='flex justify-start pl-1 items-center gap-1 shadow-md rounded-md p-1' style={{border: "1px solid grey"}}>
      <img src="photoshop.png" width={13} height={13} style={{filter: isDarkmode? "invert(1)" : "invert(0)"}}  />
      <div className='text-sm'>PhotoShop</div>
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

export default Skills;
