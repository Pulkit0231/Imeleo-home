export default function Navbar() {
    return (
        <nav className="bg-[#1E40AE] text-white p-4">
            <div className="container mx-auto flex justify-between items-center px-[46px] py-[2px]">
                <div className="text-4xl font-bold">
                    Imeleo
                </div>

                <ul className=" Urbanist hidden md:flex space-x-10 text-xl">
                    <li className="hover:underline cursor-pointer">
                        <a href="#solutions">Solutions</a>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <a href="#services">Services</a>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <a href="#about">About Us</a>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <a href="#careers">Careers</a>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <a href="#whyus">Why Us</a>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <a href="#blogs">Blogs</a>
                    </li>
                </ul>
                <div className="relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-9 py-4 rounded-full text-black"
                    />
                    <div className="absolute inset-y-1 left-3 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1115 9.5a7.5 7.5 0 011.65 7.15z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    );
}
