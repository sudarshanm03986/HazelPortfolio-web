

import p1   from './petitionsuda.vercel.app_petitions.png';
import p2 from './fafs.vercel.app_.png';
import p3 from './www.pixelpals.co.nz_.png';
import p4 from './Screenshot 2025-09-03 at 10.44.56 PM.png';
import p5 from './pixelpalsinvoice.vercel.app_.png'




interface Project {

    title : string
    description: string
    src: string
    link: string
    color: string

}





const project:Project[]  = [

    { 
        title: "Newah Guthi NZ",
        description: "Newah Guthi Community Website – Developing a full-stack platform with TypeScript, React, Tailwind CSS, and Express. Features include member sign-up, event management, gallery updates, and an admin dashboard for tracking memberships, managing member information, and updating community content.",
        src: p4,
        link: "https://newar-web-frontend.vercel.app/",
        color: "#321d16"

    },


   
    { 
        title: "Pixel Pals",
        description: "Pixel Pals Website – Building a full-stack web application with TypeScript, React, Tailwind CSS, and Express. Currently expanding the backend to support client bookings, invoicing, payment tracking, and product management.",
        src: p3,
        link: "https://www.pixelpals.co.nz/",
        color: "#facc14"

    },

    { 
        title: "Pixel Pals Invoice System",
        description: "Invoice System – Built a temporary full-stack web application using TypeScript, React, Tailwind CSS, and Express. Enabled team members to log in and send custom invoices directly to client emails, serving as a quick solution while the full backend system was in development.",
        src: p5,
        link: "https://pixelpalsinvoice.vercel.app/",
        color: "#321d16"

    },

    { 
        title: "Family & Friends Studio",
        description: "Family & Friends Studio – Developed a frontend barber website using TypeScript, React, Framer Motion, and Tailwind CSS. Built in collaboration with a classmate as a summer project to help a newly graduated barber launch his business online.",
        src: p2,
        link: "https://fafs.vercel.app/",
        color: "#919191"

    },

    { 
        title: "Petition",
        description: "Petition Web Application – Built a full-stack web app using TypeScript, React, SQL, Express, and Tailwind CSS. Developed backend functionality based on a provided skeleton and Postman test cases, achieving 94.56% (278/294 hidden tests passed). Designed the frontend from user stories, meeting interaction requirements and scoring 94.18%.",
        src: p1,
        link: "https://petitionsuda.vercel.app/petitions?count=10&startIndex=0",
        color: "#2c5281"

    },
   



]
 
export {project} ;