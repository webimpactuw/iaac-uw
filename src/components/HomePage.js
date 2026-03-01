"use client";
import Link from "next/link";
import { useState, useEffect, useRef} from "react";

function useRevealOnScroll(threshold = 0.2) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, shown];
}

export default function HomePage() {
    const projects = [
    {
        title: "ROCKETRY",
        description:
        "Design and build a rocket capable of achieving space. Develop an engine capable of providing the required impulse to reach the desired altitude and engineer methods to mitigate high temperatures associated with hypersonic velocities.",
        href: "/projects/rocketry",
        image: "/blueprint-figma.png",
    },
    {
        title: "DRONES",
        description:
        "Develop unmanned aerial systems focused on autonomy, sensing, and reliable flight. Projects range from airframe design and control systems to mission planning and field testing.",
        href: "/projects/drones",
        image: "/blueprint-figma.png",
    },
];

    const [currentSlide, setCurrentSlide] = useState(0);
    const heroRef = useRef(null);
    const rafRef = useRef(0);
    const targetRef = useRef({ x: 0, y: 0 });
    const parallaxEnabledRef = useRef(true);

    const [parallax, setParallax] = useState({ x: 0, y: 0 });
    const [heroRevealed, setHeroRevealed] = useState(false);
    const [projectTab, setProjectTab] = useState("rocketry");
      
    const PARALLAX_X = 14;    
    const PARALLAX_Y = 6;    
    const ROCKET_END_X = 0;     
    const ROCKET_END_Y = -120; 
    const ROCKET_START_Y = 90;

    const [missionRef, missionShown] = useRevealOnScroll(0.25);
    const [projectsRef, projectsShown] = useRevealOnScroll(0.25);
    const [joinRef, joinShown] = useRevealOnScroll(0.25);
    const [footerRef, footerShown] = useRevealOnScroll(0.1);



    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        function revealOnce() {
            setHeroRevealed(true);
            parallaxEnabledRef.current = false;
            setParallax({ x: 0, y: 0 });
        }

        function onMove(e) {
            if (!parallaxEnabledRef.current) return;
            const el = heroRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            const nx = (e.clientX - cx) / (rect.width / 2);
            const ny = (e.clientY - cy) / (rect.height / 2);

            const CLAMP = 0.6; // less intense
            targetRef.current = {
            x: Math.max(-CLAMP, Math.min(CLAMP, nx)),
            y: Math.max(-CLAMP, Math.min(CLAMP, ny)),
            };

            if (rafRef.current !== 0) return;
            rafRef.current = window.requestAnimationFrame(() => {
            rafRef.current = 0;
            setParallax(targetRef.current);
            });
        }

        const el = heroRef.current;
        if (el) {
            el.addEventListener("mouseenter", revealOnce);
            el.addEventListener("mousemove", onMove);
            el.addEventListener("touchstart", revealOnce, { passive: true });
        }

        return () => {
            if (el) {
            el.removeEventListener("mouseenter", revealOnce);
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("touchstart", revealOnce);
            }
            if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
        };
        }, []);

    function nextSlide() {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    }
    function prevSlide() {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    }

    const rocketBaseY = heroRevealed ? ROCKET_END_Y : ROCKET_START_Y;
    const rocketBaseX = heroRevealed ? ROCKET_END_X : 0;

    return (
        <div className="bg-[#191919] w-full">

      {/* Animation Images */}
        <section
            ref={heroRef}
            className="relative w-full overflow-hidden bg-black"
            style={{ height: "calc(100vh - 60px)" }}
        >
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
                opacity: heroRevealed ? 1 : 0,
                transition: "opacity 900ms ease, transform 60ms linear",
                }}
            />

            {/* Foreground rocket + clouds */}
            <img
                src="/foreground.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                    transform: `translate(${rocketBaseX + parallax.x * PARALLAX_X}px, ${rocketBaseY + parallax.y * PARALLAX_Y}px) scale(1.03)`,
                    opacity: heroRevealed ? 1 : 0,
                    transition: "opacity 650ms ease, transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
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
                    className="mt-6 inline-flex items-center justify-center rounded-lg border border-white/30 bg-black/50 text-white hover:bg-black/70 transition"
                    style={{ width: "160px", height: "35px" }}
                    >
                join now →
                </Link>
            </div>
        </section>

            {/* Mission */}
            <section 
                ref={missionRef}
                className="relative bg-black transition-all duration-700 ease-out"
                style={{ paddingTop: "56.25%", opacity: missionShown ? 1 : 0, transform: missionShown ? "translateY(0px)" : "translateY(28px)" }}
            >
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

             {/* Join our Team */}
            <section
                ref={joinRef}
                className="relative bg-[#191919] transition-all duration-700 ease-out flex items-center justify-center"
                style={{
                    minHeight: "100vh",
                    opacity: joinShown ? 1 : 0,
                    transform: joinShown ? "translateY(0px)" : "translateY(28px)",
                }}
                >
                <div className="w-[92%] max-w-[1400px] rounded-[28px] border border-white/70 px-10 py-24 text-center">
                    <p
                    className="text-white font-bold"
                    style={{ fontSize: "clamp(36px, 4vw, 64px)" }}
                    >
                    JOIN OUR TEAM
                    </p>

                    <p className="text-white/85 mt-10" style={{ fontSize: "clamp(16px, 1.7vw, 22px)" }}>
                    Rolling applications
                    <br />
                    Expected commitment of 6+ hours per week
                    </p>

                    <div className="mt-14">
                    <Link
                        href="/join"
                        className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-black/40 text-white hover:bg-black/60 transition"
                        style={{
                        width: "clamp(160px, 18vw, 240px)",
                        height: "clamp(44px, 4.5vw, 60px)",
                        fontSize: "clamp(14px, 1.4vw, 18px)",
                        }}
                    >
                        join now →
                    </Link>
                    </div>
                </div>
            </section>

            {/* projects: rocketry / drones */}
                <section
                ref={projectsRef}
                className="relative overflow-hidden transition-all duration-700 ease-out"
                style={{
                    minHeight: "100vh",
                    opacity: projectsShown ? 1 : 0,
                    transform: projectsShown ? "translateY(0px)" : "translateY(28px)",
                }}
                >
                <img
                    src="/blueprint-figma.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-black/35" />

                {/* Dot Tabs */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[6%] flex items-center gap-8 z-20">
                    <button
                    onClick={() => setProjectTab("rocketry")}
                    className={`h-4 w-4 rounded-full ${
                        projectTab === "rocketry" ? "bg-white" : "border-2 border-white bg-transparent"
                    }`}
                    aria-label="Rocketry tab"
                    />
                    <button
                    onClick={() => setProjectTab("drones")}
                    className={`h-4 w-4 rounded-full ${
                        projectTab === "drones" ? "bg-white" : "border-2 border-white bg-transparent"
                    }`}
                    aria-label="Drones tab"
                    />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="w-full px-[7%] pb-[8%] flex items-end justify-between gap-10">
                        <div className="max-w-[700px]">
                        <p className="text-white font-bold tracking-wide" style={{ fontSize: "clamp(42px, 4.4vw, 64px)" }}>
                            {projectTab === "rocketry" ? "ROCKETRY" : "DRONES"}
                        </p>

                        <p
                            className="text-white/90 mt-6"
                            style={{ fontSize: "clamp(16px, 1.6vw, 22px)", lineHeight: "1.55" }}
                        >
                            {projectTab === "rocketry"
                            ? "Design and build a rocket capable of achieving space. Develop an engine capable of providing the required impulse to reach the desired altitude and engineer methods to mitigate the effects of high temperatures associated with hypersonic velocities."
                            : "Build and test unmanned aerial systems focused on autonomy, sensing, and reliable flight. Projects range from airframe design and control systems to mission planning and real-world testing."}
                        </p>
                        </div>
                        <div className="shrink-0">
                        <Link
                            href={projectTab === "rocketry" ? "/projects/rocketry" : "/projects/drones"}
                            className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-black/50 text-white hover:bg-black/70 transition"
                            style={{
                            width: "clamp(160px, 18vw, 220px)",
                            height: "clamp(42px, 4.2vw, 56px)",
                            fontSize: "clamp(14px, 1.4vw, 18px)",
                            }}
                        >
                            learn more →
                        </Link>
                        </div>
                    </div>
                    </div>
                </section>

            {/* Footer */}
            <footer
                ref={footerRef}
                className="relative bg-black transition-all duration-700 ease-out"
                style={{ paddingTop: "39%", opacity: footerShown ? 1 : 0, transform: footerShown ? "translateY(0px)" : "translateY(28px)" }}
            >
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
                            </div>
                        </div>

                        <div className="text-center">
                            <p
                                className="font-bold text-white/75 mb-2"
                                style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}
                            >
                                Projects
                            </p>
                            <div
                                className="flex flex-col gap-[20px] text-white/50 mt-[16px]"
                                style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}
                            >
                                <Link href="/projects/rocketry" className="hover:text-white">Rocketry</Link>
                                <Link href="/projects/drones" className="hover:text-white">Drones</Link>
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


                    {/* Sponsors */}
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