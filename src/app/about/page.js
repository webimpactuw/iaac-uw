import Footer from "@/components/Footer";
import Image from 'next/image';

export default function AboutPage() {
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-200 font-duru">
            <h1 className="text-6xl py-15">ABOUT</h1>
            <p className="text-2xl px-40 py-20 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.      
            </p>
        </div>

        <div className="flex flex-col justify-center items-center h-full font-duru bg-black">
            <h1 className="text-6xl py-15 text-white">OUR TEAM</h1>
            <h2 className="text-2xl self-start font-bold ml-35">
                Project 1
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center w-full px-20 py-10">
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
            <h2 className="text-2xl self-start font-bold ml-35">
                Project 2
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center w-full px-20 py-10">
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

        <Footer />
        </>
    );
}
