import Appear from "../layouts/appear";
import Screen from "../layouts/screen";
import { PiMouseScroll } from "react-icons/pi";

import  {motion} from "framer-motion";

const Home = () => {
    return ( 
        <div id="Home">
            <Screen>
                <div className="flex h-[100vh] w-full items-center justify-center flex-col">
                    <div>
                    <Appear>
                    <h1 className="text-[7rem] leading-none uppercase">Hazel Anne de Paz</h1>
                    </Appear>

                    <Appear>
                    <h1 className="text-gray-400 font-thin text-right py-2 px-5 text-4xl font-">Portfolio</h1>
                    </Appear>
                    </div>
                    
                    <div className="absolute bottom-10">
                    <Appear>
                        <motion.div
                        initial={{y:0}}
                        animate={{y:[0, -20, 0]}}
                        transition={{duration:1, repeat:Infinity, ease:"easeInOut", bounce:0.5}}
                        >
                        <div className="flex flex-col items-center justify-center text-gray-400 gap-2">
                        <p>Scroll down to see my work</p>
                        <PiMouseScroll className="text-3xl"/>
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