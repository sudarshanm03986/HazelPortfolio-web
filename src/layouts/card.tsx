import { SetStateAction, Dispatch } from 'react';
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

    const opacity = useTransform(x, [-250, 0, 250], [0, 1, 0])
    

    const handleDragEnd = () => {

        if (Math.abs(x.get()) > 50) {
            setData(allData)

        }

    }



    return ( 

    
        <motion.div  
            className={" h-[700px] w-[900px] rounded-2xl p-5 sm:p-10 relative shadow-2xl cursor-grab active:cursor-grabbing"} 
            style={{backgroundColor: data.color,
                gridRow:1,
                gridColumn:1,
                x,
                opacity
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
            
         


            <div className="flex flex-col-reverse justify-end sm:flex-row w-full h-full gap-5">

                <div className='flex flex-col sm:items-center justify-center sm:w-[30%]'>
                <h1 className="text-center sm:text-4xl  text-xl pb-6 ">{data.title}</h1>
                        <p>{data.description}</p>
                        <a className=' underline text-gray-200 hover:invert duration-300 p-2' href={data.link}>View More</a>
                </div>

                <div className="sm:w-[90%] sm:h-full h-[40%] overflow-hidden rounded-2xl">
                    <img src={data.src} className="w-full h-full object-cover object-left-top  select-none pointer-events-none" />
                </div>



            </div>


       




    </motion.div>);
}
 
export default Card;