import { FaUpRightFromSquare } from "react-icons/fa6";

function ContactSection() {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container p-2 md:p-4 lg:max-w-5xl sm:mx-auto">
        <div className="glass bg-gradient-to-r from-[#f6cfbe] to-[#b9dcf2] py-8 px-10 rounded-3xl text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>

            <h2 className="text-2xl md:text-3xl">
              Let&apos;s create something amazing together
            </h2>
            <p className="text-sm mt-2 md:text-base ">
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
            </div>
            <div>

            <button className="inline-flex items-center  gap-2 glass bg-gray-900 text-white border-gray-900/50 px-6 h-12 rounded-xl w-max">
              <span className="font-semibold">Contact Me</span>
              <FaUpRightFromSquare />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
