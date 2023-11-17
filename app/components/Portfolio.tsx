import { BiLogoGithub } from "react-icons/bi"
import { portfolio } from "./const"
import { AiFillEye } from "react-icons/ai"

const Portfolio = () => (
    <section id="projects">
        <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="flex flex-col items-stretch">
                <h2 className="mb-5 text-center text-3xl font-bold md:text-5xl text-heading"><span className="text-primary">Projects</span> that I made</h2>
                    <div className="gap-x-8 [column-count:1] md:grid-cols-2 md:gap-x-4 md:[column-count:2] mt-6">
                        {
                            portfolio.map((project) => (
                                <div className="mb-12 bg-white inline-block border border-solid border-primary rounded-xl md:mb-8 lg:mb-10">
                                    <img src={project.image} alt={project.alt} className="inline-block rounded-t-xl" />
                                        <div className="px-5 py-8 sm:px-6">
                                            <h5 className="mb-3 text-xl text-primary font-bold">{project.name}</h5>
                                            <p className="flex-col text-[#808080]">{project.description}</p>
                                            <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                                                {
                                                    project.technologies.map((item) => (
                                                        <p className="rounded-3xl bg-primary p-2 text-sm font-semibold uppercase text-white">{item}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <a href={project.link} target="_blank" className=" flex max-w-full gap-2.5 text-sm font-bold uppercase text-heading">
                                                    <p className="flex items-center justify-center">Visit website <AiFillEye className="pl-2 text-3xl"/></p>
                                                </a>
                                                {project.sourceCodeAvailable ? <a target="_blank" href={project.gitHub} className="inline-block text-3xl rounded-full bg-primary p-2 text-center font-bold text-white"><BiLogoGithub/></a> : <div></div>}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
)

export default Portfolio;