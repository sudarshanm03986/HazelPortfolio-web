

import p1   from './petitionsuda.vercel.app_petitions.png';
import p2 from './fafs.vercel.app_.png';
import p3 from './www.pixelpals.co.nz_.png'
import p4 from './Screenshot 2025-09-03 at 10.44.56 PM.png'



interface Project {

    title : string
    description: string
    src: string
    link: string
    color: string

}





const project:Project[]  = [

    { 
        title: "Petition Full-stack Website",
        description: "Crafted a detailed and modern design for a building, incorporating innovative architectural concepts and sustainable materials. The design balances aesthetics with functionality, focusing on maximizing space, natural lighting, and energy efficiency. Developed using cutting-edge tools, the project showcases creativity and attention to structural detail.",
        src: p1,
        link: "https://petitionsuda.vercel.app/petitions?count=10&startIndex=0",
        color: "#2c5281"

    },
   
    { 
        title: "Family & Friends Studio",
        description: "Crafted a detailed and modern design for a building, incorporating innovative architectural concepts and sustainable materials. The design balances aesthetics with functionality, focusing on maximizing space, natural lighting, and energy efficiency. Developed using cutting-edge tools, the project showcases creativity and attention to structural detail.",
        src: p2,
        link: "https://fafs.vercel.app/",
        color: "#919191"

    },
    { 
        title: "Pixel Pals",
        description: "Crafted a detailed and modern design for a building, incorporating innovative architectural concepts and sustainable materials. The design balances aesthetics with functionality, focusing on maximizing space, natural lighting, and energy efficiency. Developed using cutting-edge tools, the project showcases creativity and attention to structural detail.",
        src: p3,
        link: "https://www.pixelpals.co.nz/",
        color: "#facc14"

    },

    { 
        title: "Newah Guthi NZ",
        description: "Crafted a detailed and modern design for a building, incorporating innovative architectural concepts and sustainable materials. The design balances aesthetics with functionality, focusing on maximizing space, natural lighting, and energy efficiency. Developed using cutting-edge tools, the project showcases creativity and attention to structural detail.",
        src: p4,
        link: "https://newar-web-frontend.vercel.app/",
        color: "#321d16"

    },



]
 
export {project} ;