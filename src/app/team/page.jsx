import Image from "next/image";
import AvatarOne from "../../../public/avatar_a.png";
import AvatarTwo from "../../../public/avatar_b.png";
import AvatarThree from "../../../public/avatar_c.png";
import AvatarFour from "../../../public/avatar_d.png";
import AvatarFive from "../../../public/avatar_e.png";
import AvatarSix from "../../../public/avatar_f.png";
import AvatarSeven from "../../../public/avatar_g.png";
import AvatarEight from "../../../public/avatar_h.png";
import MissionImg from "../../../public/mission_img.png";
import Footer from "../home/footer/page";
import Link from "next/link";

const Team = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center h-[calc(100vh-350px)] w-full flex justify-end items-end"
        style={{
          backgroundImage: `url('team_img.svg')`,
        }}
      >
        <div className="md:mr-12">
          <div className="p-6 text-white bg-[#2E2878] text-sm">The Team</div>
        </div>
      </div>

      <div className="flex gap-2 text-sm justify-between lg:px-10 p-4 bg-[#FAFAFA] text-[#111111]">
        <p className="underline underline-offset-8 decoration-[#2E2878]">
          Board of Directors
        </p>
        <p className="">Executive Directors</p>
        <p className="">Finance Directors</p>
        <p className="">Program Managers</p>
        <p className="">Team Members</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 p-6">
        <div className="text-center flex flex-col items-center mb-4">
          <Image
            className="w-24 h-24 rounded-full"
            src={AvatarOne}
            alt="Rounded avatar"
          />
          <p className="text-lg font-semibold mt-3">Jerome Dorine</p>

          <div className="text-sm font-serif mt-3">
            <p>President & CEO</p>
            <p>Everyone Matters Foundation</p>
            <p>Executive Director</p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center mb-4">
          <Image
            className="w-24 h-24 rounded-full"
            src={AvatarTwo}
            alt="Rounded avatar"
          />
          <p className="text-lg font-semibold mt-3">Jerome Dorine</p>

          <div className="text-sm font-serif mt-3">
            <p>President & CEO</p>
            <p>Everyone Matters Foundation</p>
            <p>Executive Director</p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center mb-4">
          <Image
            className="w-24 h-24 rounded-full"
            src={AvatarThree}
            alt="Rounded avatar"
          />
          <p className="text-lg font-semibold mt-3">Jerome Dorine</p>

          <div className="text-sm font-serif mt-3">
            <p>President & CEO</p>
            <p>Everyone Matters Foundation</p>
            <p>Executive Director</p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center mb-4">
          <Image
            className="w-24 h-24 rounded-full"
            src={AvatarFour}
            alt="Rounded avatar"
          />
          <p className="text-lg font-semibold mt-3">Jerome Dorine</p>

          <div className="text-sm font-serif mt-3">
            <p>President & CEO</p>
            <p>Everyone Matters Foundation</p>
            <p>Executive Director</p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center mb-4">
          <Image
            className="w-24 h-24 rounded-full"
            src={AvatarFive}
            alt="Rounded avatar"
          />
          <p className="text-lg font-semibold mt-3">Jerome Dorine</p>

          <div className="text-sm font-serif mt-3">
            <p>President & CEO</p>
            <p>Everyone Matters Foundation</p>
            <p>Executive Director</p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center mb-4">
          <Image
            className="w-24 h-24 rounded-full"
            src={AvatarSix}
            alt="Rounded avatar"
          />
          <p className="text-lg font-semibold mt-3">Jerome Dorine</p>

          <div className="text-sm font-serif mt-3">
            <p>President & CEO</p>
            <p>Everyone Matters Foundation</p>
            <p>Executive Director</p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center mb-4">
          <Image
            className="w-24 h-24 rounded-full"
            src={AvatarSeven}
            alt="Rounded avatar"
          />
          <p className="text-lg font-semibold mt-3">Jerome Dorine</p>

          <div className="text-sm font-serif mt-3">
            <p>President & CEO</p>
            <p>Everyone Matters Foundation</p>
            <p>Executive Director</p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center mb-4">
          <Image
            className="w-24 h-24 rounded-full"
            src={AvatarEight}
            alt="Rounded avatar"
          />
          <p className="text-lg font-semibold mt-3">Jerome Dorine</p>

          <div className="text-sm font-serif mt-3">
            <p>President & CEO</p>
            <p>Everyone Matters Foundation</p>
            <p>Executive Director</p>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="bg-[#FAFAFA] md:p-20 p-6 text-[#111111] md:flex justify-center gap-8">
        <div className="">
          <div className="mt-10">
            <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
            <h1 className="text-2xl font-bold mt-4">Join The Team</h1>
            <p className="text-sm mt-4 max-w-[450px]">
                We're growing! Explore our current openings and join a passionate team dedicated to building a world where everyone matters.
            </p>
          </div>

          <Link href="">
            <button className="px-4 py-3 bg-[#2E2878] text-white mt-8">
                Career
            </button>
          </Link>

          
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src={MissionImg}
            width={450}
            alt="An image of people standing and smiling"
          />
        </div>
      </div>

      {/* Partner With Us */}
      <div className="bg-white md:p-20 p-6 text-[#111111] md:flex justify-center gap-8">
        <div className="text-center flex flex-col items-center">
          <hr className="border-[#80BB66] mb-4 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mb-4">Partner With Us Today</h1>
          <p className="text-sm mb-8 max-w-[650px]">
            You can help build a world where everyone matters. Join our network
            of partners and leverage your resources to support our mission.
          </p>
          <button className="px-4 py-3 bg-[#2E2878] text-white">
            Partner with Us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
