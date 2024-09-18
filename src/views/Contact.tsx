import Appear from "../layouts/appear";
import Screen from "../layouts/screen";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


import CV from "./../assets/react.svg"


let links = [
    {icon: <FaLinkedin />, name:"Linkedin", message:"View my profile", type:"link" , link:"https://www.linkedin.com/in/hazel-anne-de-paz-20aa8a268/"},
    {icon: <MdEmail/>, name:"Email", message:"Flick me an email", type:"email", link:"hazelannedepaz@yahoo.co.nz"},
    {icon: <FaFilePdf />, name:"PDF", message:"Check out my resume", type:"link", link:CV}
]


const Contact = () => {




    return ( <div id="Contact">
        
        <Screen>
        <div className="py-5 flex flex-col items-center justify-center gap-5 h-screen relative">
        <Appear>
            <h1 className="text-3xl">Let get in touch!</h1>
        </Appear>

        <div className={`w-[300px] grid  grid-rows-${links.length} gap-4`} >

            {links.map((link)=> (

                <Appear>
                    <a target="_blank" href={link.type === 'email' ? "mailto: " + link.link : link.link} className="hover:bg-black duration-500 bg-gray-300 group p-2 rounded-lg h-16 flex items-center justify-between  w-full shadow-sm">
                        <p className="text-3xl group-hover:text-white duration-300">{link.icon}</p>
                        <div className="text-right">
                        <p className="font-semibold group-hover:text-white  duration-300">{link.message}</p>
                        <p className="text-gray-600 group-hover:text-gray-300 duration-300">{link.name}</p>
                        </div>



                    </a>
                </Appear>
            ))}


        </div>
        <div className="absolute bottom-5 ">
        <Appear>
            <div className="flex justify-center items-center gap-2 text-lg bg-gray-300 py-1 px-2 rounded-lg shadow-sm">
            <MdEmail/>
                <p>hazelannedepaz@yahoo.co.nz</p>
            </div>
        </Appear>
        </div>
        </div>
        
    </Screen>   </div>);
}
 
export default Contact;