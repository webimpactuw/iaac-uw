"use client";
import Link from "next/link";
import { useState, useEffect, useRef} from "react";

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
    const heroRef = useRef(null);
    const rafRef = useRef(0);
    const targetRef = useRef({ x: 0, y: 0 });

    const [parallax, setParallax] = useState({ x: 0, y: 0 });
    const [heroReady, setHeroReady] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setHeroReady(true);

        function onMove(e) {
            const el = heroRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            const nx = (e.clientX - cx) / (rect.width / 2);
            const ny = (e.clientY - cy) / (rect.height / 2);

            targetRef.current = {
            x: Math.max(-1, Math.min(1, nx)),
            y: Math.max(-1, Math.min(1, ny)),
            };

            if (rafRef.current !== 0) return;
            rafRef.current = window.requestAnimationFrame(() => {
            rafRef.current = 0;
            setParallax(targetRef.current);
            });
        }

        const el = heroRef.current;
        if (el) el.addEventListener("mousemove", onMove);

        return () => {
            if (el) el.removeEventListener("mousemove", onMove);
            if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
        };
        }, []);

    function nextSlide() {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    }
    function prevSlide() {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    }

    return (
        <div className="bg-[#191919] w-full">
      {/* HERO (animated layered) */}
        <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-black">
        {/* Sky */}
        <img
            src="/sky.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
            transform: `translate(${parallax.x * 6}px, ${parallax.y * 4}px) scale(1.03)`,
            transition: "transform 60ms linear",
            }}
        />

        {/* Background clouds */}
        <img
            src="/background.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
            transform: `translate(${parallax.x * 10}px, ${parallax.y * 8}px) scale(1.03)`,
            opacity: heroReady ? 1 : 0,
            transition: "opacity 900ms ease, transform 60ms linear",
            }}
        />

        {/* Foreground rocket + clouds */}
        <img
            src="/foreground.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
            transform: heroReady
                ? `translate(${parallax.x * 16}px, ${parallax.y * 12}px) scale(1.03)`
                : "translate(0px, 28px) scale(1.03)",
            opacity: heroReady ? 1 : 0,
            transition: "opacity 900ms ease, transform 900ms ease",
            }}
        />

        {/* Text + button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1
            className="text-white font-bold leading-tight"
            style={{
                fontSize: "clamp(32px, 5vw, 64px)",
                textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                letterSpacing: "0.02em",
            }}
            >
            INSTITUTE FOR <br />
            ADVANCED <br />
            AEROSPACE <br />
            CONCEPTS
            </h1>

            <Link
            href="/join"
            className="mt-6 inline-flex items-center justify-center border border-white rounded-lg text-white hover:bg-white hover:text-black transition"
            style={{ width: "160px", height: "35px" }}
            >
            join now →
            </Link>
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
                            href="/join"
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
            <footer className="relative bg-black" style={{ paddingTop: "39%" }}>
                <div className="absolute inset-0">
                    <div className="flex justify-between px-[14%] pt-[5%]">
                        <div className="text-center">
                            <p className="font-bold text-white/75 mb-2"
                                style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}>Navigation</p>
                            <div className="flex flex-col gap-[20px] text-white/50 mt-[16px]"
                                style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}>
                                <Link href="/" className="hover:text-white">Home</Link>
                                <Link href="/join" className="hover:text-white">Join</Link>
                                <Link href="/about" className="hover:text-white">About</Link>
                                <Link href="/projects" className="hover:text-white">Projects</Link>
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
                                    href="/join"
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