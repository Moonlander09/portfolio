import { FaStar } from "react-icons/fa6";
 
function CardHeader({ title, desc, cl="" }) {
  return (
    
      <div className={`${cl} ? "flex flex-col":"flex flex-col  ${cl}"`}>
        <div className="inline-flex items-center gap-2">
          <FaStar />
          <h3 className="text-3xl">{title}</h3>
        </div>
        <p className="mt-2 text-sm lg:text-base lg:max-w-md">{desc}</p>
      </div>
    
  );
}

export default CardHeader;
