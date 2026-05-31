"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import Image from 'next/image';
import Join from './Join.js';

export default function AboutPage() {

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

    const [joinRef, joinShown] = useRevealOnScroll(0.25);

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-200 font-duru">
                <motion.h1
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    animate={{ opacity: 1 }}
                    className="text-6xl py-15 font-bold">
                    ABOUT
                </motion.h1>
                <motion.p
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                    animate={{ opacity: 1 }}
                    className="max-w-7xl text-2xl px-40 py-20 text-center">
                    The Institute for Advanced Aerospace Concepts (IAAC) is a student-run aerospace organization focused on designing and building advanced aerospace systems. The organization brings together students interested in applying engineering, research, and systems thinking to real-world aerospace problems through collaborative, project-based work.
                </motion.p>
            </div>

            <div className="flex flex-col justify-center items-center h-full font-duru bg-black py-20 pb-30">
                <motion.h1
                    initial={{ y: 400, opacity: 0 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-6xl py-8 md:py-15 text-white font-bold text-center">LEADERSHIP TEAM</motion.h1>
                {/* faces */}
                <motion.div
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col justify-center items-center md:flex-row w-full px-6 md:px-20 py-8 md:py-10 gap-12 md:gap-30">

                    {/* left column */}
                    <div className="flex flex-col justify-center gap-12 md:gap-24">
                        <div className="flex items-center gap-6 max-w-xl">
                            <div className="w-24 h-24 md:w-35 md:h-35 flex-shrink-0">
                                {/* image */}
                                <Image
                                    src="/headshot.jpeg"
                                    height={100}
                                    width={100}
                                    alt="Description of the image"
                                    className="rounded-full aspect-square object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2 max-w-sm">
                                {/* description */}
                                <h2 className="text-lg md:text-xl">President</h2>
                                <h3 className="text-xl md:text-2xl font-bold">Alexander Lee</h3>
                                <p className="text-sm md:text-xl leading-relaxed">Bio</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-xl">
                            <div className="w-24 h-24 md:w-35 md:h-35 flex-shrink-0">
                                {/* image */}
                                <Image
                                    src="/headshot.jpeg"
                                    height={100}
                                    width={100}
                                    alt="Description of the image"
                                    className="rounded-full aspect-square object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2 max-w-sm">
                                {/* description */}
                                <h2 className="text-lg md:text-xl">Chief Engineer</h2>
                                <h3 className="text-xl md:text-2xl font-bold">Andrew Tarmacs</h3>
                                <p className="text-sm md:text-xl leading-relaxed">Bio</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-xl">
                            <div className="w-24 h-24 md:w-35 md:h-35 flex-shrink-0">
                                {/* image */}
                                <Image
                                    src="/headshot.jpeg"
                                    height={100}
                                    width={100}
                                    alt="Description of the image"
                                    className="rounded-full aspect-square object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2 max-w-sm">
                                {/* description */}
                                <h2 className="text-lg md:text-xl">Treasurer</h2>
                                <h3 className="text-xl md:text-2xl font-bold">Kyan West</h3>
                                <p className="text-sm md:text-xl leading-relaxed">Bio</p>
                            </div>
                        </div>
                    </div>

                    {/* right column */}
                    <div className="flex flex-col justify-center gap-12 md:gap-24">
                        <div className="flex items-center gap-6 max-w-xl">
                            <div className="w-24 h-24 md:w-35 md:h-35 flex-shrink-0">
                                {/* image */}
                                <Image
                                    src="/headshot.jpeg"
                                    height={100}
                                    width={100}
                                    alt="Description of the image"
                                    className="rounded-full aspect-square object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2 max-w-sm">
                                {/* description */}
                                <h2 className="text-lg md:text-xl">Vice President</h2>
                                <h3 className="text-xl md:text-2xl font-bold">Dennis Ngo</h3>
                                <p className="text-sm md:text-xl leading-relaxed">Bio</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-xl">
                            <div className="w-24 h-24 md:w-35 md:h-35 flex-shrink-0">
                                {/* image */}
                                <Image
                                    src="/headshot.jpeg"
                                    height={100}
                                    width={100}
                                    alt="Description of the image"
                                    className="rounded-full aspect-square object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2 max-w-sm">
                                {/* description */}
                                <h2 className="text-lg md:text-xl">Outreach Direction</h2>
                                <h3 className="text-xl md:text-2xl font-bold">Collin Blair</h3>
                                <p className="text-sm md:text-xl leading-relaxed">Bio</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Join joinRef={joinRef} joinShown={joinShown} />

            <Footer />
        </>
    );
}
