import { hero } from "./const"

const Hero = () => {
    return (
        <div className="mt-0 ">
            <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
                <div className="md:w-1/2 w-full">
                    <img src="/Programming.gif" alt="Zarouri Illes programming" className="w-full"/>
                </div>

                <div className="md:w-1/2 w-full mt-5">
                    <h3 className="text-md text-heading mb-2 font-normal">{hero.smallTitle}</h3>
                    <h1 className="md:text-4xl text-3xl font-bold text-heading leading-snug md:leading-[50px] mb-5">I am a <span className="text-primary">front-end developer</span> and a <span className="text-primary">Trainer</span>.</h1>
                    <p className="font-light text-md leading-7 mb-8">{hero.description}</p>
                    <button className="px-6 py-2 font-semibold bg-primary border border-primary text-white rounded-[30px] hover:opacity-60 transition-all duration-300">Get in touch</button>
                </div>
            </div>
        </div>
    )
}

export default Hero