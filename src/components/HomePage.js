"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "motion/react"

export default function HomePage() {
    const projects = [
        {
            title: "PROJECT 1",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },
        {
            title: "PROJECT 2",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },
        {
            title: "PROJECT 3",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    function nextSlide() {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    }
    function prevSlide() {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    }

    return (
        <div className="bg-[#191919] w-full">

            {/* hero */}
            <section className="relative bg-[#191919]" style={{ paddingTop: "62.6%" }}>
                <div className="absolute inset-0">
                    <div className="absolute left-[50%] top-[15.8%] w-[44.1%] h-[73.2%]">
                        <img
                            src="/hero-placeholder.svg"
                            alt="Hero placeholder"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute left-[7.1%] top-[38.5%] flex flex-col" style={{ gap: "18px" }}>
                        <p style={{
                            width: "513px",
                            height: "94px",
                            color: "#FFF",
                            fontFamily: "'Droid Sans', sans-serif",
                            fontSize: "40px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            letterSpacing: "0px"
                        }}>
                            INSTITUTE FOR ADVANCED AEROSPACE CONCEPTS
                        </p>

                        <Link
                            href="/apply"
                            className="flex items-center justify-center border border-white bg-[#171717] text-white text-center hover:bg-white hover:text-black"
                            style={{
                                width: "clamp(150px, 18.4vw, 235px)",
                                height: "clamp(35px, 3.9vw, 50px)",
                                fontSize: "clamp(14px, 1.56vw, 20px)"
                            }}
                        >
                            join now →
                        </Link>
                    </div>
                </div>
            </section>

            {/* OUR MISSION */}
            <motion.section viewport={{ once: true }} className="relative flex justify-center bg-black py-16 md:py-24 px-6 md:px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* left column */}
                    <div className="max-w-xl text-center md:text-left flex flex-col gap-10">
                        <motion.h2
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl">
                            OUR MISSION
                        </motion.h2>

                        <motion.p
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
                            className="text-white/80 mt-6 md:mt-8 text-base md:text-lg leading-relaxed">
                            The mission of the Institute for Advanced Aerospace Concepts (IAAC) is to
                            advance student-led aerospace innovation through ambitious, technically
                            rigorous projects. IAAC provides hands-on engineering experience while
                            tackling complex challenges in rocketry and unmanned aerial systems.
                        </motion.p>

                        <motion.div
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
                            className="mt-8 md:mt-10"
                        >
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center border border-white/40 text-white/80 hover:border-white hover:text-white transition-colors duration-200 px-6 py-2 rounded-md text-sm md:text-base"
                            >
                                Learn more →
                            </Link>
                        </motion.div>
                    </div>

                    {/* right column */}
                    <motion.div
                        initial={{ y: 100 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                        className="w-48 sm:w-64 md:w-80 flex justify-center mt-10 md:mt-0">
                        <img
                            src="/rocket.png"
                            alt="Vector illustration of a rocket"
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                </div>
            </motion.section>
            {/* join our team */}
            <section className="relative bg-[#191919]" style={{ paddingTop: "33.75%" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-white text-center leading-normal"
                        style={{ fontSize: "clamp(24px, 3.1vw, 40px)" }}>
                        JOIN OUR TEAM
                    </p>
                    <div className="mt-[4%]">
                        <Link
                            href="/apply"
                            className="flex items-center justify-center border border-white bg-[#171717] text-white text-center hover:bg-white hover:text-black"
                            style={{
                                width: "clamp(150px, 18.4vw, 235px)",
                                height: "clamp(38px, 4.4vw, 56px)",
                                fontSize: "clamp(14px, 1.56vw, 20px)"
                            }}
                        >
                            join now →
                        </Link>
                    </div>
                </div>
            </section>

            {/* projects carousel */}
            <section className="relative overflow-hidden" style={{ paddingTop: "62.5%" }}>
                <div className="absolute inset-0">
                    <img
                        src="/blueprint-figma.png"
                        alt="Aerospace blueprint"
                        className="absolute inset-0 w-full h-full object-cover opacity-25"
                    />

                    <button
                        onClick={prevSlide}
                        className="absolute left-[2%] top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white cursor-pointer"
                        style={{ fontSize: "clamp(24px, 3.9vw, 50px)" }}
                    >
                        ←
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-[2%] top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white cursor-pointer"
                        style={{ fontSize: "clamp(24px, 3.9vw, 50px)" }}
                    >
                        →
                    </button>

                    <p className="absolute left-[6.9%] top-[67.4%] w-[26%] text-white font-bold leading-normal z-10"
                        style={{ fontSize: "clamp(24px, 3.1vw, 40px)" }}>
                        {projects[currentSlide].title}
                    </p>

                    <p className="absolute left-[6.9%] top-[77%] w-[43.4%] text-white z-10"
                        style={{ fontSize: "clamp(14px, 1.56vw, 20px)", lineHeight: "1.4" }}>
                        {projects[currentSlide].description}
                    </p>

                    {/* dots */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[93%] flex z-10"
                        style={{ gap: "clamp(15px, 3.1vw, 40px)" }}>
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`rounded-full cursor-pointer ${index === currentSlide
                                    ? "bg-white"
                                    : "border-2 border-white bg-transparent"
                                    }`}
                                style={{
                                    width: "clamp(16px, 2.2vw, 28px)",
                                    height: "clamp(16px, 2.2vw, 28px)"
                                }}
                            />
                        ))}
                    </div>

                    <div className="absolute right-[5.9%] top-[83.1%] z-10">
                        <Link
                            href="/projects"
                            className="flex items-center justify-center border border-white bg-[#171717] text-white text-center hover:bg-white hover:text-black"
                            style={{
                                width: "clamp(170px, 20.5vw, 262px)",
                                height: "clamp(38px, 4.4vw, 56px)",
                                fontSize: "clamp(14px, 1.56vw, 20px)"
                            }}
                        >
                            learn more →
                        </Link>
                    </div>
                    <div>

                    </div>
                </div>
            </section>

            {/* footer */}
            <footer className="relative bg-black" style={{ paddingTop: "39%" }}>
                <div className="absolute inset-0">
                    <div className="flex justify-between px-[14%] pt-[5%]">
                        <div className="text-center">
                            <p className="font-bold text-white/75 mb-2"
                                style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}>Navigation</p>
                            <div className="flex flex-col gap-[20px] text-white/50 mt-[16px]"
                                style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}>
                                <Link href="/" className="hover:text-white">Home</Link>
                                <Link href="/about" className="hover:text-white">About</Link>
                                <Link href="/projects" className="hover:text-white">Projects</Link>
                                <Link href="/apply" className="hover:text-white">Apply</Link>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="font-bold text-white/75 mb-2"
                                style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}>Socials</p>
                            <p className="text-white/50 mt-[16px]"
                                style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}>to come</p>
                        </div>

                        <div className="text-center">
                            <p className="font-bold text-white/75 mb-2"
                                style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}>Contact</p>
                            <a href="mailto:leeale22@uw.edu"
                                className="text-white/50 hover:text-white mt-[16px] block"
                                style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}>
                                leeale22@uw.edu
                            </a>
                        </div>

                        <div className="text-center">
                            <p className="font-bold text-white/75 mb-2"
                                style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}>Join Our Team</p>
                            <div className="mt-[16px]">
                                <Link
                                    href="/apply"
                                    className="inline-flex items-center justify-center border border-white/50 bg-[#171717] text-white/50 text-center hover:text-white hover:border-white"
                                    style={{
                                        width: "clamp(100px, 11.4vw, 146px)",
                                        height: "clamp(28px, 3.2vw, 41px)",
                                        fontSize: "clamp(12px, 1.56vw, 20px)"
                                    }}
                                >
                                    join now →
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center">
                        <p className="font-bold text-white/75 mb-[16px]"
                            style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}>
                            OUR SPONSORS
                        </p>
                        <div className="flex items-center justify-center"
                            style={{ gap: "clamp(25px, 5.9vw, 75px)" }}>
                            <img src="/sponsor1.svg" alt="Sponsor"
                                style={{ width: "clamp(40px, 5.3vw, 68px)", height: "clamp(38px, 5.2vw, 66px)" }} />
                            <img src="/sponsor4.svg" alt="Sponsor"
                                style={{ width: "clamp(40px, 5.3vw, 68px)", height: "clamp(38px, 5.2vw, 66px)" }} />
                            <img src="/sponsor3.svg" alt="Sponsor"
                                style={{ width: "clamp(40px, 5.3vw, 68px)", height: "clamp(38px, 5.2vw, 66px)" }} />
                            <img src="/sponsor2.svg" alt="Sponsor"
                                style={{ width: "clamp(40px, 5.3vw, 68px)", height: "clamp(38px, 5.2vw, 66px)" }} />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}