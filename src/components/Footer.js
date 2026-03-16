import Link from "next/link";

export default function Footer() {
    return (
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
    );
};