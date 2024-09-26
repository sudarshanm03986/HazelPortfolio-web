
import {motion}from 'framer-motion';
import { useTransform } from "framer-motion"

interface Project {

    title : string
    descripttion: string
    src: string
    link: string
    color: string

}

interface Props {

    id: number,
    data: Project,
    targetScale: number,
    progress:any,
    range: [number, number]
}


const Card = ({id, data, targetScale, progress, range}: Props) => {

    const scale = useTransform(progress, range, [1, targetScale])
    return ( 
    <div className="h-[100vh] flex items-center justify-center sticky top-10" >
    
        <motion.div  
            className={" h-[700px] w-full rounded-2xl p-10 relative "} 
            style={{ scale, backgroundColor: data.color, top:`calc(-10% + ${id * 50}px)`}}>

            <h1 className="text-center text-4xl pb-6 ">{data.title}</h1>


            <div className="flex w-full h-[90%]">

                <div className='flex flex-col items-center justify-center w-[40%]'>
                        <p>{data.descripttion}</p>
                        <a href={data.link}>Link</a>
                </div>

                <div className="w-[60%] h-full overflow-hidden rounded-xl shadow-lg">
                <img src={data.src} className="" />
                </div>



            </div>


       




    </motion.div>  </div>);
}
 
export default Card;