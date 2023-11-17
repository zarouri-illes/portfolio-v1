"use client"

import { Navbar, Hero, About, Portfolio, Services, Contact, Footer } from "@/app/components/const";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact/>
            <Footer />
        </>
    )
}
