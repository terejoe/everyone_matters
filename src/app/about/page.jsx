import Image from "next/image";
import MissionImg from "../../../public/mission_img.png";
import Footer from "../home/footer/page";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center h-[calc(100vh-350px)] w-full flex justify-end items-end"
        style={{
          backgroundImage: `url('about_img.png')`,
        }}
      >
        <div className="md:mr-12">
          <div className="p-6 text-white bg-[#2E2878] text-sm">About Us</div>
        </div>
      </div>

      <div className="md:p-14 p-5 mx-auto max-w-[900px]">
        <p className="text-[#111111] text-2xl font-bold">
          The Everyone Matters Foundation is a non-profit organization dedicated
          to creating a world where everyone matters, starting with one
          community at a time.
        </p>
      </div>

      {/* Mission And Vision Section*/}
      <div className="bg-[#FAFAFA] md:p-20 p-6 text-[#111111] md:flex justify-center gap-8">
        <div className="mt-10">
          <div>
            <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
            <h1 className="text-2xl font-bold mt-4">Our Mission</h1>
            <p className="text-sm mt-5 max-w-[450px]">
              Together we can save the world and create a positive impact,
              Starting with one community at a time.
            </p>
          </div>

          <div className="mt-10">
            <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
            <h1 className="text-2xl font-bold mt-4 max-w-[400px]">
              Our Vision
            </h1>
            <p className="text-sm mt-4">
              A world where everyone matters and no one is left behind.
            </p>
          </div>
          <Link href="/whatwedo">
            <button className="px-4 py-3 border-[#2E2878] border-2 mt-8">
              See Our Objectives
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

      {/* Impact Section */}
      <div className="bg-[#111111] md:p-20 px-6 py-10 text-center">
        <div className="mb-10">
          <p className="text-[#A3EF83]">
            Everyone Matters Foundation Impact Till Date
          </p>
        </div>

        <div className="md:grid grid-cols-3 text-white space-y-8 md:space-y-0">
          <div className="md:grid grid-rows-3 space-y-1">
            <p className="font-bold text-4xl">6</p>
            <p className="font-bold text-xl">Countries</p>
            <p className="text-sm font-extralight font-serif md:px-20 px-16">
              Our work has impacted communities across 2 continents.
            </p>
          </div>
          <div className="md:grid grid-rows-3 space-y-1">
            <p className="font-bold text-4xl">120</p>
            <p className="font-bold text-xl">Communities</p>
            <p className="text-sm font-extralight font-serif md:px-20 px-16">
              We have successfully reached over 120 communities since 2024.
            </p>
          </div>
          <div className="md:grid grid-rows-3 space-y-1">
            <p className="font-bold text-4xl">500k</p>
            <p className="font-bold text-xl">Individuals</p>
            <p className="text-sm font-extralight font-serif md:px-20 px-10">
              We have provided a wide range of essential support to individuals
              in need.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-white lg:px-56 md:px-32 md:py-20 p-6 py-10 text-[#111111]">
        <div className="mb-5">
          <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mt-4">What Makes Us Who We Are</h1>
        </div>

        <div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-3">Compassion</h3>
            <p className="text-sm mb-6">
              Our actions are driven by a deep sense of compassion, fueled by a
              deep understanding of human suffering. We are committed to
              alleviating hardship wherever we find it, whether it stems from
              natural disasters, poverty, or conflict. This commitment motivates
              us to provide immediate relief, support recovery, and work towards
              a world where everyone has the opportunity to live with dignity.
            </p>
            <hr className="border-[#80BB66] mb-3 border-t" />
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-3">Inclusion and Equality</h3>
            <p className="text-sm mb-6">
              We stand firmly for the principles of inclusivity and equality.
              Our efforts ensure that our assistance and support are accessible
              to all, without discrimination. We work tirelessly to create
              opportunities that benefit everyone, regardless of their
              background, status, or circumstances.
            </p>
            <hr className="border-[#80BB66] mb-3 border-t" />
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-3">
              Sustainability and Environmental Responsibility
            </h3>
            <p className="text-sm mb-6">
              We are deeply committed to nurturing sustainable communities
              through environmentally responsible approaches. We believe in
              building thriving communities that coexist harmoniously with the
              environment.
            </p>
            <hr className="border-[#80BB66] mb-3 border-t" />
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-3">
              Empowerment and Advocacy
            </h3>
            <p className="text-sm mb-6">
              We believe that strong community voices are essential in enhancing
              the delivery of essential services, transparency and improving
              overall well-being.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="bg-[#FAFAFA] md:p-20 p-6 text-[#111111] md:flex justify-center gap-8">
        <div className="">
          <div className="mt-10">
            <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
            <h1 className="text-2xl font-bold mt-4">Meet Our Team</h1>
            <p className="text-sm mt-4 max-w-[500px]">
              Meet the dedicated team who embody the spirit of the Everyone
              Matters Foundation. Our team of staff, leaders, and partners work
              together to create a world where everyone matters.
            </p>
          </div>

          <Link href="/team">
            <button className="px-4 py-3 bg-[#2E2878] text-white mt-8">
              Meet Our People
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
      <div className="bg-white md:p-20 p-6 text-[#111111] flex justify-center gap-8">
        <div className="text-center flex flex-col items-center">
          <hr className="border-[#80BB66] mb-4 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mb-4">Partner With Us Today</h1>
          <p className="text-sm mb-8 max-w-[650px]">
            You can help build a world where everyone matters. Join our network
            of partners and leverage your resources to support our mission.
          </p>
          <Link href="/partner">
            <button className="px-4 py-3 bg-[#2E2878] text-white">
              Partner with Us
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
