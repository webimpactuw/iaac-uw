import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <>
        <div className="flex flex-col items-center bg-black text-white">
            {/* About Section */}
            <div className="w-1/2 bg-gray-800 py-20 flex flex-col items-center border-b border-gray-700">
                <h1 className="text-7xl mb-12">ABOUT</h1>
                <p className="p-5 text-center text-gray-300 max-w-2xl text-lg leading-relaxed px-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>

            {/* Our Team Section */}
            <div className="w-full py-20 flex flex-col items-center">
                <h1 className="text-7xl mb-16">OUR TEAM</h1>

                {/* Project 1 */}
                <div className="w-full max-w-5xl mb-16">
                    <h2 className="text-2xl font-bold mb-8">Project 1</h2>
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        {/* Team Member 1 */}
                        <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gray-400 rounded-full flex-shrink-0"></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gray-400 rounded-full flex-shrink-0"></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gray-400 rounded-full flex-shrink-0"></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gray-400 rounded-full flex-shrink-0"></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl font-bold mb-8">Project 2</h2>
                    <div className="grid grid-cols-2 gap-8">
                        {/* Team Member 5 */}
                        <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gray-400 rounded-full flex-shrink-0"></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        {/* Team Member 6 */}
                        <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gray-400 rounded-full flex-shrink-0"></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        {/* Team Member 7 */}
                        <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gray-400 rounded-full flex-shrink-0"></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        {/* Team Member 8 */}
                        <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gray-400 rounded-full flex-shrink-0"></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
        <Footer />
        </>
    );
}
