import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-black h-20 w-full flex items-center justify-between px-6">
            {/* Logo */}
            <Link href="/">
                <img src="/logo-trimmed.jpg" alt="IAAC Logo" className="h-14" />
            </Link>

            {/* Navigation Links */}
            <div className="flex gap-8">
                <Link href="/" className="text-white text-lg hover:text-gray-300">
                    HOME
                </Link>
                <Link href="/about" className="text-white text-lg hover:text-gray-300">
                    ABOUT
                </Link>
                <Link href="/projects" className="text-white text-lg hover:text-gray-300">
                    PROJECTS
                </Link>
                <Link href="/apply" className="text-white text-lg hover:text-gray-300">
                    APPLY
                </Link>
            </div>
        </nav>
    );
}