import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import {Reveal}  from "./Reveal";

const nav = [
    {
        name: "Home",
        link: "#home",
    },
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Services",
        link: "#services",
    },
    {
        name: "Projects",
        link: "#projects",
    }
];

const hero = {
    smallTitle: "Hello, I am illes",
    description: "Welcome! I'm a front-end developer with a focus on React and Next.js. I specialize in transforming design concepts into seamless, visually appealing websites. Proficient in HTML, CSS, and JavaScript, I ensure responsive and dynamic user experiences. Let's create something exceptional together!"
};

const about = {
    Availibiity: true,
    speciality: "Front-End Developer | Coach",
    fullName: "Zarouri Illes",
    moreDetails: [
        {
            title: "Education (Currently): ",
            content: "First Year Licence Computer Science"
        },
        {
            title: "Job (Currently): ",
            content: "Freelance | Trainer at Ose it."
        },
    ],
    description: "My name is Zarouri Illes, 18 years old Front-End Developer and a Trainer, Very Passionat about learning new technologies in the market, And achieving new stuff in life. I am more focused on learning and gaining experience right now, I am very flexible and able to work in big teams.",
};

const portfolio = [
    {
        name: "Ose it",
        description: "Ose it is a skill developement and inovating center that provides different courses in new technologies such as web developement.It was a team work with @Sifedine.com",
        link: "https://ose-it.bouira.org",
        sourceCodeAvailable: false,
        gitHub: "/",
        image: "/projects/oseit.jpg",
        alt: "Ose it Zarouri Illes",
        technologies: ["TAILWINDCSS","REACTJS", "NEXTJS", "TYPESCRIPT", "EXPRESSJS", "MONGODB", "NODEJS"],
    },
    {
        name: "CO-MED",
        description: "CO-MED is a platform that connects the patient with the doctors, It allows the doctors to organize their patients and view their cabinet's stats in shape of charts, An AI that detects lung cancer using an X-Ray image only, It gives the patient the ability to search for doctors in his area and book an appointement. This was a team work with @Sifedine.com, It was our entry to Ose it hackathon.",
        link: "",
        sourceCodeAvailable: false,
        gitHub: "",
        image: "/projects/comed.jpg",
        alt: "Comed Zarouri illes",
        technologies: ["HTML5", "CSS3", "NODEJS", "EXPRESSJS", "MONGODB", "CHARTSJS"],
    },
    
    {
        name: "Sedjelni",
        description: "Sedjelni is on of my first projects in web developement, It is a website dedicated to list patients in an organized table to avoid using tickets in real life, I took the inspiration from it to develop CO-MED , So you could call it a beta version of CO-MED",
        link: "https://sedjelni.000webhostapp.com/Sedjelni.html",
        sourceCodeAvailable: true,
        gitHub: "https://github.com/zarouri-illes/Sedjelni",
        image: "/projects/sedj.PNG",
        alt: "Sedjelni Zarouri Illes",
        technologies: ["HTML5", "CSS3", "JAVASCRIPT", "JQUERY",],
    },

    {
        name: "Daoud Kamel's Real Estate Agency",
        description: "A local real estate agency in Bouira that i made it's website",
        link: "https://kamel-daoud.vercel.app",
        sourceCodeAvailable: true,
        gitHub: "https://github.com/zarouri-illes/promotion-immobili-re-kamel-daoud.git",
        image: "/kamel.jpg",
        alt: "Daoud Kamel's Real Estate Agency Zarouri illes",
        technologies: ["TAILWINDCSS", "REACTJS", "NEXTJS"],
    },
];

const services = [
    {
        title: "Front-End developement",
        description: "Cutting-edge frontend development: Pixel-perfect, responsive, and user-centric web solutions.",
        image: "/services/coding.gif",
    },
    {
        title: "Team Work",
        description: "I excel in collaborative coding, fostering synergy for efficient team success.",
        image: "/services/team.gif",
    },
    {
        title: "Coaching",
        description: "I adeptly simplify complex concepts, fostering understanding and enthusiasm in programming learners.",
        image: "/services/teacher.gif",
    }
];

const contact = {
    email: "illeszarouri@gmail.com",
    phoneNumber: "+213 7 93 08 05 67"
}

export {
    Navbar,
    Hero,
    About,
    Portfolio,
    Services,
    Contact,
    Footer,
    Reveal,
    nav,
    hero,
    about,
    portfolio,
    services,
    contact
}