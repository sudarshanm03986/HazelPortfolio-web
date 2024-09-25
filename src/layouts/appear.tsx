import {motion, useAnimation, useInView} from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    children : JSX.Element,
    width?: "fit-content" | "100%"

}

const Appear = ({children, width} : Props) => {

    //code
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const animationControl = useAnimation();

    useEffect(()=> {

        if (isInView) {
                animationControl.start("visible")    
        }

    },[isInView])



    return (<div 
            ref={ref}
            style={{position: "relative", width: width}}
            >
        <motion.div
            variants={{
                hidden : {y:75, opacity:0},
                visible: {y:0 , opacity:1}
            }}
            initial="hidden"
            animate={animationControl}
            transition={{
                duration:0.5,
                delay:0.25
            }}>

            {children}

        </motion.div> 
    </div> );
}
 
export default Appear;