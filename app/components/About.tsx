import { about } from "./const"
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoReact, BiLogoPython, BiLogoTypescript } from "react-icons/bi"
import { SiNextdotjs, SiBootstrap } from "react-icons/si";

const About = () => (
    <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-6 md:px-10 md:py-16 lg:py-20">
            <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
                <div className="flex flex-col items-start gap-2">
                    {about.Availibiity ? <div className="flex items-center rounded-md bg-green-400 px-3 py-1">
                                                    <div className="mr-1 h-2 w-2 rounded-full  bg-white"></div>
                                                    <p className="text-sm text-white">Available for work</p>
                                                </div> : <div className="flex items-center rounded-md bg-red-400 px-3 py-1">
                                                                    <div className="mr-1 h-2 w-2 rounded-full  bg-white"></div>
                                                                    <p className="text-sm text-white">Not Available for work</p>
                                                              </div>
                    }
                    <p className="text-sm text-primary sm:text-xl">{about.speciality}</p>
                    <h1 className="mb-6 text-4xl text-heading font-bold md:text-6xl lg:mb-8">{about.fullName}</h1>
                    <p className="text-sm font-normal text-[#646464] sm:text-lg">{about.description}</p>
                    <div className="mb-8 mt-8 h-px w-full bg-primary"></div>
                    <div className="mb-6 flex flex-col gap-2 text-sm text-[#808080] sm:text-base lg:mb-8">
                        {
                            about.moreDetails.map((detail) => (
                                <p><strong>{detail.title} </strong>{detail.content}</p>
                            ))
                        }
                    </div>

                    <div className="flex flex-col gap-4 font-semibold sm:flex-row">
                        <a href="#" className="px-8 justify-between flex py-2 space-x-2 font-semibold bg-primary border border-primary text-white rounded-[30px] hover:opacity-60 transition-all duration-300">
                            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg" alt="" className="inline-block" />
                            <p>Email Me</p>
                        </a>
                        <button className="px-6 py-2 font-semibold bg-transparent border border-primary text-primary opacity-50 rounded-[30px]">
                            <p>Resume</p>
                        </button>
                    </div>
                </div>
                <div className="min-h-[530px] overflow-hidden rounded-md bg-[#f2f2f7]"></div>
            </div>
        </div>
        <div className="lg:mx-12 mx-4 py-2">
            <div className="text-heading mb-2 w-full">
                <div className='mt-4 grid gap-8  grid-cols-4 text-5xl py-5 md:flex md:text-7xl text-primary w-full justify-between '>
                    <AiFillHtml5/>
                    <BiLogoCss3/>
                    <BiLogoTailwindCss/>
                    <SiBootstrap/>
                    <BiLogoJavascript/>
                    <BiLogoReact/>
                    <SiNextdotjs/>
                    <BiLogoTypescript/>
                </div>
            </div>
        </div>
    </section>
)

export default About;