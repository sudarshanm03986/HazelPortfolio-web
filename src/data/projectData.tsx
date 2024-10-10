

import p1   from './SlivereyeYouthCentreLow.png';
import p1l from './SlivereyeYouthCentre.png';

import p2 from './LakeWhakataHHSM.png';
import p2l from './LakeWhakataHouse.pdf'

import p3 from './21GloucesterStSM.png';
import p3l from'./21GloucesterSt.pdf';

import p4 from './7DalzielPlaceSM.png';
import p4l from'./7DalzielPlace.pdf';

import p5 from './112CashelStSM.png';
import p5l from './112CashelSt.pdf';

import p6 from './47FerryRoadSM.png';
import p6l from './47FerryRoad.pdf';

interface Project {

    title : string
    description: string
    src: string
    link: string
    color: string

}





const project:Project[]  = [

    { 
        title: "Slivereye Youth Centre",
        description: "Crafted a detailed and modern design for a building, incorporating innovative architectural concepts and sustainable materials. The design balances aesthetics with functionality, focusing on maximizing space, natural lighting, and energy efficiency. Developed using cutting-edge tools, the project showcases creativity and attention to structural detail.",
        src: p1,
        link: p1l,
        color: "#919191"

    },
    { 
        title: "Lake Whakata Holiday House",
        description: "Very noice",
        src: p2,
        link: p2l,
        color: "#919191"

    },
    { 
        title: "21 Gloucester Street",
        description: "Very noice",
        src: p3,
        link: p3l,
        color: "#919191"

    },
    { 
        title: "Industrial/Commercial Building",
        description: "Very noice",
        src: p4,
        link: p4l,
        color: "#919191"

    },
    { 
        title: "Cashel Street Bulding",
        description: "Very noice",
        src: p5,
        link: p5l,
        color: "#919191"

    },
    { 
        title: "DACD600 Construction Detailing",
        description: "Very noice",
        src: p6,
        link: p6l,
        color: "#919191"

    },




]
 
export {project} ;