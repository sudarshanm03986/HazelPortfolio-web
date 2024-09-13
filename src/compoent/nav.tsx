
import { motion }from "framer-motion";
// import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";



let tabs = [
    {id : "#Home", name :"Home", label: <FaHome/>},
    {id : "#Project", name:"Project", label: <MdWork/>},
    {id : "#Contact", name:"Contact", label: <RiContactsFill/>},

]

const Nav = (props:any) => {
  // const { scrollYProgress } = useScroll();

  return (
    <div className="flex items-center justify-center flex-col gap-3 space-x-1 w-fit p-2">
      {tabs.map((tab, index) => (
        <div key={tab.id} className="flex items-center flex-col group">
          {index !== 0 && (
            <div className=" h-20 w-1 rounded-full bg-gray-400 mb-2 "  />
            
          )}
          <a
            href={tab.id}
            className={`${
              props.activeSection === tab.name
                ? "text-black"
                : "hover:text-black text-gray-400"
            } relative rounded-full p-3 font-medium duration-300 transition focus-visible:outline-2 text-4xl`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {props.activeSection === tab.name && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 border-[3px] rounded-full border-black mix-blend-difference"
                transition={{ type: "spring", bounce: 0.1, duration: 0.8 }}
              />
            )}
            {tab.label}
          </a>
        </div>
      ))}
    </div>
  );
  
}
 
export default Nav;
