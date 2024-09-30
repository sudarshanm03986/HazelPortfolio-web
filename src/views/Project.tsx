// import Appear from "../layouts/appear";
import Screen from "../layouts/screen";


import {project} from "../data/projectData";
import Card from "../layouts/card";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const Project = () => {


    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target:container,
        offset: ['start start', 'end end']

    })

    return ( <div id="Project"> 
        
        <Screen>
        <div className="py-5 animation">
            <div className="w-full">
                
                    {/* <div className="flex justify-center items-center h-[50vh]">
                   
                    <h1 className=" text-center sm:text-[3rem] text-[2rem]">Some of my work</h1>
                   
                    </div> */}
         

                
                    
              
                    <div ref={container} className="relative">
                        
                        {project.map((data, index) => {

                            const scale = 1 - ((project.length - index)* 0.05);
                            
                           return <Card id={index} data={data} targetScale={scale} range={[(index) * (1/project.length) , 1]}  progress={scrollYProgress}/>
                            
 }                       )}

                    </div>
                    
                   

              




            </div>
       </div>
        
    </Screen></div> );
}
 
export default Project;