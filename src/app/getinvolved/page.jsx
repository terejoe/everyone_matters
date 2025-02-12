import Image from "next/image";
import InvolvedImgOne from "../../../public/involved_a.png";
import VolunteerImg from "../../../public/volunteer_img.png";
import PointerImg from "../../../public/pointer.png";
import PointerVImg from "../../../public/pointerv.png";
import FacebookLogo from "../../../public/facebook_logo.svg";
import TwitterLogo from "../../../public/twitter_logo.png";
import YoutubeLogo from "../../../public/youtube_logo.png";
import InstagramLogo from "../../../public/instagram_logo.svg";
import Footer from "../home/footer/page";

const GetInvolved = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center h-[calc(100vh-350px)] w-full flex justify-end items-end"
        style={{
          backgroundImage: `url('involved_a.png')`,
        }}
      >
        <div className="md:mr-12">
          <div className="p-6 text-white bg-[#2E2878] text-sm">
            Get Involved
          </div>
        </div>
      </div>

      {/* Ways to Get Involved */}
      <div className="bg-white md:p-20 p-6 text-[#111111] md:flex justify-center">
        <div className="text-center flex flex-col items-center">
          <hr className="border-[#80BB66] mb-4 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mb-4">Ways to Get Involved</h1>
          <p className="text-sm mb-8 max-w-[650px]">
            You can help build a world where everyone matters.
          </p>

          <div className="my-4">
            <div className="grid md:grid-cols-2 md:gap-2">

              <div className="relative w-full">
                <Image
                  src={InvolvedImgOne}
                  alt="An image of hands held together"
                />
                <div className="absolute flex bottom-2 right-0 left-0 justify-center items-center">
                  <div className="bg-white py-2 px-3">
                    <div className="text-[#111111] flex justify-between px-1">
                      <h2 className="text-lg font-bold ">
                        Partner with Us
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#111111"
                        width={20}
                        height={20}
                        className="mt-1"
                      >
                        <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
                      </svg>
                    </div>
                    <p className="font-serif text-sm max-w-[300px]">
                      Join our network of partners and leverage your resources to
                      support our mission.
                    </p>

                  </div>
                </div>
              </div>

              <div className="relative w-full">
                <Image
                  src={VolunteerImg}
                  alt="An image of people volunteering"
                  width={370}
                />
                <div className="absolute flex bottom-2 right-0 left-0 justify-center items-center">
                  <div className="bg-white py-2 px-3">
                    <div className="text-[#111111] flex justify-between px-1">
                      <h2 className="text-lg font-bold">
                        Volunteer
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#111111"
                        width={20}
                        height={20}
                        className="mt-1"
                      >
                        <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
                      </svg>
                    </div>
                    <p className="font-serif text-sm max-w-[300px]">
                      Every contribution, big or small, makes a difference. Join our team of volunteer today.
                    </p>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#FAFAFA] md:p-20 p-6 text-[#111111] md:flex justify-center">
        
        <div className="text-center flex flex-col items-center">
          <hr className="border-[#80BB66] mb-4 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mb-4">By Partnering With Us:</h1>

          <div className="flex flex-row gap-4 md:block mt-4">
            <Image src={PointerImg} alt='Pointer image supporting these texts' className="hidden md:block"/>
            <Image src={PointerVImg} alt='Pointer image supporting these texts' className="md:hidden"/>

            <div className="flex flex-col md:flex-row md:gap-32 gap-4 mt-5">
              <div className='mb-4 md:mb-0'>
                <p className="text-lg font-bold mb-2">Direct Support</p>
                <p className="font-serif text-sm max-w-[230px] mt-3">You directly support our efforts to provide immediate relief and assistance to communities impacted by disasters and emergencies.</p>
              </div>

              <div className='mb-4 md:mb-0'>
                <p className="text-lg font-bold mb-2">Empower Communities</p>
                <p className="font-serif text-sm max-w-[230px] mt-3">You contribute to the creation of sustainable communities where individuals have the opportunity to thrive.</p>
              </div>

              <div className='mb-4 md:mb-0'>
                <p className="text-lg font-bold mb-2">Give Voice</p>
                <p className="font-serif text-sm max-w-[230px] mt-3">You help amplify the voices of marginalized communities and advocate for social justice and human rights.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-white md:p-20 p-6 text-[#111111] md:flex justify-center">
        <div className="text-center flex flex-col items-center">
          <hr className="border-[#80BB66] mb-4 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mb-4">Spread The Word</h1>
          <p className="text-sm mb-8 max-w-[650px]">
            Connect on with us on social media, learn more about our mission and share with your family and friends.
          </p>
          
          <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
            <div className="bg-[#FAFAFA] flex flex-col items-center gap-3 p-10">
              <Image src={FacebookLogo} alt="A logo of facebook"/>
              <p className="text-sm font-semibold mt-7">Join us on<br/> Facebook</p>
            </div>

            <div className="bg-[#FAFAFA] flex flex-col items-center gap-3 p-10">
              <Image src={TwitterLogo} alt="A logo of twitter"/>
              <p className="text-sm font-semibold mt-5">Join us on<br/> Twitter(X)</p>
            </div>

            <div className="bg-[#FAFAFA] flex flex-col items-center gap-3 p-10">
              <Image src={YoutubeLogo} alt="A logo of youtube"/>
              <p className="text-sm font-semibold mt-6">Join us on<br/> YouTube</p>
            </div>

            <div className="bg-[#FAFAFA] flex flex-col items-center gap-3 p-10">
              <Image src={InstagramLogo} alt="A logo of instagram" width={70}/>
              <p className="text-sm font-semibold mt-8">Join us on<br/>  Instagram</p>
            </div>
            
          </div>
        </div>


      </div>
      <Footer/>
    </div>
  );
};

export default GetInvolved;
