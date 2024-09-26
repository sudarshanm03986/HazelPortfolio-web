import Appear from "../layouts/appear";
import Screen from "../layouts/screen";


import {project} from "../data/projectData";
import Card from "../layouts/card";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const Project = () => {


    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target:container,
        offset: ['start start', 'end end']

    })

    useEffect(() => {
        scrollYProgress.on("change", e => console.log(scrollYProgress))
    },[])


    return ( <div id="Project"> 
        
        <Screen>
        <div className="py-5">
            <div className="w-full">
                
                    <div className="flex justify-center items-center h-[50vh]">
                    <Appear>
                    <h1 className=" text-center text-[5rem]">My works</h1>
                    </Appear>
                    </div>
         

                
                    
                    <Appear>
                    <div ref={container} className="">
                        
                        {project.map((data, index) => {

                            const scale = 1 - ((project.length - index)* 0.05);
                            
                           return <Card id={index} data={data} targetScale={scale} range={[index * (1/project.length) , 1]}  progress={scrollYProgress}/>
                            
 }                       )}

                    </div>
                    </Appear>
                   

              




            </div>
       </div>
        
    </Screen></div> );
}
 
export default Project;