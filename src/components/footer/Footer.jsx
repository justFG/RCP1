import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#081637] w-100% text-white p-10'>
        <hr />
        <div className="detailsFooter flex items-center justify-around ">
            <img src="Logo.png" alt="" className='w-70 pr-20' />
            <div className="featureFoot  pt-20">
            <form className='flex items-center w-80 h-10 '>
                <input type="text" 
                    placeholder='Any question?'
                    className='w-full
                    h-full
                     bg-white rounded-s
                     p-1
                      text-black'
                />
                <button>
                    <span 
                    className='material-symbols-rounded rounded-e p-1 h-10 pt-2 bg-indigo-600'>send</span>
                </button>
            </form>
            
                <h4 className='pt-6 border-b-1 w-15'>Contact:</h4>
                <label className='flex pt-1 pb-10 text-40'>
                <span className="material-symbols-rounded">call</span>
                <p className='font-semibold pb-10 '>+213-553559009</p>
            </label> 
            </div>
        </div>
            <div className="aboutFoot flex flex-col items-center
            justify-center p-3">
                <h2>About</h2>
               <p className='text-sm '>
          Nexus is your trusted destination for high-quality laptops and tech accessories. 
          We provide affordable, reliable, and modern solutions to meet your daily needs, 
          whether for work, study, or gaming.
        </p>
            </div>
        <hr />

         {/* Copyright */}
      <p className='text-center text-sm mt-4 opacity-70'>
        © 2026 Nexus Store. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
 