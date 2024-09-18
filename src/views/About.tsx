import Appear from "../layouts/appear";
import Screen from "../layouts/screen";

import Pic from "./../assets/dp.jpeg"


const About = () => {
    return ( <div id="About">
        <Screen>

        <div className="flex items-center flex-col justify-center h-screen gap-2">

            <Appear>
            <img src={Pic}  className="rounded-full w-40"/>
            </Appear>
            <Appear>
            <h1 className="text-2xl">Hi it's Hazel Anne de Paz</h1>
            </Appear>
            <p></p>

        </div>

        </Screen>

    </div> );
}
 
export default About;