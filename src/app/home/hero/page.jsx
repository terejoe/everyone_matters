import Image from "next/image";
import HeroImg from "../../../../public/hero_img.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="bg-center bg-cover h-screen md:h-[calc(100vh-74px)] w-full flex justify-center items-center"
      style={{
        backgroundImage: `url('/hero_bg.png')`, // Correct way to set the URL as a string
      }}
    >
      <div className="text-white text-left md:flex gap-8 p-8">
        <div className="max-w-[580px] tracking-wider">
          <h1 className="text-4xl font-bold leading-[1.5]">
            Together, Let's Create a World Where Everyone Matters.
          </h1>
          <p className="mt-4 text-sm font-light leading-[1.8]">
            Join us in our mission to create a positive impact, supporting
            communities in need, one step at a time.
          </p>

          <div className="mt-8">
            <Link href="/about">
              <button className="px-6 py-3 text-white bg-[#2E2878] text-sm">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src={HeroImg}
            className="rounded-2xl"
            width={350}
            alt="Hero Image of people standing and smiling"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
