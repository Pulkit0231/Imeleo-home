import React from 'react';

const About = () => {
    return (
        <div id='about' className="flex flex-col md:flex-row items-center justify-center bg-gray-50 py-10 px-4">

            <div className="max-w-7xl mx-auto mb-10">
                <div className="text-center">
                    <h2 className="text-[48px] leading-[57.6px] font-bold text-[#1E40AF] text-center">About Imeleo</h2>
                    <p className="text-center mt-2 text-xl text-gray-500">
                        Imeleo provides cutting-edge solutions and expert insights to <br />drive your business success in the digital age.
                    </p>
                </div>
                <div className=' mt-12  grid gap-4 grid-cols-2 sm:grid-cols-2 ' >
                    <img
                        src="/About.png"
                        alt="About"
                        className="  rounded-xl mb-6 ml-10 shadow-lg"
                    />
                    <div className="">
                        <h2 className="text-[48px] leading-[57.6px] font-bold text-[#374151] ">
                            <span className="mr-2">We Are Increasing</span><span className="text-blue-800 ml-2">Business</span>
                        </h2>
                        <h2 className="text-[48px] leading-[57.6px] font-bold text-[#374151]">
                            Success With<span className="text-blue-800 ml-2">Technology</span>
                        </h2>
                        <p className=" mt-2 text-xl text-gray-500">
                            At Imeleo, we use technology to help businesses grow, work smarter, and get better results. Our goal is to make it easier for companies to succeed in today's digital world.
                        </p>
                        <ul className='text-3xl pt-6 text-black'>
                            <li className='flex'><img className='pr-3' src='/Vectortick.svg' />Problem Solving</li>
                            <li className='flex pt-6'><img className='pr-3' src='/Vectortick.svg' />Strategic Growth</li>
                            <li className=' flex pt-6'><img className='pr-3' src='/Vectortick.svg' />Enhanced Performance</li>
                        </ul>
                        <div className="mt-16 ">
                            <button className="border bg-[#1E40AE] font-semibold relative border-blue-600 text-white py-4 pl-9 pr-14 rounded-lg hover:bg-blue-700 transition">
                                View More
                                <img className="  absolute right-7 top-5 " src="/Vectorwhite.svg" />
                            </button>
                        </div>
                    </div>

                </div>
                <div className=' mt-20  grid gap-4 grid-cols-2 sm:grid-cols-2 ' >
                    <div className=" ml-10">
                        <h2 className="text-[48px] flex leading-[57.6px] font-bold text-[#374151]">
                            <img className='mr-4' src='/Vectorstar.svg' />Meet Our <span className="text-blue-800 ml-2">Founder</span>
                        </h2>
                        <p className="mt-10 text-xl text-gray-500">
                            With decades of industry experience, <strong>Mayank</strong> is a highly skilled software developer, solution architect, and technology entrepreneur. He specializes in building modular and scalable cross-platform software solutions.
                        </p>
                        <p className="mt-8 text-xl text-gray-500">
                            Over the past, he has worked with numerous businesses, helping them overcome complex business challenges by building innovative technology solutions.
                        </p>
                        <p className="mt-8 text-xl text-gray-500">
                            Admired by clients, developers, and designers alike, his entrepreneurial vision drives <strong>Imeleo</strong>, empowering businesses with cutting-edge technology solutions, thus fueling growth and innovation.
                        </p>
                    </div>

                    <div className='ml-12' >
                        <img
                            src="/JS1A9972 bgFounder.png"
                            alt="Mayank Mahajan"
                            className="  rounded-lg mb-4 shadow-lg"
                        />

                        <h3 className="text-4xl flex font-bold text-[#1E40AF]">Mayank Mahajan<img className='ml-2' src='/Framelinkdin.svg' /></h3>
                        <p className=" text-xl text-black mb-2">Founder, Imeleo</p>

                    </div>
                </div>
            </div>



        </div>


    );
};

export default About;
