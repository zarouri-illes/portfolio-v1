import { services } from "./const";

const Services = () => {
  return (
    <section className="mt-32">
        <div className="px-1 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="mb-5 text-center text-3xl font-bold md:text-5xl"><span className="text-primary">Projects</span> that I made</h2>
            </div>
            <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                {
                    services.map((service) => (
                        <div className="flex flex-col bg-white rounded-xl transition duration-300 hover:translate-y-1 hover:shadow-sm">
                            <div className="relative w-full h-48">
                                <img src={service.image} className="object-cover w-full h-full rounded-t" alt={service.title}/>
                            </div>
                            <div className="flex flex-col justify-between text-center space-y-6 p-8 border border-t-0 rounded-b-[8px]">
                                <div className="space-y-2">
                                    <div className="text-xl font-semibold text-oseRed">{service.title}</div>
                                        <p className="text-sm text-oseBlack">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services;