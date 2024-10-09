// import Appear from "../layouts/appear";
import Screen from "../layouts/screen";


import {project} from "../data/projectData";
import Card from "../layouts/card";
import { useRef, useState } from "react";
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


    const container = useRef(null);

    return ( <div id="Project"> 
        
        <Screen>
        <div className="py-5 animation">
            <div className="w-full flex justify-center">
                
                    {/* <div className="flex justify-center items-center h-[50vh]">
                   
                    <h1 className=" text-center sm:text-[3rem] text-[2rem]">Some of my work</h1>
                   
                    </div> */}
         

                
                    
              
                    <div ref={container} className=" grid place-items-center ">
                        
                        {Data.map((data, index) => {

                            
                           return <Card id={index} data={data} allData={Data} setData={setData} />
                            
 }                       )}

                    </div>
                    
                   

              




            </div>
       </div>
        
    </Screen></div> );
}
 
export default Project;