import React, { useState } from 'react';

function Projects({isDarkmode}) {
    const [activePro,setactivePro]=useState("all");
  return (
  <>
  <section className='h-full mt-20'>
     <div className='sm:mt-5 md:mt-5 mt-2 flex justify-center items-center gap-2 text-2xl sm:text-4xl font-semibold' data-aos="fade-up" style={{color: isDarkmode? "white" : "black" }} >
     Projects &
      <div className='' style={{color: isDarkmode? "grey" : "royalBlue" }}>
       Portfolio
      </div>
    </div>
     <p data-aos="fade-up" className='hidden sm:flex md:flex justify-center items-center' style={{color: isDarkmode? "white" : "grey" }} >A showcase of my work, demonstrating technical expertise and problem solving </p>
      <p data-aos="fade-up" className='hidden sm:flex md:flex justify-center items-center'style={{color: isDarkmode? "white" : "grey" }}>skills across various domains</p>
      <p data-aos="fade-up" className='mt-2 sm:hidden md:hidden flex justify-center items-center text-sm px-4' style={{color: isDarkmode? "white" : "grey" }} >A showcase of my technical expertise and  </p>
       <p data-aos="fade-up" className='flex sm:hidden md:hidden text-sm justify-center items-center'style={{color: isDarkmode? "white" : "grey" }}>problem solving skills across various domains</p>
   <div data-aos="fade-up" className='flex justify-center items-center mt-10'>
    <span className='shadow-lg rounded-3xl pt-2 pb-2' style={{backgroundColor: isDarkmode?  "Silver" : "white"}}>
      <span className='py-3 px-4 rounded-3xl text-sm sm:text-lg md:text-lg lg:text-lg cursor-pointer  ' onClick={()=> setactivePro("all")} style={{backgroundColor: activePro==="all"? "royalBlue" : " ",color: activePro==="all"? "white" : "black"}}>
      All
      </span>
      <span className='py-3 px-4 text-sm sm:text-lg md:text-lg lg:text-lg rounded-3xl cursor-pointer' onClick={()=> setactivePro("frontend")} style={{backgroundColor: activePro==="frontend"? "royalBlue" : "",color: activePro==="frontend"? "white" : "black"}} >
       Frontend Projects
      </span>
       <span className='py-3 px-4 text-sm sm:text-lg md:text-lg lg:text-lg rounded-3xl cursor-pointer' onClick={()=> setactivePro("n8n")} style={{backgroundColor: activePro==="n8n"? "royalBlue" : "",color: activePro==="n8n"? "white" : "black"}} >
       n8n Automations
      </span>
    </span>
    </div>
    {activePro==="all" && (
      <>
      <div className='mt-20 grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 grid-cols-1  place-items-center m-10 gap-5' style={{color: isDarkmode? "white" : "black"}}>
       <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-6 sm:py-12 md:px-6 md:py-12 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "royalBlue"}}>
            <img src="/brand-identity.png"width={20} height={20} style={{filter: "invert(1)"}} />
          </div>
          <div className='font-semibold mt-1'>Portfolio Website</div>
          <div className='text-sm' style={{color:"grey"}}>A modern portfolio showcasing projects with smooth <br /> animations </div>
        <div className='flex justify-center items-center gap-8 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}} >React Js</p>
            <p style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}}>Tailwind Css</p>
            <p style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}}>AoS</p>
        </div>
        <div className='text-sm mt-3'>
            <p style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}}>Framer Motion</p>
        </div>
        </div>
        <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-8 sm:py-15 md:px-8 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "lightGreen"}}>
            <img src="/cloud.png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>Weather App</div>
          <div className='text-sm' style={{color:"grey"}}>Responsive weather application with real time data</div>
          <div className='flex justify-center items-center sm:gap-8 md:gap-8 lg:gap-8 gap-2 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}} >React Js</p>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>Tailwind Css</p>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>AoS</p>
        </div>
        <div className='text-sm mt-2 flex justify-center items-center gap-5'>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>Framer Motion</p>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>Api</p>
        </div>
        </div>

        <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-12 sm:py-15 md:px-12 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "orange"}}>
            <img src="/logo(2).png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>Currency Changing App</div>
          <div className='text-sm' style={{color:"grey"}}>Responsive CCA with real time calculations</div>
            <div className='flex justify-center items-center gap-8 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}} >React Js</p>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>Tailwind Css</p>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>AoS</p>
        </div>
        <div className='text-sm mt-2 flex justify-center items-center gap-5'>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>Framer Motion</p>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>Api</p>
        </div>
        </div>
        </div>
        <div className='m-10 flex justify-center items-center gap-15 flex-col sm:flex-row md:flex-row lg:flex-row ' style={{color: isDarkmode? "white" : "black"}}>
         <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-8 sm:py-14 md:px-8 md:py-14 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg flex justify-center items-center' style={{backgroundColor: "orchid"}}>
            <img src="/shopify.svg"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>Shopify Store</div>
          <div className='text-sm' style={{color:"grey"}}>An effective and fully functional ecommerce store
          </div>
          <div className='flex justify-center items-center gap-8 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #DA70D6, 0 0 16px #DA70D6"}} >Built-in Elements</p>
            <p style={{textShadow: "0 0 8px #DA70D6, 0 0 16px #DA70D6"}}>CSS</p>
            <p className='hidden sm:block md:block lg:block' style={{textShadow: "0 0 8px #DA70D6, 0 0 16px #DA70D6"}}>Photoshop</p>
        </div>
        <div className='text-sm mt-2 flex justify-center items-center gap-5'>
            <p style={{textShadow: "0 0 8px #DA70D6, 0 0 16px #DA70D6"}}>Domains</p>
             <p  className='block sm:hidden md:hidden lg:hidden'  style={{textShadow: "0 0 8px #DA70D6, 0 0 16px #DA70D6"}}>Photoshop</p>
        </div>
        </div>

        <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-6 py-13 sm:px-8 sm:py-14 md:px-8 md:py-14 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg flex justify-center items-center' style={{backgroundColor: "salmon"}}>
            <img src="/chat.png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>n8n Automations</div>
          <div className='text-sm' style={{color:"grey"}}>Automating business using n8n workflows</div>
          <div className='flex justify-center items-center gap-8 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #FA8072, 0 0 16px #FA8072"}} >Api Integrations</p>
            <p style={{textShadow: "0 0 8px #FA8072, 0 0 16px #FA8072"}}>Google Sheets</p>
             <p className='hidden sm:block md:block lg:block' style={{textShadow: "0 0 8px #FA8072, 0 0 16px #FA8072"}}>Webhooks</p>
        </div>
        <div className='text-sm mt-2 flex justify-center items-center gap-5'>
            <p style={{textShadow: "0 0 8px #FA8072, 0 0 16px #FA8072"}}>Leads Handling</p>
              <p className='block sm:hidden md:hidden lg:hidden' style={{textShadow: "0 0 8px #FA8072, 0 0 16px #FA8072"}}>Webhooks</p>
        </div> 
</div>
      </div>
      </>
    )}
    {activePro==="n8n" && (
        <>
       <div className='h-full mt-20 grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 grid-cols-1  place-items-center m-10 gap-5' style={{color: isDarkmode? "white" : "black"}}>
       <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-12 py-8 sm:px-6 sm:py-9 md:px-6 md:py-9 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "royalBlue"}}>
            <img src="/brand-identity.png"width={20} height={20} style={{filter: "invert(1)"}} />
          </div>
           <div className='hidden sm:block md:block lg:block font-semibold mt-1'>Lead Management Automation </div>
          <div className='block sm:hidden md:hidden lg:hidden font-semibold mt-1'>Lead Management </div>
          <div className='block sm:hidden md:hidden lg:hidden font-semibold'>Automation </div>
          <div className='text-sm' style={{color:"grey"}}>Automated workflow for Lead Tracking across Google <br /> Sheets </div>
        <div className='flex justify-center items-center gap-8 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}} >n8n</p>
            <p style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}}>Google Sheets API</p>
            <p style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}}>Form Integration</p>
        </div>
        <div className='text-sm mt-3'>
            <p style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}}>Conditional Logic & Triggers</p>
        </div>
        </div>
        <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-15 py-10 sm:px-10 sm:py-15 md:px-10 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "lightGreen"}}>
            <img src="/cloud.png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
         <div className='hidden sm:block md:block lg:block font-semibold mt-1'>Client Onboarding Workflow</div>
          <div className='block sm:hidden md:hidden lg:hidden font-semibold mt-1'>Client Onboarding </div>
          <div className='block sm:hidden md:hidden lg:hidden font-semibold'>orkflow</div>
          <div className='text-sm' style={{color:"grey"}}>Automated Google Drive & Gmail Integration</div>
          <div className='flex justify-center items-center sm:gap-8 md:gap-8 lg:gap-8 gap-9 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}} >n8n</p>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>Google Drive API</p>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>Gmail API</p>
        </div>
        <div className='text-sm mt-2 flex justify-center items-center gap-5'>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>Scheduler/Reminder Triggers</p>
        </div>
        </div>

        <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-12 sm:px-5 sm:py-12 md:px-5 md:py-12 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "orange"}}>
            <img src="/logo(2).png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>AI Voice Agent</div>
          <div className='text-sm flex-wrap' style={{color:"grey"}}>Response according to the data which we will provide <br /> to it</div>
            <div className='flex justify-center items-center gap-6 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}} >n8n</p>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>ElevenLabs</p>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>OpenAi API</p>
        </div>
        <div className='text-sm mt-2 flex justify-center items-center gap-5'>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>Webhook</p>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>AI Model</p>
        </div>
        </div>
        </div>
        
        </>

    )}
    {activePro==="frontend" && (
      <>
      <div className='mt-20 grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 grid-cols-1  place-items-center m-10 gap-5' style={{color: isDarkmode? "white" : "black"}}>
       <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-6 sm:py-12 md:px-6 md:py-12 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "royalBlue"}}>
            <img src="/brand-identity.png"width={20} height={20} style={{filter: "invert(1)"}} />
          </div>
          <div className='font-semibold mt-1'>Portfolio Website</div>
          <div className='text-sm' style={{color:"grey"}}>A modern portfolio showcasing projects with smooth <br /> animations </div>
        <div className='flex justify-center items-center gap-8 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}} >React Js</p>
            <p style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}}>Tailwind Css</p>
            <p style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}}>AoS</p>
        </div>
        <div className='text-sm mt-3'>
            <p style={{textShadow: "0 0 8px #3B82F6, 0 0 16px #3B82F6"}}>Framer Motion</p>
        </div>
        </div>
        <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-8 sm:py-15 md:px-8 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "lightGreen"}}>
            <img src="/cloud.png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>Weather App</div>
          <div className='text-sm' style={{color:"grey"}}>Responsive weather application with real time data</div>
          <div className='flex justify-center items-center sm:gap-8 md:gap-8 lg:gap-8 gap-2 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}} >React Js</p>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>Tailwind Css</p>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>AoS</p>
        </div>
        <div className='text-sm mt-2 flex justify-center items-center gap-5'>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>Framer Motion</p>
            <p style={{textShadow: "0 0 8px #34D399, 0 0 16px #34D399"}}>Api</p>
        </div>
        </div>
         <div data-aos="fade-up" className='flex flex-col justify-center items-center gap-1 px-13.5 py-8 sm:px-12 sm:py-15 md:px-12 md:py-15 bg-[rgb(234, 233, 233)] shadow-lg rounded-2xl border-transparent hover:border-gray-300 border-2' style={{border: isDarkmode? "2px solid lightgrey": ""}}>
          <div className='w-12 h-12 rounded-full shadow-lg  flex justify-center items-center' style={{backgroundColor: "orange"}}>
            <img src="/logo(2).png"width={20} height={20} style={{filter: "invert(0)"}} />
          </div>
          <div className='font-semibold mt-1'>Currency Changing App</div>
          <div className='text-sm' style={{color:"grey"}}>Responsive CCA with real time calculations</div>
            <div className='flex justify-center items-center gap-8 mt-3 text-sm'>
            <p className='' style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}} >React Js</p>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>Tailwind Css</p>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>AoS</p>
        </div>
        <div className='text-sm mt-2 flex justify-center items-center gap-5'>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>Framer Motion</p>
            <p style={{textShadow: "0 0 8px #FB923C, 0 0 16px #FB923C"}}>Api</p>
        </div>
        </div>
        </div>
      
      </>


    )}



  </section>
  
  
  </>
  )
}

export default Projects;
