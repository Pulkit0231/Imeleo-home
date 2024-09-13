import { FaFacebook, FaInstagram, FaYoutube, } from 'react-icons/fa';
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#1E40AF] text-white py-12">
            <div className="max-w-8xl mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ml-28">
                    <div className=''>
                        <h2 className="text-6xl font-bold">Imeleo</h2>
                        <p className="mt-2 text-3xl font-semibold">Business Software Solutions And Services</p>
                        <div className="flex space-x-4 mt-4">
                            <FaFacebook className="text-2xl hover:text-gray-300" />
                            <RiLinkedinBoxFill className="text-2xl hover:text-gray-300" />
                            <FaInstagram className="text-2xl hover:text-gray-300" />
                            <FaYoutube className="text-2xl hover:text-gray-300" />
                            <FaXTwitter className="text-2xl hover:text-gray-300" />
                        </div>
                    </div>

                    <div className='ml-12'>
                        <h3 className="text-3xl font-semibold mb-12 ">Links</h3>
                        <ul>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">About</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Services</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Solutions</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Why Us</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className='ml-1'>
                        <h3 className="text-3xl font-semibold mb-12">Services</h3>
                        <ul>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Web App Dev</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Mobile App Dev</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">IT Consulting</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Custom Software</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Cloud Services</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Data Engineering</a></li>
                        </ul>
                    </div>

                    <div className='ml-1'>
                        <h3 className="text-3xl font-semibold mb-12">Solutions</h3>
                        <ul>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Content Management</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Employee Management</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Vehicle Management</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Lead Management</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300">Inventory Management</a></li>
                            <li className="mb-2 text-lg"><a href="#" className="hover:text-gray-300 relative">Hospital Management</a></li>
                        </ul>
                    </div >

                    <div className='ml-1'>
                        <h3 className="text-3xl font-semibold mb-12">Contact</h3>
                        <ul>
                            <li className="mb-2"><a href="tel:+918873338873" className="block flex mb-2 text-lg">
                                <Image className='mr-2' width={24}
                                    height={24} src='/contact/Vectorphoneicon.svg' /> +91-8873-33-8873
                            </a></li>
                            <li className="mb-2"><a href="mailto:contact@imeleo.com" className="block underline flex text-lg mb-2">
                                <Image className='mr-2' width={24}
                                    height={24} src='/contact/Vectoremailicon.svg' /> contact@imeleo.com
                            </a></li>
                            <li className="mb-2 block flex text-lg">
                                <Image className='mr-2' width={24}
                                    height={18} src='/Vectorlocation.svg' />
                                Noida, Uttar Pradesh</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-600 mt-8 pt-10 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className='text-2xl ml-20 '>© 2023 Imeleo Consulting. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className=" text-2xl hover:text-gray-300">Privacy policy</a>
                        <span className='text-2xl'>|</span>
                        <a href="#" className=" text-2xl hover:text-gray-300">Terms & Conditions</a>
                    </div>
                    <div className="flex items-center space-x-2 mt-4 mr-20  md:mt-0">
                        <a href="mailto:info@imeleo.com" className="text-2xl hover:text-gray-300">info@imeleo.com</a>
                        <Image src="/Layer_1flag.svg" width={46}
                            height={32} alt="India Flag" className=" h-auto" />
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
