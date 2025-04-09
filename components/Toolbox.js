import { Fragment } from "react";

function Toolbox({ tool,animate='' }) {
  return (
    <div className="flex mt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex gap-6 flex-none py-0.5 ${animate}`}>
        {[...new Array(2)].fill(0).map((_,i)=><Fragment key={i}>
        {tool.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-2 py-2 px-3 outline-2 outline-gray-900/25 rounded-lg"
          >
            <span>{item.icon}</span>
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
        </Fragment>)}
        
      </div>
    </div>
  );
}

export default Toolbox;
