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
                <p className="max-w-xl text-2xl px-40 py-20 text-center">
                    The Institute for Advanced Aerospace Concepts (IAAC) is a student-run aerospace organization focused on designing and building advanced aerospace systems. The organization brings together students interested in applying engineering, research, and systems thinking to real-world aerospace problems through collaborative, project-based work.
                </p>
            </div>

            <div className="flex flex-col justify-center items-center h-full font-duru bg-black">
                <h1 className="text-6xl py-15 text-white">LEADERSHIP TEAM</h1>
                {/* faces */}
                <div className="flex-row justify-items-center w-full px-20 py-10">
                    {/* left column */}
                    <div>

                    </div>
                    {/* right column */}
                    <div>

                    </div>

                    <div className="flex flex-row justify-center">
                        <div className="w-35 h-35 flex-shrink-0">
                            <Image
                                src="/headshot.jpeg"
                                height={100}
                                width={100}
                                alt="Description of the image"
                                className="rounded-full aspect-square object-cover w-full h-full"
                            />
                        </div>
                        <p className="text-base px-40 py-20 text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
            </div>

            <Join joinRef={joinRef} joinShown={joinShown} />

            <Footer />
        </>
    );
}
