import Image from "next/image";
import ObjImgOne from "../../../public/obj_a.png";
import ObjImgTwo from "../../../public/obj_b.png";
import ObjImgThree from "../../../public/obj_c.png";
import IconOne from "../../../public/icon_a.svg";
import IconTwo from "../../../public/icon_b.svg";
import IconThree from "../../../public/icon_c_x.svg";
import IconFour from "../../../public/icon_d.svg";
import IconFive from "../../../public/icon_e_x.svg";
import IconSix from "../../../public/icon_f.svg";
import Footer from "../home/footer/page";
import ReportImgOne from "../../../public/report_img_one.png";
import ReportImgTwo from "../../../public/report_img_two.png";
import ReportImgThree from "../../../public/report_img_three.png";
import Link from "next/link";

const Whatwedo = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center h-[calc(100vh-350px)] w-full flex justify-end items-end"
        style={{
          backgroundImage: `url('about_img.png')`,
        }}
      >
        <div className="md:mr-12">
          <div className="p-6 text-white bg-[#2E2878] text-sm">What We Do</div>
        </div>
      </div>

      <div className="md:p-14 p-5 mx-auto max-w-[900px]">
        <p className="text-[#111111] text-2xl font-bold tracking-wide">
          Our goal: A world where everyone thrives. We foster sustainable
          communities, empowering individuals to reach their full potential.
        </p>
      </div>

      {/* Our Organizational Objectives */}
      <div className="bg-[#FAFAFA] md:p-14 p-6 text-[#111111] md:flex justify-center gap-8">
        <div>
          <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mt-4">
            Our Organizational Objectives
          </h1>

          <div className="mt-10">
            <div className="md:grid grid-cols-2 gap-1 md:mb-10">
              <Image
                src={ObjImgOne}
                alt="A picture of a team feeding people"
                width={450}
              />

              <div className="md:py-16 py-4">
                <p className="text-xl font-bold mb-6">
                  Providing Humanitarian Aid
                </p>
                <p className="text-sm max-w-[480px]">
                  Our dedication lies in providing immediate relief and support,
                  including food, shelter, medical aid, education, clean water
                  and other essential services, to those in need and affected by
                  disasters, conflicts, and emergencies, while upholding the
                  principles of compassion, Inclusion and equality.
                </p>
              </div>
            </div>

            <div className="md:grid grid-cols-2 gap-2 mb-4">
              <div className="md:py-16 py-4">
                <p className="text-xl font-bold mb-6">
                  Nurturing Sustainable
                  <br /> Communities
                </p>
                <p className="text-sm max-w-[480px]">
                  We are deeply committed to empowering communities to showcase
                  their rich agricultural and natural resources, as well as
                  promoting sustainable practices related to climate and clean
                  energy. Our goal is to help communities carve out a niche for
                  locally produced products, innovations, and environmentally
                  responsible approaches in the global marketplace.
                </p>
              </div>
              <Image
                src={ObjImgTwo}
                alt="A picture of two men planting"
                width={450}
              />
            </div>

            <div className="md:grid grid-cols-2 mb-10">
              <Image
                src={ObjImgThree}
                alt="A picture of a community using their voice"
                width={450}
              />

              <div className="md:py-16 py-4">
                <p className="text-xl font-bold mb-6">
                  Amplifying Community Voices
                </p>
                <p className="text-sm max-w-[480px]">
                  Our pledge involves supporting communities to reinstate strong
                  leadership and advocate for responsible governance to enhance
                  the delivery of essential services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Do What We Do */}
      <div className="bg-[#111111] md:px-40 md:py-10 p-6 text-white">
        <div>
          <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mt-4">How We Do What We Do</h1>
        </div>

        <div className="md:grid grid-cols-3 mt-6 gap-3">
          <div>
            <div className="bg-[#2E2878] text-white [100px] py-4 flex justify-center text-5xl">
              1
            </div>
            <div className="text-center">
              <p className="mt-4">Starting Point</p>
              <p className="text-sm font-serif font-thin mt-3 px-10 mb-4 md:mb-0">
                Addressing immediate needs through humanitarian aid.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#80BB66] text-[#111111] [100px] py-4 flex justify-center text-5xl">
              2
            </div>
            <div className="text-center">
              <p className="mt-4">Intermediate Step</p>
              <p className="text-sm font-serif font-thin mt-3 px-10 mb-4 md:mb-0">
                Empowering communities for sustainable practices and showcasing
                their resources.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#782849] text-white [100px] py-4 flex justify-center text-5xl">
              3
            </div>
            <div className="text-center">
              <p className="mt-4">Ultimate Goal</p>
              <p className="text-sm font-serif font-thin mt-3 px-10 ">
                Strengthening community voices and advocating for responsible
                governance, contributing to a world where everyone matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Focuses */}
      <div className="flex justify-center">
        <div className="bg-white md:px-32 md:py-20 p-6 text-[#111111]">
          <div className="mb-8">
            <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
            <h1 className="text-2xl font-bold mt-4"> Our Core Focuses </h1>
            <p className="text-sm mt-5 max-w-[470px]">
              The Everyone Matters Foundation contribute to the achievement of
              the SDGs by addressing these thematic areas:
            </p>
          </div>

          <div className="my-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex gap-3">
                  <Image src={IconOne} alt="An icon of support" />
                  <p className="font-bold">
                    Servitude and Humanitarian
                    <br /> Assistance
                  </p>
                </div>
                <p className="text-sm font-serif font-thin mt-3">
                  This is directly related to SDG 2 (Zero Hunger), SDG 3 (Good
                  Health and Well-being), and SDG 4 (Quality Education).
                  Providing immediate relief, food, medical aid, and education
                  supports SDGs aimed at ending hunger, ensuring health, and
                  promoting quality education.
                </p>
              </div>
              <div>
                <div className="flex gap-3">
                  <Image src={IconFour} alt="An icon of planet growth" />
                  <p className="font-bold">
                    Environmental and Climate
                    <br /> Sustainability
                  </p>
                </div>
                <p className="text-sm font-serif font-thin mt-3">
                  Your commitment to sustainable practices, climate, and clean
                  energy relates to SDG 7 (Affordable and Clean Energy), SDG 13
                  (Climate Action), and SDG 15 (Life on Land). It demonstrates a
                  dedication to environmental protection and combating climate
                  change.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-10">
              <div>
                <div className="flex gap-3">
                  <Image src={IconTwo} alt="An icon of justice" />
                  <p className="font-bold">
                    Peace, Social Justice, and Human
                    <br /> Rights
                  </p>
                </div>
                <p className="text-sm font-serif font-thin mt-3">
                  This connects with SDG 16 (Peace, Justice, and Strong
                  Institutions), focusing on promoting peaceful and inclusive
                  societies and ensuring access to justice for all.
                </p>
              </div>
              <div>
                <div className="flex gap-3">
                  <Image src={IconThree} alt="An icon of growth" width={40} />
                  <p className="font-bold">
                    Gender and Economic
                    <br /> Empowerment
                  </p>
                </div>
                <p className="text-sm font-serif font-thin mt-3">
                  SDG 5 (Gender Equality) and SDG 8 (Decent Work and Economic
                  Growth) are directly related. Empowering communities and
                  ensuring equality aligns with these goals.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-10">
              <div>
                <div className="flex gap-3">
                  <Image
                    src={IconFive}
                    alt="An icon of good citizenship"
                    width={40}
                  />
                  <p className="font-bold">Civic Engagement and Governance</p>
                </div>
                <p className="text-sm font-serif font-thin mt-3">
                  This is connected to SDG 16 (Peace, Justice, and Strong
                  Institutions) and SDG 17 (Partnerships for the Goals).
                  Advocating for responsible governance and community engagement
                  contributes to building stronger, more accountable
                  institutions and partnerships.
                </p>
              </div>
              <div>
                <div className="flex gap-3">
                  <Image src={IconSix} alt="An icon of technology" />
                  <p className="font-bold mt-2">Technology and Innovation</p>
                </div>
                <p className="text-sm font-serif font-thin mt-3">
                  While not directly tied to a specific SDG, technology and
                  innovation can support progress across all the goals, as
                  innovation is key to finding new solutions and achieving
                  sustainable development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Reports */}
      <div className="bg-[#FAFAFA] lg:px-32 lg:py-20 p-6 text-[#111111]">
        <div className="mb-8">
          <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mt-4"> Recent Reports </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="mt-2">
            <Image src={ReportImgOne} alt="A picture of three kids studying" />
            <div className="md:mr-12 my-4 text-center">
              <h4 className="md:px-10 mb-4 font-bold text-xl">
                Empowering Children Through Education
              </h4>
              <p className="md:px-12 text-sm ">
                Increased access to quality education for vulnerable children,
                strengthened community engagement, and improved local
                governance.
              </p>
              <Link href="/report">
                <button className="px-6 font-semibold text-sm py-3 border-[#2E2878] border-2 mt-8">
                  Read Report
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <Image src={ReportImgTwo} alt="A picture of people farming" />
            <div className="md:mr-12 my-4 text-center">
              <h4 className="md:px-10 mb-4 font-bold text-xl">
                Community-Led Organic Farming
              </h4>
              <p className="md:px-12 text-sm ">
                Increased food security for the community, improved livelihoods
                for local farmers, and reduced environmental impact.
              </p>
              <Link href="/report">
                <button className="px-6 font-semibold text-sm py-3 border-[#2E2878] border-2 mt-8">
                  Read Report
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <Image
              src={ReportImgThree}
              alt="A picture of doctors administering to people"
            />
            <div className="md:mr-12 my-4 text-center">
              <h4 className="md:px-10 mb-4 font-bold text-xl">
                Immediate Relief To Affected Communities
              </h4>
              <p className="md:px-12 text-sm ">
                In response to a recent flood in Tete, we provided emergency
                food aid, clean water supplies, and temporary shelter to over
                500 families
              </p>
              <Link href="/report">
                <button className="px-6 font-semibold text-sm py-3 border-[#2E2878] border-2 mt-8">
                  Read Report
                </button>
              </Link>
            </div>
          </div>
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

export default Whatwedo;
