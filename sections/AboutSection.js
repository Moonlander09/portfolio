'use client';

import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

import book from "../public/book-cover.png";
import map from "../public/map.png";
import man from "../public/man.png";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import CardHeader from "@/components/CardHeader";
import Toolbox from "@/components/Toolbox";
import {motion} from 'motion/react'
import { useRef } from "react";

function AboutSection() {
  const refBox = useRef();
  const tool = [
    {
      title: "JavaScript",
      icon: <FaJsSquare />,
    },
    {
      title: "HTML",
      icon: <FaHtml5 />,
    },
    {
      title: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      title: "GitHub",
      icon: <FaGithub />,
    },
    {
      title: "ReactJS",
      icon: <FaReact />,
    },
    {
      title: "NextJS",
      icon: <RiNextjsFill />,
    },
    {
      title: "NodeJS",
      icon: <FaNodeJs />,
    },
    {
      title: "MongoDB",
      icon: <SiMongodb />,
    },
  ];
  const hobbies = [
    {
      title: "Sports",
      emoji: "🏏",
      top: "5%",
      left: "5%",
    },
    {
      title: "Music",
      emoji: "🎵",
      top: "35%",
      left: "25%",
    },
    {
      title: "Reading",
      emoji: "📚",
      top: "65%",
      left: "5%",
    },
    {
      title: "Photography",
      emoji: "📷",
      top: "35%",
      left: "45%",
    },
    {
      title: "DIY",
      emoji: "🛠️",
      top: "65%",
      left: "75%",
    },
    {
      title: "Gaming",
      emoji: "🎮",
      top: "5%",
      left: "75%",
    },
  ];
  return (
    <div className="py-20 lg:py-28">
      <div className="container p-2 md:p-4 lg:max-w-5xl sm:mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more About who I am, What I do and What inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <div className="glass p-6 h-[320px] overflow-hidden md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                desc="Explore the books shaping my perspectives."
              />

              <div className="w-40 mx-auto mt-8 md:mt-4">
                <Image src={book} alt="book" />
              </div>
            </div>
            <div className="glass md:col-span-3 lg:col-span-2 p-0 h-[320px] overflow-hidden">
              <CardHeader
                cl="px-6 pt-6 md:py-6"
                title="ToolBox"
                desc="Explore the technologies and tools, I use to craft expectation
                digital experiences."
              />
              <Toolbox tool={tool} animate="left" />
              <Toolbox tool={tool} animate="right"/>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <div className="glass md:col-span-3 lg:col-span-2 p-0 h-[320px] overflow-hidden flex flex-col">
              <CardHeader
                title="Beyond the Code"
                desc="Explore my interest and hobbies beyond the digital realm."
                cl="px-6 py-6"
              />

              <div className="relative flex-1" ref={refBox}>
                {hobbies.map((h) => (
                  <motion.div
                    key={h.title}
                    className="inline-flex items-center gap-2 py-1.5 px-6 bg-gradient-to-r from-[#f6cfbe] to-[#b9dcf2] rounded-full absolute"
                    style={{
                      left: h.left,
                      top: h.top,
                    }}
                    drag
                    dragConstraints={refBox}
                  >
                    <span className="font-medium">{h.title}</span>
                    <span>{h.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="glass p-0 md:col-span-2 h-[320px] lg:col-span-1 relative overflow-hidden">
              <Image
                src={map}
                alt="book"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full size-20 bg-gray-900/75 flex justify-center items-center">
              <div className="absolute inset-0 rounded-full bg-gray-900/15 -z-20 animate-ping size-20 "></div>
                <Image src={man} alt="user" className="size-14 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
