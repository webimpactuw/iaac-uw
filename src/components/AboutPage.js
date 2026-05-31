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
                <h1 className="text-6xl py-15">ABOUT</h1>
                <p className="max-w-7xl text-2xl px-40 py-20 text-center">
                    The Institute for Advanced Aerospace Concepts (IAAC) is a student-run aerospace organization focused on designing and building advanced aerospace systems. The organization brings together students interested in applying engineering, research, and systems thinking to real-world aerospace problems through collaborative, project-based work.
                </p>
            </div>

            <div className="flex flex-col justify-center items-center h-full font-duru bg-black py-20 pb-30">
                <h1 className="text-6xl py-15 text-white">LEADERSHIP TEAM</h1>
                {/* faces */}
                <div className="flex flex-row justify-center w-full px-20 py-10 gap-30">

                    {/* left column */}
                    <div className="flex flex-col justify-center gap-50">
                        <div className="flex flex-row items-center">
                            <div className="w-35 h-35 flex-shrink-0">
                                {/* image */}
                                <Image
                                    src="/headshot.jpeg"
                                    height={100}
                                    width={100}
                                    alt="Description of the image"
                                    className="rounded-full aspect-square object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col justify-start px-8 gap-3">
                                {/* description */}
                                <h2 className="text-xl">President</h2>
                                <h3 className="text-2xl font-bold">Alexander Lee</h3>
                                <p className="text-xl">Bio</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="w-35 h-35 flex-shrink-0">
                                {/* image */}
                                <Image
                                    src="/headshot.jpeg"
                                    height={100}
                                    width={100}
                                    alt="Description of the image"
                                    className="rounded-full aspect-square object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col justify-start px-8 gap-3">
                                {/* description */}
                                <h2 className="text-xl">Chief Engineer</h2>
                                <h3 className="text-2xl font-bold">Andrew Tarmacs</h3>
                                <p className="text-xl">Bio</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="w-35 h-35 flex-shrink-0">
                                {/* image */}
                                <Image
                                    src="/headshot.jpeg"
                                    height={100}
                                    width={100}
                                    alt="Description of the image"
                                    className="rounded-full aspect-square object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col justify-start px-8 gap-3">
                                {/* description */}
                                <h2 className="text-xl">Treasurer</h2>
                                <h3 className="text-2xl font-bold">Kyan West</h3>
                                <p className="text-xl">Bio</p>
                            </div>
                        </div>
                    </div>

                    {/* right column */}
                    <div className="flex flex-col justify-center gap-50">
                        <div className="flex flex-row items-center">
                            <div className="w-35 h-35 flex-shrink-0">
                                {/* image */}
                                <Image
                                    src="/headshot.jpeg"
                                    height={100}
                                    width={100}
                                    alt="Description of the image"
                                    className="rounded-full aspect-square object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col justify-start px-8 gap-3">
                                {/* description */}
                                <h2 className="text-xl">Vice President</h2>
                                <h3 className="text-2xl font-bold">Dennis Ngo</h3>
                                <p className="text-xl">Bio</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="w-35 h-35 flex-shrink-0">
                                {/* image */}
                                <Image
                                    src="/headshot.jpeg"
                                    height={100}
                                    width={100}
                                    alt="Description of the image"
                                    className="rounded-full aspect-square object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col justify-start px-8 gap-3">
                                {/* description */}
                                <h2 className="text-xl">Outreach Direction</h2>
                                <h3 className="text-2xl font-bold">Collin Blair</h3>
                                <p className="text-xl">Bio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Join joinRef={joinRef} joinShown={joinShown} />

            <Footer />
        </>
    );
}
