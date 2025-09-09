import Appear from "../layouts/appear";
import Screen from "../layouts/screen";
import { PiMouseScroll } from "react-icons/pi";

import  {motion} from "framer-motion";
import BlockInTextCard from "../layouts/blockInText";



const Home = () => {
    return ( 
        <div id="Home">
            <Screen>
                <div className="flex h-[100vh] w-full items-center justify-center flex-col">

                    
    
            <Appear>
                <div>
                <h1 className="sm:text-5xl text-5xl text-center p-3">Hi, my name is <strong className="text-primary">SUDA</strong></h1>
                <p className="font-semibold sm:text-[1rem] text-sm text-center"><BlockInTextCard 

                 
                   

                    example={[

                    "I'm a Web Developer",
                    "I'm a Full-Stack Developer",
                    "I love coding",
                    "I build web applications"]}

                /></p>
                
                
                </div>
            </Appear>
                    {/* <div>
                    <Appear>
                    <h1 className="sm:text-[7rem] text-3xl leading-none uppercase text-primary">Suda's</h1>
                    </Appear>

                    <Appear>
                    <h1 className=" text-secondary font-thin text-right py-2 px-5 sm:text-4xl  font-">Portfolio</h1>
                    </Appear>
                    </div> */}

                    
                    <div className="flex sm:flex-row flex-col gap-5 mt-5">
                    <Appear>
                    <a href="#Project" className="mt-5">
                    <button className=" text-secondary hover:text-primary duration-300">See My Work</button>
                    </a>
                    </Appear>
                   

                    <Appear>
                    <a href="#About" className="mt-5">
                    <button className=" text-secondary hover:text-primary duration-300">About Me</button>
                    </a>
                    </Appear>
                    </div>
                    
                    
                    <div className="absolute bottom-10">
                    <Appear>
                        <motion.div
                        initial={{y:0}}
                        animate={{y:[0, -20, 0]}}
                        transition={{duration:1, repeat:Infinity, ease:"easeInOut", bounce:0.5}}
                        >
                        <div className="flex flex-col items-center justify-center text-fadeGray gap-2">
                        <p className="sm:text-[1rem] text-sm">Scroll down to see my work</p>
                        <PiMouseScroll className="sm:text-3xl"/>
                        </div>

                        </motion.div>

                        </Appear>
                    </div>
                    
                </div>

        </Screen>
        </div>


    );
}
 
export default Home;