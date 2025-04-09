import SectionHeader from "@/components/SectionHeader";
import user from "../public/user.png";
import Image from "next/image";
import { Fragment } from "react";
function Testimonials() {
  const testimonials = [
    {
      name: "Alex Turner",
      position: "Marketing Manager @ TechStartups",
      text: "MoonLander was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
      avatar: user,
    },
    {
      name: "Olivia Green",
      position: "Head of Design @ GreenLeaf",
      text: "Working with MoonLander was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
      avatar: user,
    },
    {
      name: "Daniel White",
      position: "CEO @ InnovateCo",
      text: "MoonLander's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
      avatar: user,
    },
    {
      name: "Emily Carter",
      position: "Product Manager @ GlobalTech",
      text: "MoonLander is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
      avatar: user,
    },
    {
      name: "Michael Brown",
      position: "Director of IT @ MegaCorp",
      text: "MoonLander's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
      avatar: user,
    },
  ];
  return (
    <div className="py-16 lg:py-24">
      <div className="container p-2 md:p-4 lg:max-w-5xl sm:mx-auto">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none pr-8 gap-8 move">
            {[...new Array(2)].fill(0).map((_,i)=><Fragment key={i}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="glass p-6 md:p-8 overflow-hidden max-w-xs md:max-w-md hover:-rotate-3 transition duration-300"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 rounded-full inline-flex items-center justify-center bg-gray-950/10 flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="size-8"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-950/60">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm md:mt-6 md:text-base">
                  {testimonial.text}
                </p>
              </div>
            ))}
            </Fragment>)}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
