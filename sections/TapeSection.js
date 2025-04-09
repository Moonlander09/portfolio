import { Fragment } from "react";
import { FaStar } from "react-icons/fa6";
function TapeSection() {
  const words = [
    "Performant",
    "Accessible",
    "Responsive",
    "Interactice",
    "Scalable",
    "User Friendly",
    "Search Optimized",
    "Usage",
    "Reliable",
    "Maintainable",
    "Secure",
  ];
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-[#f6cfbe] to-[#b9dcf2] -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 text-gray-950/80 move-left">
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {words.map((word) => (
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <FaStar className="-rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TapeSection;
