import React from 'react'

const Creating = () => {
  return (
    <div className='bg-[#FAFAFA] lg:px-32 lg:py-20 p-10 text-[#111111]'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='max-w-[460px]'>
                <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
                <h1 className="text-2xl font-bold mt-4 max-w-[400px]">Creating a World Where Everyone Matters</h1>  
                <p className='text-sm mt-5'>Together, we are building a just and equitable world where every individual has the opportunity to thrive. Our work is rooted in compassion, inclusion, and a commitment to building a more just and equitable world for all.</p>
                <button className='px-6 py-3 border-[#2E2878] border-2 mt-8'>
                    Learn More About Our Work
                </button>
            </div>

            <div className= 'md:ml-10'>
                <div className='mb-6'>
                    <hr className="border-[#80BB66] mb-3 border-t md:w-4/5" />
                    <h4 className="font-bold mb-3">6 Countries</h4>
                    <p className='text-sm max-w-[460px]'>We are working on impactful projects across 2 continents to create a better future for all.</p>
                </div>
                <div className='mb-6'>
                    <hr className="border-[#80BB66] mb-3 border-t md:w-4/5" />
                    <h4 className="font-bold mb-3">120 Communities</h4>
                    <p className='text-sm max-w-[460px]'>We have successfully reached over 120 communities since 2024.</p>
                </div>
                <div className='mb-6'>
                    <hr className="border-[#80BB66] mb-3 border-t md:w-4/5" />
                    <h4 className="font-bold mb-3">150k Individuals </h4>
                    <p className='text-sm max-w-[460px]'>Our work has directly assisted individuals with a wide range of essential aids.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Creating
