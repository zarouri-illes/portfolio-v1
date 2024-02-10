import { contact } from "./const"

const Contact = () => {
    return (
        <section id="contact">
            <div className=" py-16 md:py-24 lg:py-32">
                <div className="mx-auto w-full bg-white py-14 text-center">
                    <h2 className="mb-8 text-3xl font-bold md:text-5xl max-w-2xl mx-auto text-heading">Let's get in <span className="text-primary"> touch</span></h2>
                    <div className="mx-auto space-y-4">
                        <h2 className="text-heading text-xl">{contact.email}</h2>
                        <h2 className="text-heading text-xl">{contact.phoneNumber}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact