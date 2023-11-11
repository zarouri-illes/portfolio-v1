import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";

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
        name: "KOK",
        description: "ejzfb ibzfi bzeifb izb iz paojoaj jfzioj inaoi najon foeno nao naoifnonioan aion oanf oan on of  n ijbaub ",
        link: "",
        sourceCode: "",
        technologies: [],
    }
]

export {
    Navbar,
    Hero,
    About,
    Portfolio,
    nav,
    hero,
    about,
    portfolio
}