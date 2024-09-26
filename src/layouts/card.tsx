
// import {motion, useScroll} from 'framer-motion';

interface Project {

    title : string
    descripttion: string
    src: string
    link: string
    color: string

}

interface Props {

    id: number,
    data: Project
}


const Card = ({id, data}: Props) => {

    return ( 
    <div className="h-[100vh] flex items-center justify-center sticky top-10" >
    
        <div  
            className={" h-[700px] w-full rounded-2xl p-10 relative "} 
            style={{backgroundColor: data.color, top:`calc(-10% + ${id * 25}px)`}}>

            <h1 className="text-center text-4xl pb-6 ">{data.title}</h1>


            <div className="grid grid-cols-2 w-full h-[90%]">

                <div className='flex flex-col items-center justify-center'>
                        <p>{data.descripttion}</p>
                        <a href={data.link}>Link</a>
                </div>

                <div className="w-full h-full overflow-hidden rounded-xl shadow-lg">
                <img src={data.src} className="" />
                </div>



            </div>


        </div>




    </div>);
}
 
export default Card;