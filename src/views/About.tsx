import Appear from "../layouts/appear";
import Screen from "../layouts/screen";

import Pic from "./../assets/dp.jpeg";

// import AraPic from "./../assets/Ara-Landscape-Logo.png";
// import ApPic from "./../assets/AP Design_new_trans-bg.webp";
import DgPic from "./../assets/digital_simple_logo.jpeg"
import UcPic from "./../assets/UCRed_RGB.png"




const About = () => {
    return ( <div id="About">
        <Screen>

        <div className="flex items-center flex-col justify-center h-screen gap-2">

            <Appear>
                <img src={Pic}  className="rounded-full sm:w-40    w-32"/>
            </Appear>
            <Appear>
                <div>
                <h1 className="sm:text-2xl text-xl text-center p-3">Hi it's <strong className="text-primary">Suda</strong></h1>
                <p className="font-semibold sm:text-[1rem] text-sm">I am a Computer Science gradute.</p>
                </div>
            </Appear>
            
            {/* EDUCATION */}
            <div className=" p-2  sm:w-[500px] w-full h-fit ">
                <div className="flex items-center gap-2 h-fit">
                <Appear>
                    <h1 className="font-semibold">Qualification</h1>
                </Appear>
                <Appear width="100%" >
                <div className=" bg-black w-full h-1 rounded" ></div>
                </Appear>
               
                </div>
                
                <Appear>
                <div className=" bg-red-700 rounded p-2 flex  justify-between shadow-sm h-28">
                <div className="flex flex-col justify-center sm:gap-2">
                <p className="text-white  sm:text-[1rem] text-sm"><strong>University of Canterbury</strong> - BCs</p>
                <p className="text-gray-200  sm:text-[1rem] text-sm ">2020 - 2024</p>
                </div>
               

                <div className="h-full flex items-center">
                <img src={UcPic} className=" h-full	grayscale-[100%]  brightness-0  invert" />
                
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
                <div className="  bg-black  rounded p-2 flex  justify-between shadow-sm h-28">
                <div className="flex flex-col justify-center sm:gap-2">
                <p className="text-white sm:text-[1rem] text-sm"><strong>Digital Simple ? </strong></p>
                <p className="text-gray-200 sm:text-[1rem] text-sm">2025</p>
                </div>
               

                <div className="h-full flex items-end">
                <img src={DgPic} className=" h-full 	" />
                
                </div>
               

                </div>
                </Appear>

            </div>



        </div>

        </Screen>

    </div> );
}
 
export default About;

