import Appear from "../layouts/appear";
import Screen from "../layouts/screen";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


import CV from "./../assets/Main SUDA CV (4).pdf"


let links = [
    {icon: <FaLinkedin />, name:"Linkedin", message:"View my profile", type:"link" , link:"https://www.linkedin.com/in/sudarshan-malla-113278151/"},
    {icon: <MdEmail/>, name:"Email", message:"Flick me an email", type:"email", link:"sudarshanm03986@gmail.com"},
    {icon: <FaFilePdf />, name:"PDF", message:"Check out my resume", type:"link", link:CV}
]


const Contact = () => {




    return ( <div id="Contact">
        
        <Screen>
        <div className="py-5 flex flex-col items-center justify-center gap-5 h-screen relative">
        <Appear>
            <h1 className="sm:text-3xl text-xl text-primary">Let get in touch!</h1>
        </Appear>

        <div className={`sm:w-[300px] w-[250px] grid  grid-rows-${links.length} gap-4`} >

            {links.map((link)=> (

                <Appear>
                    <a   target={link.link.includes("@") ? undefined : "_blank"}
                        rel={link.link.includes("@") ? undefined : "noopener noreferrer"} 
                        href={link.type === 'email' ?  `mailto:${link.link}`: link.link} className="hover:bg-secondary duration-500 bg-fadeGray group p-2 rounded-lg sm:h-16 h-12 flex items-center justify-between  w-full shadow-sm">
                        <p className="sm:text-3xl text-2xl text-white duration-300">{link.icon}</p>
                        <div className="text-right">
                        <p className="sm:text-[1rem] text-[0.8rem] font-semibold text-white  duration-300">{link.message}</p>
                        <p className=" sm:text-[1rem] text-[0.8rem]  text-gray-300 duration-300">{link.name}</p>
                        </div>



                    </a>
                </Appear>
            ))}


        </div>
        <div className="absolute bottom-5 ">
        <Appear>
            <div className="flex justify-center items-center gap-2 sm:text-lg text-sm bg-fadeGray text-white py-1 px-2 rounded-lg shadow-sm">
            <MdEmail/>
                <p>sudarshanm03986@gmail.com</p>
            </div>
        </Appear>
        </div>
        </div>
        
    </Screen>   </div>);
}
 
export default Contact;