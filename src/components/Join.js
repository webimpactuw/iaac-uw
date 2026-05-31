
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Join({ joinRef, joinShown }) {

    return (
        <section
            ref={joinRef}
            className="relative bg-[#191919] transition-all duration-700 ease-out flex items-center justify-center pt-20"
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

                <div className="max-w-xl mx-auto">
                    <p className="text-white mt-10 " style={{ fontSize: "clamp(16px, 1.7vw, 22px)" }}>
                        Want to gain hands-on experience in engineering, researching, problem solving, and collaborating with a team in aerospace projects?
                    </p>

                    <p className="text-white mt-10 font-semibold" style={{ fontSize: "clamp(16px, 1.7vw, 22px)" }}>
                        APPLY TO JOIN THE IAAC TEAM!
                    </p>

                    <p className="text-white mt-10" style={{ fontSize: "clamp(16px, 1.7vw, 22px)" }}>
                        Rolling applications
                        <br></br>
                        Expected commitment of 6+ hours per week
                    </p>
                </div>

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
    );
}