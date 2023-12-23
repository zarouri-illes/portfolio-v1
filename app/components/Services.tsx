import { services } from "./const";

const Services = () => {
  return (
    <section className="mt-32">
        <h1 className="text-heading text-center text-4xl font-bold">What I <span className="text-primary">offer</span> to you</h1>
        <div className="relative items-center w-full px-5 py-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                {services.map((serv) => (
                    <div className="px-6 py-12 bg-white border transition duration-300 rounded-[10px] hover:translate-y-1">
                        <img className="  w-full mb-8 lg:h-56 md:h-36 rounded-xl" src={serv.image} alt="Zarouri illes services"/>
                        <h1 className=" text-primary mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter lg:text-2xl">{serv.title}</h1>
                        <p className="mx-auto text-base leading-relaxed text-gray-500">{serv.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services;