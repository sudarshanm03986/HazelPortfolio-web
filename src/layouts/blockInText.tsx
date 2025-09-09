import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface props {


    example: string[]
  
}

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5; 
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;


const BlockInTextCard = ({example} : props ) => {

    const [exampleIndex, setExampleIndex] = useState(0);


    // The useEffect hook to handle the interval for changing the example text
    useEffect(() => {
        const intervalID = setInterval(() => {
            setExampleIndex((prevIndex) => (prevIndex + 1) % example.length);

        }, SWAP_DELAY_IN_MS);


        return () => clearInterval(intervalID); // Cleanup on unmount

     }, []);


    return ( 
        < >

            
            {example[exampleIndex].split("").map((l, i) => {
                return <motion.span 
                            initial={{opacity: 1}}
                            animate={{opacity: 0}}
                            transition={{
                                delay: FADE_DELAY,
                                duration: MAIN_FADE_DURATION,
                                ease: "easeInOut"
                            }}
                        className=" relative"
                        key={`${exampleIndex}-${i}`}>

                            <motion.span
                             initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{
                                  
                                    delay: i * LETTER_DELAY,
                                    duration: 0,
                                   
                                }}
                            
                            >{l}</motion.span>

                            <motion.span
                                initial={{opacity: 0}}
                                animate={{opacity: [0, 1, 0]}}
                                transition={{
                                    times : [0, 0.1, 1],
                                    delay: i * LETTER_DELAY,
                                    duration: BOX_FADE_DURATION,
                                    ease: "easeInOut"
                                }}

                                className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
                            />
                    
                        </motion.span>
            })}


        </>
     );
}
 
export default BlockInTextCard;