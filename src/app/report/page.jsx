import FacebookIcon from "../../../public/fb.svg";
import XIcon from "../../../public/x.svg";
import InstaIcon from "../../../public/insta.svg";
import ReportHeroImg from "../../../public/report_hero.png";
import Image from "next/image";
import AboutImg from "../../../public/aboutx.png";
import ClassroomImg from "../../../public/classroom_img.png";
import TeacherImg from "../../../public/teacher_img.png";
// import ReportImgOne from "../../../public/report_img_one.png";
import ReportImgTwo from "../../../public/report_img_two.png";
import ReportImgThree from "../../../public/report_img_three.png";
import Footer from "../home/footer/page";
import Link from "next/link";

const Report = () => {
  return (
    <>
      <div className="bg-white lg:px-48 lg:py-20 p-6 text-[#111111] md:flex justify-center">
        <div className="text-center flex flex-col items-center">
          <p className="text-[#2E2878] mb-4 text-lg">Reports</p>
          <h1 className="text-2xl font-bold mb-4">
            Empowering Children Through Education
          </h1>
          <p className="text-sm mb-4 max-w-[650px]">
            Increased access to quality education for vulnerable children,
            strengthened community engagement, and improved local governanace.
          </p>
          <p className="text-sm mb-4">November 16, 2024</p>

          <div className="flex gap-4">
            <div className="flex gap-2">
              <Image src={FacebookIcon} alt="Facebook Icon" />
              <p>Share</p>
            </div>
            <div className="flex gap-2">
              <Image src={InstaIcon} alt="Instagram Icon" />
              <p>Post</p>
            </div>
            <div className="flex gap-2">
              <Image src={XIcon} alt="Twitter Icon" />
              <p>Quote</p>
            </div>
          </div>

          <Image
            src={ReportHeroImg}
            alt="Report Hero image"
            className="mt-10"
          />

          <div className="mt-10 text-left">
            <p className="text-sm font-serif">
              <span className="text-2xl font-bold">E</span>ducation is the
              cornerstone of a brighter future, and at the Everyone Matters
              Foundation, we believe every child deserves the opportunity to
              learn and grow. In Apapa, we embarked on a transformative journey
              to improve access to quality education for children facing
              significant barriers.
            </p>
            <p className="text-sm font-serif mt-5">
              Recognizing the critical role of education in breaking the cycle
              of poverty, we partnered with local schools, community leaders,
              and dedicated teachers to implement a multi-faceted approach. This
              included:
            </p>

            {/*Report Grid*/}
            <div className="mt-10">
              <div className="md:grid grid-cols-2 md:mb-10">
                <Image
                  src={AboutImg}
                  alt="A picture of a boy reading"
                  width={450}
                />

                <div className="md:py-16 py-4">
                  <p className="text-xl font-bold mb-6">
                    Scholarships and Resources
                  </p>
                  <p className="text-sm max-w-[480px]">
                    We provided scholarships to cover tuition fees, ensuring
                    that children from low-income families could continue their
                    education without financial constraints. We also equipped
                    classrooms with essential learning materials, including
                    books, desks, and interactive learning tools.
                  </p>
                </div>
              </div>

              <div className="md:grid grid-cols-2 gap-2 md:mb-10">
                <Image
                  src={TeacherImg}
                  alt="A picture of someone teaching"
                  width={450}
                  className="md:order-2"
                />
                <div className="md:py-16 py-4 md:order-1">
                  <p className="text-xl font-bold mb-6">Teacher Training</p>
                  <p className="text-sm max-w-[480px]">
                    We conducted professional development workshops for
                    teachers, equipping them with the skills and knowledge to
                    effectively engage students and deliver high-quality
                    instruction. These workshops focused on innovative teaching
                    methodologies, classroom management techniques, and the
                    importance of creating an inclusive and supportive learning
                    environment.
                  </p>
                </div>
              </div>

              <div className="md:grid grid-cols-2 mb-10">
                <Image
                  src={ClassroomImg}
                  alt="A picture of a classroom"
                  width={450}
                />

                <div className="md:py-16 py-4">
                  <p className="text-xl font-bold mb-6">Classroom Upgrades</p>
                  <p className="text-sm max-w-[480px]">
                    We invested in the renovation of existing school buildings,
                    ensuring a safe and conducive learning environment. This
                    included upgrades to classrooms, libraries, and sanitation
                    facilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-sm font-serif">
                The impact of this project has been truly inspiring. We have
                witnessed a significant increase in school enrollment rates,
                improved academic performance among students, and a renewed
                sense of hope within the community. The children of [Community
                Name] are now equipped with the knowledge and skills to reach
                their full potential and contribute to a brighter future for
                themselves and their community.
              </p>
              <p className="text-sm font-serif mt-5">
                The impact of this project has been truly inspiring. We have
                witnessed a significant increase in school enrollment rates,
                improved academic performance among students, and a renewed
                sense of hope within the community. The children of [Community
                Name] are now equipped with the knowledge and skills to reach
                their full potential and contribute to a brighter future for
                themselves and their community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Reports */}
      <div className="bg-[#FAFAFA] lg:px-32 lg:py-20 p-6 text-[#111111]">
        <div className="mb-8">
          <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mt-4">Similar Reports </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {/* <div className="mt-2">
              <Image
                src={ReportImgOne}
                alt="A picture of three kids studying"
              />
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
            </div> */}
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
    </>
  );
};

export default Report;
