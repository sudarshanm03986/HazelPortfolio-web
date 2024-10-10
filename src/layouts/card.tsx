import { SetStateAction, Dispatch, useState } from 'react';
import {motion, useMotionValue, useTransform}from 'framer-motion';


interface Project {

    title : string
    description: string
    src: string
    link: string
    color: string

}

interface Props {

    id: number,
    data: Project,
    allData: Project[],
    setData:  Dispatch<SetStateAction<Project[]>>,
    

}


const Card = ({id, data, allData, setData}: Props) => {

    const x = useMotionValue(0);

    const [alignCard, setAlignCard] = useState(false);

    const rotate = useTransform(()=>  {
        const offset = alignCard ? 0 : id === 0 ? 8 : id % 2 ? id : -id;

        return `${offset}deg`
    })

    const opacity = useTransform(x, [-250, 0, 250], [0, 1, 0])
    

    const handleDragEnd = () => {

        if (Math.abs(x.get()) > 250) {
            setData((pv) => pv.filter((v) => v.title !== data.title))

        }

    }



    return ( 

    
        <motion.div 
            onMouseDown={()=> {setAlignCard(true)}} 
            
            className={" h-fit w-fit rounded-2xl p-2 relative shadow-2xl cursor-grab active:cursor-grabbing active:scale-50"} 
            style={{backgroundColor: data.color,
                gridRow:1,
                gridColumn:1,
                x,
                opacity,
                rotate,
                transition: "0.125s transform"
            }}
            
            
            drag
            dragConstraints={{
                left:0,
                right:0,
                top:0,
                bottom:0
            }}

            onDrag={handleDragEnd}
            >
            
         




               

                <div className="h-fit max-h-[500px] w-fit max-w-[500px] overflow-hidden rounded-2xl">
                    <img src={data.src} className=" object-scale-down  max-h-full object-left-top select-none pointer-events-none" />
                </div>





       




    </motion.div>);
}
 
export default Card;