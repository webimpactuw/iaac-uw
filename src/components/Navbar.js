export default function Navbar() {
    return (
        <div className="sticky top-0 bg-white h-20 w-screen flex items-center justify-between">  
                <h1 className="text-black font-bold px-10"> IAAC </h1>
            <div className="flex justify-around w-1/3 mx-20">
                <h1 className="text-black"> About Us </h1>
                <h1 className="text-black"> Sponsors </h1>
                <h1 className="text-black"> Apply </h1>
            </div>
        </div>
    );
}