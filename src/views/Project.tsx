// import Appear from "../layouts/appear";
import Screen from "../layouts/screen";


import {project} from "../data/projectData";
import Card from "../layouts/card";
import { useEffect, useRef, useState } from "react";
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
            <div className="w-full grid grid-cols-2 justify-center gap-5 h-screen">
                
         

                
                    
              
                    <div ref={container} className=" grid place-items-center p-5 ">
                        
                        {Data.map((data, index) => {

                            
                           return <Card id={index} data={data} allData={Data} setData={setData} />
                            
 }                       )}

                    </div>

                    <div className="w-full flex justify-center flex-col items-center">
                      
                        <h1 className="text-2xl">{Data[Data.length -1].title }</h1>
                        <p>{Data[Data.length -1].description }</p>
                        <a  href={Data[Data.length -1].link}>link</a>
                        

                    </div>
                    
                   

              




            </div>
       </div>
        
    </Screen></div> );
}
 
export default Project;