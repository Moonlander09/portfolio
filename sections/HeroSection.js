import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_75%,transparent)]">

        <div className="size-[620px] hero"></div>
        <div className="size-[820px] hero"></div>
        <div className="size-[1020px] hero"></div>
        <div className="size-[1220px] hero"></div>
        </div>
      <div className="container p-2 md:p-4 mx-auto">

        <div className="flex flex-col items-center">
          <Image
            src="/person.png"
            width={100}
            height={100}
            alt="A person with laptop"
          />
          <div className="bg-gray-900 border text-white border-gray-500 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative"></div>
            <div className="bg-green-500 size-2.5 rounded-full absolute animate-ping "></div>
            <div>Available for new Projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">

        <h1 className="tracking-wide text-3xl md:text-5xl text-center mt-8">Building Exceptional User Experiences</h1>
        <p className="mt-4 md:text-lg text-center text-gray-900/60">
          I specialize in transforming design into functional, high performing
          web applications. Let&apos;s discuss your next project.
        </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <button className="inline-flex items-center  gap-2 glass bg-gray-900 text-white border-gray-900/50 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my Work</span>
            <FaArrowDownLong className="w-3 h-3"/>
          </button>
          <button className="glass px-6 h-12 inline-flex items-center gap-2">
            <span>👋🏼</span>
            <span>Let&apos;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
