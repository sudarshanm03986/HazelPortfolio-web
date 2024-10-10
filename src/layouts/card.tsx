import { SetStateAction, Dispatch, useState} from 'react';
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
    fullData: Project[],
    animation : any

}


const Card = ({id, data, allData, setData, fullData, animation}: Props) => {

    const x = useMotionValue(0);

    const [alignCard, setAlignCard] = useState(false);

    // const [scope, animate] = useAnimate();

    const rotate = useTransform(()=>  {
        const offset = alignCard ? 0 : id === 0 ? 8 : id % 2 ? id : -id;

        return `${offset}deg`
    })

    // const opacity = useTransform(x, [-250, 0, 250], [0, 1, 0])
    

    const handleDragEnd = async() => {

        if (Math.abs(x.get()) > 200) {
            await animation(`#card${id}`, {y : "-80vh"});


            setTimeout(() => {
            // setData((pv) => pv.filter((v) => v.title !== data.title));

            setData((pv) => {
                
          
                if (allData.length === 1) {
                  return fullData; // Reset to initial project list
                } else {
                    
                    const newData = pv.filter((v) => v.title !== data.title);
          
                    return newData; }
              });

            }, 500);

        }

    }

  



    return ( 

        
        <motion.div 
            
            id={'card'+id}
            onMouseDown={()=> {id === allData.length-1 && setAlignCard(true)}} 
            
            
            className={" h-fit w-fit  cursor-grab active:cursor-grabbing active:scale-50  origin-bottom z-10"} 
            style={{
                gridRow:1,
                gridColumn:1,
                x,
                rotate,
                transition: "0.125s transform"
            }}
            
            
            drag='x'
            dragConstraints={{
                left:0,
                right:0,
                top:0,
                bottom:0
            }}

            onDrag={handleDragEnd}
            >
            
         




               
                <div  className='rounded-2xl sm:p-2 p-1 relative shadow-2xl'  style={{backgroundColor: data.color}}>
                <div className=" max-h-[500px] w-fit max-w-[500px] overflow-hidden sm:rounded-lg rounded-xl">
                    <img src={data.src} className=" object-scale-down  max-h-full object-left-top select-none pointer-events-none" />
                </div>
                </div>





       




    </motion.div>
    
    );
}
 
export default Card;