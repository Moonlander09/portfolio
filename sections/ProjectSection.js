import Image from "next/image";
import futureInk from "../public/FutureInk.png";
import appleCart from "../public/AppleCart.png";
import keeper from "../public/Keeper.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaUpRightFromSquare } from "react-icons/fa6";
import SectionHeader from "@/components/SectionHeader";

function ProjectSection() {
  const portfolio = [
    {
      company: "FutureInk",
      year: "2025",
      title: "AI powered blog generator",
      results: [
        { title: "Enhanced user experience by 30%" },
        { title: "Improved site speed by 20%" },
        { title: "Increase mobile traffic by 25%" },
      ],
      link: "https://future-ink.vercel.app",
      image: futureInk,
    },
    {
      company: "AppleCart",
      year: "2025",
      title: "Your one-stop shop for Apple products",
      results: [
        { title: "Boosted sales by 20%" },
        { title: "Expanded customer reach by 35%" },
        { title: "Increased brand awareness by 15%" },
      ],
      link: "https://apple-cart-chi.vercel.app",
      image: appleCart,
    },
    {
      company: "Keeper",
      year: "2024",
      title: "Your Ultimate digital Notes",
      results: [
        { title: "Enhanced user experience by 10%" },
        { title: "Boosted sales by 25%" },
        { title: "Increase mobile traffic by 45%" },
      ],
      link: "https://keeper-app-tasks.vercel.app",
      image: keeper,
    },
  ];
  return (
    <section className="pb-16 lg:py-24">
      <div className="container p-2 md:p-4 lg:max-w-5xl sm:mx-auto">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description=" See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolio.map((project,i) => (
            <div
              className="glass-box px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 overflow-hidden sticky " style={{top:`calc(64px + ${i*40}px)`}}
              key={project.title}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-[#732e10] to-[#1b6390] uppercase font-bold tracking-widest text-sm inline-flex text-transparent bg-clip-text gap-2 ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 mt-4 md:mt-5 border-gray-900/30" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm items-center md:text-base"
                      >
                        <FaRegCheckCircle />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="glass inline-flex gap-2 h-12 w-full md:w-auto px-6 font-semibold rounded-xl justify-center items-center mt-8">
                      <FaUpRightFromSquare />
                      <span>View Live Site</span>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 glass-border md:-mb:0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
