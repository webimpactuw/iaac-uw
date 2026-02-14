import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-black w-full" style={{ height: "clamp(50px, 6.25vw, 80px)" }}>
            <div className="relative h-full w-full">
                <Link href="/" className="absolute left-[5.9%] top-1/2 -translate-y-1/2">
                    <img src="/logo-trimmed.jpg" alt="IAAC Logo"
                        style={{ height: "clamp(28px, 3.36vw, 43px)" }} />
                </Link>

                <Link href="/"
                    className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-white text-center font-normal hover:text-gray-300"
                    style={{ left: "35.1%", width: "15.6%", fontSize: "clamp(12px, 1.56vw, 20px)" }}>
                    HOME
                </Link>
                <Link href="/about"
                    className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-white text-center font-normal hover:text-gray-300"
                    style={{ left: "50.7%", width: "15.6%", fontSize: "clamp(12px, 1.56vw, 20px)" }}>
                    ABOUT
                </Link>
                <Link href="/projects"
                    className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-white text-center font-normal hover:text-gray-300"
                    style={{ left: "66.3%", width: "15.6%", fontSize: "clamp(12px, 1.56vw, 20px)" }}>
                    PROJECTS
                </Link>
                <Link href="/apply"
                    className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-white text-center font-normal hover:text-gray-300"
                    style={{ left: "82%", width: "15.6%", fontSize: "clamp(12px, 1.56vw, 20px)" }}>
                    APPLY
                </Link>
            </div>
        </nav>
    );
}