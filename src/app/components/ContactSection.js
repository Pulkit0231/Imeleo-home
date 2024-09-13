import React from 'react';
const ContactSection = () => {
    return (
        <div id="services" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-[48px] leading-[57.6px] font-bold text-[#1E40AF]">Contact Us</h2>
                    <p className="mt-2 text-xl text-gray-500">
                        Reach out to discuss how we can transform your business with  <br /> tailored solutions and expert support.
                    </p>
                </div>
            </div>
            <div className=" flex  mt-20 w-[82vw] h-[401px]  bg-[#1E40AF] text-white rounded-[50px] mx-24 mb-24 p-6 ">
                <img className=' relative right-7 bottom-[58.5%] z-10 h-[80vh] ' src='/contact/Imageboyimg.svg' />
                <div><div className=" mb-6 ml-18">
                    <h2 className="text-[48px] leading-[57.6px] font-bold ">We help you to grow your business faster & easier.</h2>
                    <p className="mt-2 text-xl  ">
                        Partner with us to simplify the path to your success. We'll make reaching your business goals faster and easier than ever.
                    </p>
                </div>
                    <div className=" mb-6 ml-18">
                        <a href="tel:+918873338873" className="block flex mb-2 text-lg">
                            <img className='mr-3' src='/contact/Vectorphoneicon.svg' /> +91-8873-33-8873
                        </a>
                        <a href="mailto:contact@imeleo.com" className="block underline flex text-lg">
                            <img className='mr-3' src='/contact/Vectoremailicon.svg' /> contact@imeleo.com
                        </a>
                    </div>
                    <div className="ml-18">
                        <a
                            href="#contact"
                            className="bg-white text-blue-600 px-4 py-4 rounded font-semibold shadow hover:bg-gray-100"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ContactSection;
