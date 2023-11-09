import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoReact, BiLogoPython } from "react-icons/bi"
import { SiNextdotjs, SiBootstrap } from "react-icons/si"

const Skill = () => {
    return (
        <div className="lg:mx-12 mx-4 py-32">
            <div className="text-heading mb-20">
                <h2 className="md:text-5xl text-4x font-bold">My Expertise</h2>

                <div className='mt-12 flex text-8xl py-5 space-x-6 text-primary'>
                    <AiFillHtml5/>
                    <BiLogoCss3/>
                    <BiLogoTailwindCss/>
                    <SiBootstrap/>
                    <BiLogoJavascript/>
                    <BiLogoReact/>
                    <SiNextdotjs/>
                    <BiLogoPython/>
                </div>
            </div>
        </div>
    )
}

export default Skill