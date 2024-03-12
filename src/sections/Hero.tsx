import Image from "next/image";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 2xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      {/* left */}
      <div className="relative z-20 flex flex-1 flex-col lg:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={500}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="text-[16px] font-[400] mt-16 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>


        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="text-[16px] font-[700] lg:text-[20px] text-blue-70">
            198k
            <span className="text-[16px] font-[400] lg:text-[20px] ml-1">Excellent Reviews</span>
          </p>
        </div>


        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button type="button" title="How we work?" icon="/play.svg" variant="btn_white_text" />
        </div>
      </div>

      {/* right */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-gray-20 text-[16px] font-[400]">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="text-white text-[20px] font-[700]">Aguas Calientes</p>
          </div>


          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-gray-20 text-[16px] font-[400] block">Distance</p>
              <p className="text-[20px] font-[700] text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-20 text-[16px] font-[400] block">Elevation</p>
              <p className="text-[20px] font-[700] text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
