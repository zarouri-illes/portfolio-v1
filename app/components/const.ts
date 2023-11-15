import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";

const nav = [
    {
        name: "Home",
        link: "",
    },
    {
        name: "About",
        link: "",
    },
    {
        name: "Home",
        link: "",
    },
    {
        name: "Home",
        link: "",
    }
];

const hero = {
    smallTitle: "Asalam Alikum, I am illes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo culpa molestiae, reprehenderit neque ratione expedita in hic velit consequuntur delectus laboriosam omnis repellat dolore."
};

const about = {
    Availibiity: true,
    speciality: "Front-End Developer | Trainer | Real Estate Agent",
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
    description: "My name is Zarouri Illes, 18 years old Front-End Developer, Real Estate Agent and Trainer, Very Passionat about learning new technologies in the market, And achievement new stuff in life, Always trying new things even tho it is outside my domaine like Real Estate, Trading and entrepreneurship. I am more focused on learning and gaining experience right now, I am very flexible and able to work in big teams.",
};

const portfolio = [
    {
        name: "Ose it",
        description: "Ose it is a skill developement and inovating center that provides different courses in new technologies such as web developement.It was a team work with @Sifedine.com",
        link: "https://ose-it.bouira.org",
        sourceCodeAvailable: false,
        gitHub: "/",
        image: "/oseit.jpg",
        alt: "Ose it Zarouri Illes",
        technologies: ["TAILWINDCSS","REACTJS", "NEXTJS", "TYPESCRIPT", "EXPRESSJS", "MONGODB", "NODEJS"],
    },
    {
        name: "CO-MED",
        description: "CO-MED is a platform that connects the patient with the doctors, It allows the doctors to organize their patients and view their cabinet's stats in shape of charts, An AI that detects lung cancer using an X-Ray image only, It gives the patient the ability to search for doctors in his area and book an appointement. This was a team work with @Sifedine.com, It was our entry to Ose it hackathon.",
        link: "",
        sourceCodeAvailable: false,
        gitHub: "",
        image: "/comed.jpg",
        alt: "Comed Zarouri illes",
        technologies: ["HTML5", "CSS3", "NODEJS", "EXPRESSJS", "MONGODB", "CHARTSJS"],
    },
    
    {
        name: "Sedjelni",
        description: "Sedjelni is on of my first projects in web developement, It is a website dedicated to list patients in an organized table to avoid using tickets in real life, I took the inspiration from it to develop CO-MED , So you could call it a beta version of CO-MED",
        link: "https://sedjelni.000webhostapp.com/Sedjelni.html",
        sourceCodeAvailable: true,
        gitHub: "https://github.com/zarouri-illes/Sedjelni",
        image: "/sedjelni.png",
        alt: "Sedjelni Zarouri Illes",
        technologies: ["HTML5", "CSS3", "JAVASCRIPT", "JQUERY",],
    },
    {
        name: "Ose it",
        description: "Ose it is a skill developement and inovating center that provides different courses in new technologies such as web developement.It was a team work with @Sifedine.com",
        link: "ose-it.bouira.org",
        sourceCodeAvailable: true,
        gitHub: "/",
        image: "",
        alt: "",
        technologies: ["REACTJS", "NEXTJS", "TYPESCRIPT", "EXPRESSJS", "MONGODB", "NODEJS"],
    },
];

const services = [
    {
        title: "Front-End developement",
        description: "Cutting-edge frontend development: Pixel-perfect, responsive, and user-centric web solutions.",
        image: "",
    },
    {
        title: "Team Work",
        description: "I excel in collaborative coding, fostering synergy for efficient team success.",
        image: "",
    },
    {
        title: "Training",
        description: "I adeptly simplify complex concepts, fostering understanding and enthusiasm in programming learners.",
        image: "",
    }
];

export {
    Navbar,
    Hero,
    About,
    Portfolio,
    Services,
    nav,
    hero,
    about,
    portfolio,
    services
}