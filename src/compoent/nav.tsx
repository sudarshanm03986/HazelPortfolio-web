import { motion }from "framer-motion";
// import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";



let tabs = [
    {id : "#Home", name :"Home", label: <FaHome/>},
    {id : "#About", name :"About", label: <RiProfileLine/>},
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
            <motion.div
            
            variants={{
              hidden: {x: 150},
              visible: {x: 0}
            }}
            initial="hidden"
            animate="visible"
            transition={{duration:0.5 , delay:0.25*(index - 0.5), type: "spring"}}
            className=" sm:h-20 sm:w-1 h-10  w-[3px] rounded-full bg-fadeGray mb-2 "  />
            
          )}
          <a
            href={tab.id}
            className={`${
              props.activeSection === tab.name
                ? "text-primary"
                : "hover:text-primary text-fadeGray"
            } relative rounded-full sm:p-3 p-2 font-medium duration-300 transition focus-visible:outline-2 sm:text-4xl text-xl `}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {props.activeSection === tab.name && (
              
              <motion.span
              
                layoutId="bubble"
                className="absolute inset-0 z-10 sm:border-[3px]  border-[2.5px] rounded-full border-primary mix-blend-difference"
                transition={{ type: "spring", bounce: 0.1, duration: 0.8 }}
              />
            )}
            <motion.div 
            variants={{
              hidden: {x: 150},
              visible: {x: 0}
            }}
            initial="hidden"
            animate="visible"
            transition={{duration:0.5 , delay:0.25*index, type: "spring"}}
            
            >{tab.label}</motion.div>
          </a>
        </div>
      ))}
    </div>
  );
  
}
 
export default Nav;