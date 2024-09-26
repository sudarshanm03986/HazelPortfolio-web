import Appear from "../layouts/appear";
import Screen from "../layouts/screen";

import Pic from "./../assets/dp.jpeg";

import AraPic from "./../assets/Ara-Landscape-Logo.png";
import ApPic from "./../assets/AP Design_new_trans-bg.webp";




const About = () => {
    return ( <div id="About">
        <Screen>

        <div className="flex items-center flex-col justify-center h-screen gap-2">

            <Appear>
                <img src={Pic}  className="rounded-full sm:w-40  w-32"/>
            </Appear>
            <Appear>
                <div>
                <h1 className="sm:text-2xl text-xl text-center p-3">Hi it's <strong>Hazel</strong></h1>
                <p className="font-semibold sm:text-[1rem] text-sm">I am graduated in Architecture Technology</p>
                </div>
            </Appear>
            
            {/* EDUCATION */}
            <div className=" p-2  sm:w-[500px] w-full h-fit ">
                <div className="flex items-center gap-2">
                <Appear>
                    <h1 className="font-semibold">Qualification</h1>
                </Appear>
                <Appear width="100%" >
                <div className=" bg-black w-full h-1 rounded" ></div>
                </Appear>
               
                </div>
                
                <Appear>
                <div className=" bg-gradient-to-r from-blue-400 to-purple-400 rounded p-2 flex  justify-between shadow-sm h-16">
                <div className="flex flex-col justify-center sm:gap-2">
                <p className="text-white  sm:text-[1rem] text-sm"><strong>Ara Intitute</strong> - Architecture Technology</p>
                <p className="text-gray-700  sm:text-[1rem] text-sm ">2020 - 2024</p>
                </div>
               

                <div className="h-full flex items-center">
                <img src={AraPic} className=" w-28 	grayscale-[100%]  brightness-0  invert" />
                
                </div>
               

                </div>
                </Appear>
                

            </div>


            {/* Experience */}

            <div className=" p-2  sm:w-[500px] w-full h-fit  ">
                <div className="flex items-center gap-2">
                    <Appear>
                        <h1 className="font-semibold">Experience</h1>
                    </Appear>
                    <Appear width="100%" >
                        <div className=" bg-black w-full h-1 rounded" ></div>
                    </Appear>
               
                </div>

                <Appear>
                <div className=" bg-gradient-to-r from-blue-400 to-blue-950 rounded p-2 flex  justify-between shadow-sm h-16">
                <div className="flex flex-col justify-center sm:gap-2">
                <p className="text-white sm:text-[1rem] text-sm"><strong>AP Design</strong> - Architect & Architectural Design</p>
                <p className="text-gray-700 sm:text-[1rem] text-sm">2024</p>
                </div>
               

                <div className="h-full flex items-center">
                <img src={ApPic} className=" h-[90%]" />
                
                </div>
               

                </div>
                </Appear>

            </div>



        </div>

        </Screen>

    </div> );
}
 
export default About;

