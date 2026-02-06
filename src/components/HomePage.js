import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-black text-white min-h-screen flex items-center px-10">
                <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
                    {/* Left side - Text */}
                    <div className="w-1/2">
                        <h1 className="text-4xl font-bold mb-6">
                            INSTITUTE FOR ADVANCED<br />AEROSPACE CONCEPTS
                        </h1>
                        <Link
                            href="/apply"
                            className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black"
                        >
                            join now →
                        </Link>
                    </div>

                    {/* Right side - Placeholder Image */}
                    <div className="w-96 h-96 bg-gray-300 border border-gray-400"></div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="bg-black text-white py-32 px-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl mb-8">Our Mission</h2>
                    <p className="text-gray-300 mb-10">
                        The mission of Institute for Advanced Aerospace Concepts (IAAC) is to
                        advance student-led aerospace innovation through ambitious, technically
                        rigorous projects. IAAC exists to provide hands-on engineering experience
                        while tackling complex challenges in rocketry and unmanned aerial systems.
                    </p>
                    <Link
                        href="/about"
                        className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black"
                    >
                        learn more →
                    </Link>
                </div>
            </section>

            {/* Projects Section */}
            <section className="bg-neutral-900 text-white py-20 px-10">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl font-bold italic mb-4">PROJECT 1</h3>
                    <p className="text-gray-400 max-w-md mb-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard.
                    </p>
                    <Link
                        href="/projects"
                        className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black"
                    >
                        learn more →
                    </Link>
                </div>
            </section>

            {/* Join Our Team Section */}
            <section className="bg-black text-white py-24 px-10">
                <div className="text-center">
                    <h2 className="text-4xl font-light tracking-widest mb-10">JOIN OUR TEAM</h2>
                    <Link
                        href="/apply"
                        className="inline-block border border-white px-12 py-3 hover:bg-white hover:text-black"
                    >
                        join now →
                    </Link>
                </div>
            </section>

            {/* Our Sponsors Section */}
            <section className="bg-neutral-800 text-white py-16 px-10">
                <div className="text-center">
                    <h2 className="text-3xl tracking-widest mb-12">OUR SPONSORS</h2>
                    <div className="flex justify-center gap-16">
                        {/* 4 Placeholder sponsor logos */}
                        <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
                        <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
                        <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
                        <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-10 text-center">
                <p className="text-2xl">footer</p>
            </footer>
        </div>
    );
}