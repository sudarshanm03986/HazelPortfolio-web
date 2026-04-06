import Appear from "../layouts/appear";
import Screen from "../layouts/screen";

import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";

// import Pic from "./../assets/dp.jpeg";

// import AraPic from "./../assets/Ara-Landscape-Logo.png";
// import ApPic from "./../assets/AP Design_new_trans-bg.webp";
// import DgPic from "./../assets/digital_simple_logo.jpeg"
import UcPic from "./../assets/UCRed_RGB.png"
import ThPic from "./../assets/THE-HUT-LOGO_JULY-2024_V2_SML (1).png"
import PPpic from "./../assets/PixelPalsLogo.png";



const About = () => {
    return ( <div id="About" className="pt-10">
        <Screen>

        <div className="flex items-center flex-col justify-center h-screen gap-2">
            <div className=" flex flex-col gap-3 ">

            <div className=" col-span-2">
            <Appear>
                <div className="flex flex-col gap-2 p-2">
                <h1 className="sm:text-2xl text-2xl sm:text-left text-center  text-primary">About me</h1>
                <p className="font-semibold sm:text-[1rem] text-xs ">Hi, I’m Sudarshan Malla. I’m a Computer Science graduate from the University of Canterbury and a passionate web and app developer. I love creating clean, user-friendly designs that blend functionality with great user experience.<br/><br/>

                Over the years, I’ve worked on personal and community projects ranging from websites to mobile apps, using technologies like React, TypeScript, Tailwind, and React Native. I enjoy taking on challenges where I can combine creativity and problem-solving to bring ideas to life.
                <br/><br/>
                When I’m not coding, you’ll probably find me at the gym, cycling, running, taking photo or exploring the outdoors. I believe the best projects come from curiosity, teamwork, and a drive to keep learning.</p>
                </div>
            </Appear>

            </div>

             {/* Experience */}

            <div className=" p-2   w-full h-fit col-span-2 ">
                <div className="flex items-center gap-2">
                    <Appear>
                        <h1 className="font-semibold">Experience</h1>
                    </Appear>
                    <Appear width="100%" >
                        <div className=" bg-black w-full h-1 rounded" ></div>
                    </Appear>
               
                </div>
                <div className=" flex flex-col gap-2">

                <Appear>
                <div className="bg-gradient-to-r from-yellow-400  to-purple-500 rounded p-2 flex  justify-between shadow-sm sm:h-28 h-16">
                <div className="flex flex-col justify-center sm:gap-2">
                <p className="text-white sm:text-[1rem] text-xs"><strong>Pixel Pals</strong> -  IT Specialist & Consultant </p>
                <p className="text-gray-100 sm:text-[1rem] text-xs">2024 - Present</p>
                </div>
               

                <div className="h-full flex items-center">
                <img src={PPpic} className=" h-[70%] 	" />
                
                </div>
               

                </div>
                </Appear>
                <Appear>
                <div className="  bg-blue-950 rounded p-2 flex  justify-between shadow-sm sm:h-28 h-16">
                <div className="flex flex-col justify-center sm:gap-2">
                <p className="text-white sm:text-[1rem] text-xs"><strong>Genx Country</strong> - Contract Web Developer</p>
                <p className="text-gray-200 sm:text-[1rem] text-xs"> Jun - Aug 2025</p>
                </div>
               

                <div className="h-full flex items-end">
                <img src={ThPic} className=" sm:h-16 h-12	" />
                
                </div>

                
               

                </div>
                </Appear>

              
                </div>

            </div>



            {/* EDUCATION */}
            <div className=" p-2 w-full h-fit col-span-2 ">
                <div className="flex items-center gap-2 h-fit">
                <Appear>
                    <h1 className="font-semibold">Qualification</h1>
                </Appear>
                <Appear width="100%" >
                <div className=" bg-black w-full h-1 rounded" ></div>
                </Appear>
               
                </div>
                
                <Appear>
                <div className=" bg-red-700 rounded p-2 flex  justify-between shadow-sm sm:h-28 h-16">
                <div className="flex flex-col justify-center sm:gap-2">
                <p className="text-white  sm:text-[1rem] text-xs"><strong>University of Canterbury</strong> - BCs</p>
                <p className="text-gray-200  sm:text-[1rem] text-xs">2020 - 2024</p>
                </div>
               

                <div className="h-full flex items-center">
                <img src={UcPic} className=" h-full	grayscale-[100%]  brightness-0  invert" />
                
                </div>
               

                </div>
                </Appear>


                
                

            </div>


      


            <div className="flex flex-col">
                <h1 className="text-primary text-center sm:text-xl text-lg">Check out the pics & vids!!</h1>
            <div className="flex justify-center gap-4 ">

                <a target="_blank" href="https://www.instagram.com/_by_suda_/" className="text-4xl text-fadeGray hover:text-primary duration-300 h-fit"><FaInstagram/></a>
                <a target="_blank" href="https://www.youtube.com/@by_suda" className="text-4xl text-fadeGray hover:text-red-600 duration-300 h-fit"><LuYoutube/></a>
                
            </div>

            </div>
            

            </div>
            
            


            



        </div>

        </Screen>

    </div> );
}
 
export default About;

