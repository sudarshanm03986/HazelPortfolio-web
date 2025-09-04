// import Appear from "../layouts/appear";
import Screen from "../layouts/screen";

import { useAnimate , motion} from "framer-motion";
import {project} from "../data/projectData";
import Card from "../layouts/card";
import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Appear from "../layouts/appear";
// import { useScroll } from "framer-motion";


interface ProjectObject {

    title : string
    description: string
    src: string
    link: string
    color: string

}

const Project = () => {

    const [Data, setData] = useState<ProjectObject[]>(project);

    const [scope, animate] = useAnimate();

    const handleNext = async() => {

        let lastIndex = Data.length-1;
        await animate(`#card${lastIndex}`, {rotate:"0"});
        await animate(`#card${lastIndex}`, {y: "-100vh"}, {delay:0.25, duration: 0.5});
           // Remove the last card and reset Data if empty
    setData((prevData) => {
       
  
        if (Data.length === 1) {
          return project; // Reset to initial project list
        } else {
            const newData = prevData.filter((v) => v.title !== prevData[lastIndex].title);
            return newData;

        }
  
        
      });
    };
  
    // Reset the position of all cards when Data is reset to the original list
    useEffect(() => {
      if (Data.length === project.length) {
        // Animate all cards to reset their y position to 0 when Data is reset
        Data.forEach((_, index) => {
          animate(`#card${index}`, { y: ["-90vh", 0], opacity:[0, 1]}, { duration: 0.5, delay: index * 0.1 +0.5 });
        });
      }
    }, [Data, animate]);



        



    return ( <div id="Project"> 
        
        <Screen>
        <div className="animation">
            <div className="w-full flex flex-col sm:grid sm:grid-cols-2 sm:justify-center gap-5 h-screen">
                
         

                
                    
              
                    <div ref={scope} className=" grid sm:h-full h-fit relative pb-28 pt-2 place-items-center sm:p-5 w-full ">
                        
                        {Data.map((data, index) => {

                            
                           return <Card id={index} data={data} allData={Data} setData={setData} fullData={project} animation={animate} />
                            
 }                       )}

                        <div className="absolute sm:bottom-10 bottom-0 flex flex-col items-center gap-2">
                        <p className="text-secondary sm:text-[1rem] text-sm text-center">Drag the picture to side or press the arrow below for next project</p>
                        <button onClick={handleNext} className=" sm:text-4xl text-xl text-fadeGray hover:text-primary duration-300"><FaArrowCircleRight/></button>
                        </div>
                    </div>
            
                    <div className="w-full flex justify-center flex-col items-center">
                      <Appear>
                        <div className="flex flex-col justify-center items-center">
                        <motion.h1 className="sm:text-2xl text-xl text-primary"

                        variants={{
                            "hidden" : {y:"-100%", opacity: 0},
                            "visible" : {y:"0" , opacity: 1},
                            "exit" : {y:"100%", opacity:0}
                        }}

                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{
                            duration: 0.5
                        }}

                        key={Data[Data.length -1].title}
                        
                        >{Data[Data.length -1].title }</motion.h1>
                        <motion.p  
                        className="text-center"
                        variants={{
                            "hidden" : {x:"100%", opacity: 0},
                            "visible" : {x:"0" , opacity: 1},
                            "exit" : {x:"-100%", opacity:0}
                        }}

                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{
                            duration: 0.5
                        }}
                        
                        key={Data[Data.length -1].description }
                        
                        >{Data[Data.length -1].description }</motion.p>
                        <motion.a className="underline text-link hover:text-black duration-300" href={ Data[Data.length -1].link}
                        target="_blank"
                        variants={{
                            "hidden" : {y:"100%", opacity: 0},
                            "visible" : {y:"0" , opacity: 1},
                            "exit" : {y:"-100%", opacity:0}
                        }}

                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{
                            duration: 0.5
                        }}
                        key={"link"}
                        
                        >link</motion.a>
                        </div>
                        </Appear>

                    </div>
                    
                   

              




            </div>
       </div>
        
    </Screen></div> );
}
 
export default Project;