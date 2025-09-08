import { useEffect, useState } from "react";

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
        <p className="">

            <span className="inline-block size-2 bg-neutral-950"/>
            <span className="ml=3" />
            {example[exampleIndex]}


        </p>
     );
}
 
export default BlockInTextCard;