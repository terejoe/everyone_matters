import Image from 'next/image'
import InvolvedImgOne from '../../../../public/involved_a.png';
import InvolvedImgTwo from '../../../../public/involved_b.png';
import InvolvedImgThree from '../../../../public/involved_c.png';

const Involved = () => {
  return (
    <div className="bg-white md:px-32 md:py-20 p-6 text-[#111111]">
        <div className="mb-8">
            <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
            <h1 className="text-2xl font-bold mt-4"> Get Involved </h1>
            <p className='text-sm mt-5 max-w-[470px]'>Your support empowers communities and helps us build a brighter future for all.</p>
        </div>

        <div className='my-4'>
            <div className='grid md:grid-cols-3 md:gap-2 gap-8'>
                <div className="relative w-full"> 
                    <Image src={InvolvedImgOne} alt='An image of hands held together'/>  
                    <div className="absolute flex bottom-2 right-0 left-0 justify-center items-center">  
                        <h2 className="text-white text-xl font-bold bg-black bg-opacity-70 py-2 px-12">  
                            Partner with Us  
                        </h2>  
                    </div> 
                </div>  
                <div className="relative w-full"> 
                    <Image src={InvolvedImgTwo} alt='An image of two girls laughing'/>  
                    <div className="absolute flex bottom-2 right-0 left-0 justify-center items-center">  
                        <h2 className="text-white text-xl font-semibold bg-black bg-opacity-70 py-2 px-12">  
                            Spread The Word 
                        </h2>  
                    </div> 
                </div>  
                <div className="relative w-full"> 
                    <Image src={InvolvedImgThree} alt='An image of a girl volunteering'/>  
                    <div className="absolute flex bottom-2 right-0 left-0 justify-center items-center">  
                        <h2 className="text-white text-xl font-semibold bg-black bg-opacity-70 py-2 px-12">  
                            Volunteer 
                        </h2>  
                    </div> 
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Involved
