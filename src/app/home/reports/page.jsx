import Image from "next/image";
import ReportImgOne from "../../../../public/report_img_one.png";
import ReportImgTwo from "../../../../public/report_img_two.png";
import ReportImgThree from "../../../../public/report_img_three.png";

const Reports = () => {
  return (
    <div className="bg-white lg:px-32 lg:py-20 p-6 text-[#111111]">
      <div className="mb-8">
        <hr className="border-[#80BB66] mb-3 border-t w-[100px]" />
        <h1 className="text-2xl font-bold mt-4"> Recent Reports </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <div className="mt-2">
            <Image src={ReportImgOne} alt="A picture of three kids studying"/>
            <div className="md:mr-12 my-4 text-center">
                <h4 className="md:px-10 mb-4 font-bold text-xl">Empowering Children Through Education</h4>
                <p className="md:px-12 text-sm ">Increased access to quality education for vulnerable children, strengthened community engagement, and improved local governance.</p>
                <Link href="/report">
                  <button className="px-6 font-semibold text-sm py-3 border-[#2E2878] border-2 mt-8">
                    Read Report
                  </button>
              </Link>
            </div>
        </div>
        <div className="mt-2">
            <Image src={ReportImgTwo} alt="A picture of people farming"/>
            <div className="md:mr-12 my-4 text-center">
                <h4 className="md:px-10 mb-4 font-bold text-xl">Community-Led Organic Farming</h4>
                <p className="md:px-12 text-sm ">Increased food security for the community, improved livelihoods for local farmers, and reduced environmental impact.</p>
                <Link href="/report">
                  <button className="px-6 font-semibold text-sm py-3 border-[#2E2878] border-2 mt-8">
                    Read Report
                  </button>
              </Link>
            </div>
        </div>
        <div className="mt-2">
            <Image src={ReportImgThree} alt="A picture of doctors administering to people"/>
            <div className="md:mr-12 my-4 text-center">
                <h4 className="md:px-10 mb-4 font-bold text-xl">Immediate Relief To Affected Communities</h4>
                <p className="md:px-12 text-sm ">In response to a recent flood in Tete, we provided emergency food aid, clean water supplies, and temporary shelter to over 500 families</p>
                <Link href="/report">
                  <button className="px-6 font-semibold text-sm py-3 border-[#2E2878] border-2 mt-8">
                    Read Report
                  </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
