"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

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

            {/* our mission */}
            <section className="relative bg-black" style={{ paddingTop: "56.25%" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-[5%]">
                    <p className="text-white font-normal text-center leading-normal"
                        style={{ fontSize: "clamp(24px, 3.1vw, 40px)" }}>
                        Our Mission
                    </p>

                    <p className="text-white text-center mt-[4%] max-w-[790px] w-[62%]"
                        style={{ fontSize: "clamp(14px, 1.56vw, 20px)", lineHeight: "1.4" }}>
                        The mission of Institute for Advanced Aerospace Concepts (IAAC) is to advance student-led aerospace innovation through ambitious, technically rigorous projects. IAAC exists to provide hands-on engineering experience while tackling complex challenges in rocketry and unmanned aerial systems.
                    </p>

                    <div className="mt-[4%]">
                        <Link
                            href="/about"
                            className="flex items-center justify-center border border-white bg-[#171717] text-white text-center hover:bg-white hover:text-black"
                            style={{
                                width: "clamp(150px, 18.4vw, 235px)",
                                height: "clamp(35px, 3.9vw, 50px)",
                                fontSize: "clamp(14px, 1.56vw, 20px)"
                            }}
                        >
                            learn more →
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
                </div>
            </section>

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

            {/* footer */}
            <Footer />
        </div>
    );
}