import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoReact, BiLogoPython, BiLogoTypescript } from "react-icons/bi"
import { SiNextdotjs, SiBootstrap } from "react-icons/si"

const Skill = () => {
    return (
        <div className="lg:mx-12 mx-4 py-6">
            <div className="text-heading mb-20 w-full">
                
                
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
    )
}

export default Skill