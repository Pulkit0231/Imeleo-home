const HeroSection = () => {
    return (
        <div className="relative bg-gray-50 h-screen flex items-center justify-center h-[88vh] ">

            <div className="relative z-10 text-center px-4 sm:px-8 lg:px-16 ">
                <h1 className="  leading-[72px] text-[#1E40AF] text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
                    Business Software
                </h1>
                <h1 className="leading-[72px] text-[#1E40AF] text-4xl sm:text-5xl lg:text-6xl font-medium mt-3">
                    Solutions And Services
                </h1>
                <p className=" text-xl text-black-900 mt-6">
                    <strong className="underline">Software</strong> services and solutions to take your <strong className="underline">Business</strong>  to the next level 🚀
                </p>
                <div className="mt-7 flex justify-center gap-4">
                    <button className="bg-blue-600 text-white py-2 px-9 rounded-lg hover:bg-blue-700 transition">
                        Know more
                    </button>
                    <button className="border border-blue-600 text-blue-600 py-2 px-9 rounded-lg hover:bg-blue-100 transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection
