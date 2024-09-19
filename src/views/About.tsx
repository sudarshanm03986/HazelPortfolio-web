import Appear from "../layouts/appear";
import Screen from "../layouts/screen";

import Pic from "./../assets/dp.jpeg";

import AraPic from "./../assets/Ara-Landscape-Logo.png";


const About = () => {
    return ( <div id="About">
        <Screen>

        <div className="flex items-center flex-col justify-center h-screen gap-2">

            <Appear>
            <img src={Pic}  className="rounded-full w-40"/>
            </Appear>
            <Appear>
            <h1 className="text-2xl text-center p-3">Hi it's <strong>Hazel</strong></h1>
            <p className="font-semibold">I am graduated in Architecture Technology</p>
            </Appear>
            <p></p>

            <div className=" p-2  w-[500px] h-fit ">
                <div className="flex items-center gap-2">
                <h1 className="font-semibold">Education</h1>
                <div className=" bg-black w-full h-1 rounded" />
                </div>
                
                <div className=" bg-gradient-to-r from-blue-400 to-purple-400 rounded p-2 flex  justify-between shadow-sm h-16">
                <div className="flex flex-col justify-center gap-2">
                <p className="text-white"><strong>Ara Intitute</strong> - Architecture Technology</p>
                <p className="text-gray-700">2020 - 2024</p>
                </div>

                <div className="h-full flex items-center">
                <img src={AraPic} className=" w-28 	grayscale-[100%]  brightness-0  invert" />
                
                </div>

                </div>
                

            </div>
        </div>

        </Screen>

    </div> );
}
 
export default About;

