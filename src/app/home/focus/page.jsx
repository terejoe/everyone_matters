import Image from 'next/image';
import IconOne from '../../../../public/icon_a.svg'
import IconTwo from '../../../../public/icon_b.svg'
import IconThree from '../../../../public/icon_c.svg'
import IconFour from '../../../../public/icon_d.svg'
import IconFive from '../../../../public/icon_e.svg'
import IconSix from '../../../../public/icon_f.svg'

const CoreFocus = () => {
  return (
    <div className='flex justify-center'>
        <div className="bg-[#FAFAFA] md:px-32 md:py-20 p-6 text-[#111111]">
            <div className="mb-8">
                <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
                <h1 className="text-2xl font-bold mt-4"> Our CoCorere Focuses </h1>
                <p className='text-sm mt-5 max-w-[470px]'>The Everyone Matters Foundation focuses on creating a positive impact through these key areas:</p>
            </div>

            <div className='my-4'>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div className='flex gap-3'>
                        <Image src={IconOne} alt='An icon of support'/>
                        <p>Supporting communities affected by disasters and emergencies.</p>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={IconTwo} alt='An icon of justice'/>
                        <p>Promoting peace, equality, and access to justice for all.</p>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={IconThree} alt='An icon of growth'/>
                        <p>Promoting economic growth and educational access for all.</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-4 mt-10'>
                    <div className='flex gap-3'>
                        <Image src={IconFour} alt='An icon of planet growth' className='mb-10'/>
                        <p>Protecting our planet through sustainable practices and climate action.</p>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={IconFive} alt='An icon of good citizenship' className='mb-10'/>
                        <p>Strengthening communities through responsible governance and citizen participation.</p>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={IconSix} alt='An icon of technology' className='mb-10'/>
                        <p>Leveraging technology to drive positive change and address global challenges.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoreFocus
