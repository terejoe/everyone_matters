import React from "react";
import Footer from "../home/footer/page";
import PartnerForm from "../component/PartnerForm";

const Partner = () => {
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
            Partner with Us
          </div>
        </div>
      </div>

      <div className="bg-white md:p-20 p-6 text-[#111111] md:flex justify-center">
        <div className="text-center flex flex-col items-center">
          <hr className="border-[#80BB66] mb-4 border-t w-[100px]" />
          <h1 className="text-2xl font-bold mb-4">Let's Get Started</h1>
          <PartnerForm/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Partner;
