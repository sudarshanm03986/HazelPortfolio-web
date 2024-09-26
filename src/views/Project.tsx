import Appear from "../layouts/appear";
import Screen from "../layouts/screen";


import {project} from "../data/projectData";
import Card from "../layouts/card";

const Project = () => {
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
                    <div className="">
                        
                        {project.map((data, index) => (
                            
                            <Card id={index} data={data}  />
                            
                        ) )}

                    </div>
                    </Appear>
                   

              




            </div>
       </div>
        
    </Screen></div> );
}
 
export default Project;