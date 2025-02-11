import React from 'react'
import Footer from '../home/footer/page'

const Whatwedo = () => {
  return (
    <div>
        <div  
        className="bg-cover bg-no-repeat bg-center h-[calc(100vh-350px)] w-full flex justify-end items-end"  
        style={{  
            backgroundImage: `url('about_img.png')`  
        }}  
        >
            <div className="md:mr-12">
                <div className='px-6 py-3 text-white bg-[#2E2878] text-sm'>
                    About Us
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Whatwedo
