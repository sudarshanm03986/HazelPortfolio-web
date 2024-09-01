
import { motion } from "framer-motion";
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
 


    console.log(props.activeSection)

    return ( <div className="flex items-center justify-center flex-col gap-6 space-x-1 w-fit p-2 ">
      {tabs.map((tab) => (
        <a
          href={tab.id}
        //   onClick={() => setActiveTab(tab.id)}
          className={`${
            props.activeSection === tab.name ? "" : "hover:text-gray-400"
          } relative rounded-full p-3 font-medium  text-black outline-sky-400 transition focus-visible:outline-2 text-4xl`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {props.activeSection  === tab.name && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 border-[3px] rounded-full border-black mix-blend-difference"
            //   style={{ border: 1 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.8 }}
            />
          )}
          {tab.label}
        </a>
      ))}
    </div> );
}
 
export default Nav;
