"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Join from './Join.js';
import Footer from './Footer.js';

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

    const RocketAnimationDelay = 1;
    const RocketAnimationDuration = 0.8;

    // Responsive animation values based on viewport height
    const [animationValues, setAnimationValues] = useState({
        rocketInitial: 800,
        smallSmokeInitial: 700,
        smallSmokeAnimate: 200,
        frontSmokeInitial: 700,
        frontSmokeAnimate: 200,
        bigSmokeLeftInitial: 800,
        bigSmokeLeftAnimate: 50,
        bigSmokeRightInitial: 800,
        bigSmokeRightAnimate: 200,
    });

    useEffect(() => {
        function updateAnimationValues() {
            const vh = window.innerHeight;
            setAnimationValues({
                rocketInitial: vh * 1.1,
                smallSmokeInitial: vh * 0.9,
                smallSmokeAnimate: vh * 0.25,
                frontSmokeInitial: vh * 0.9,
                frontSmokeAnimate: vh * 0.25,
                bigSmokeLeftInitial: vh * 1,
                bigSmokeLeftAnimate: vh * 0.06,
                bigSmokeRightInitial: vh * 1,
                bigSmokeRightAnimate: vh * 0.25,
            });
        }

        updateAnimationValues();
        window.addEventListener('resize', updateAnimationValues);
        return () => window.removeEventListener('resize', updateAnimationValues);
    }, []);



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
            {/* commented this out for now while trying to implement animation of multiple clouds/smoke/rocket layers like in the figma
            <img
                src="/sky.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                transform: `translate(${parallax.x * 6}px, ${parallax.y * 4}px) scale(1.03)`,
                transition: "transform 60ms linear",
                }}
            />

            
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

            
            <img
                src="/foreground.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                    transform: `translate(${rocketBaseX + parallax.x * PARALLAX_X}px, ${rocketBaseY + parallax.y * PARALLAX_Y}px) scale(1.03)`,
                    opacity: heroRevealed ? 1 : 0,
                    transition: "opacity 650ms ease, transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
            />*/}

            <img
                src="/sky.png"
                alt="Could not load Sky"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <motion.img
                src="/cloud 1.png"
                alt="Could not load Cloud 1"
                className="absolute right-0 top-0 w-full h-full object-cover object-right"
                initial={{y: 0 }}
                animate={{y: -100 }}
                transition={{ duration: RocketAnimationDuration, delay: RocketAnimationDelay }}
                >
            </motion.img>
            <motion.img
                src="/cloud 2.png"
                alt="Could not load Cloud 2"
                className="absolute top-1/4 left-0 w-1/2 h-2/3 object-contain object-center"
                initial={{y: 0 }}
                animate={{y: -100 , x:-100}}
                transition={{ duration: RocketAnimationDuration, delay: RocketAnimationDelay }}
                >
            </motion.img>
            <motion.img
                src="/cloud 3.png"
                alt="Could not load Cloud 3"
                className="absolute top-1/2 right-0 w-1/2 h-1/2 object-contain object-center"
                initial={{y: 0 }}
                animate={{y: -200 , x:100}}
                transition={{ duration: RocketAnimationDuration, delay: RocketAnimationDelay }}
                >
            </motion.img>

            <motion.img
                src="/rocket ship.png"
                alt="Could not load Rocket"
                className="absolute bottom-0 right-1/4 w-2/10 h-11/10 object-contain object-center"
                initial={{y: animationValues.rocketInitial, x:-50}}
                animate={{y: 0, x:0}}
                transition={{ duration: RocketAnimationDuration, delay: RocketAnimationDelay }}
                >
            </motion.img>
            <motion.img
                src="/small smoke cloud.png"
                alt="Could not load Smoke Cloud"
                className="absolute bottom-0 left-11/30 w-1/3 h-2/3 min-w-[120px] min-h-[120px] object-contain object-center z-10"
                initial={{y: animationValues.smallSmokeInitial, x:-100}}
                animate={{y: animationValues.smallSmokeAnimate, x:-50}}
                transition={{ duration: RocketAnimationDuration, delay: RocketAnimationDelay }}
                >
            </motion.img>
            <motion.img
                src="/front smoke cloud.png"
                alt="Could not load smoke"
                className="absolute bottom-0 right-0 w-2/3 h-2/3 min-w-[150px] min-h-[150px] object-contain object-center"
                initial={{y: animationValues.frontSmokeInitial}}
                animate={{y: animationValues.frontSmokeAnimate}}
                transition={{ duration: RocketAnimationDuration, delay: RocketAnimationDelay }}
                >
            </motion.img>
            <motion.img
                src="/big smoke cloud (left).png"
                alt="Could not load smoke"
                className="absolute left-0 bottom-0 w-4/5 h-8/5 min-w-[300px] min-h-[300px] object-contain object-center z-20"
                initial={{x:100, y: animationValues.bigSmokeLeftInitial}}
                animate={{x:-200, y: animationValues.bigSmokeLeftAnimate}}
                transition={{ duration: RocketAnimationDuration, delay: RocketAnimationDelay }}
                >
            </motion.img>
            <motion.img
                src="/big smoke cloud (right).png"
                alt="Could not load smoke"
                className="absolute right-0 bottom-0 w-1/2 h-full min-w-[150px] min-h-[150px] object-contain object-center"
                initial={{x:50, y: animationValues.bigSmokeRightInitial}}
                animate={{x: 200, y: animationValues.bigSmokeRightAnimate}}
                transition={{ duration: RocketAnimationDuration, delay: RocketAnimationDelay }}
                >
            </motion.img>

        

            {/* Text + button */}
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-30"
            
            initial={{ opacity: 0, y: 800, x:50 }}
            animate={{ opacity: 1, y: 0 , x:0}}
            transition={{ duration: RocketAnimationDuration, delay: RocketAnimationDelay }}
            >
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
            </motion.div>
        </section>

            {/* Mission */}
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
            
            {/* replaced with Join component */}
            <Join joinRef={joinRef} joinShown={joinShown} />

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
            <Footer />
       </div>
    );
}