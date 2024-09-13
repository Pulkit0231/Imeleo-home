import Image from "next/image";
const services = [
    {
        title: 'Technical Expertise',
        description:
            'Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences,',
        icon: '/whychoose/Vectortechexp.svg'
    },
    {
        title: 'Business Centric Approach',
        description:
            'Putting business first, providing tailored IT solutions based on the unique needs of each business.',
        icon: '/whychoose/Vectorbusiness.svg'
    },
    {
        title: 'Process & Quality Assurance',
        description:
            'Implementing thorough testing and quality checks to deliver high-performing and secure IT solutions.',
        icon: '/whychoose/Vectorprogress.svg'
    },
    {
        title: 'support',
        description:
            'Offering timely support and quick resolution of issues to minimize downtime and disruptions.',
        icon: '/whychoose/Vectorsupport.svg'
    },
    {
        title: 'Innovation',
        description:
            'Continuously adopting and integrating new technologies to stay competitive and offer clients cutting-edge solutions.',
        icon: '/whychoose/lightbulb-gear-regular 1innova.svg'
    },
    {
        title: 'scalability',
        description:
            "Providing scalable IT infrastructure and services that grow as the clients business grows.",
        icon: '/whychoose/Vectorscalib.svg'
    },
];

const WhyChooseUs = () => {
    return (
        <div id="whyus" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mb-10">
                <div className="text-center">
                    <h2 className="text-[48px] leading-[57.6px] font-bold text-[#1E40AF] ">Why Choose Us</h2>
                    <p className=" mt-2 text-xl text-gray-500">
                        rusted expertise, cutting-edge technology, and a customer- <br />first approach to drive your success.
                    </p>
                </div>

                <div className="mt-12 text-left grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-9">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border-2  rounded-3xl p-6"
                        >
                            <Image
                                className="bg-[#F0F0F0] rounded-full px-1 py-1  h-14 w-14 mb-4"
                                width={500}
                                height={500}
                                src={service.icon}
                                alt={service.title}
                            />
                            <h3 className="text-3xl font-semibold text-[#1E40AF]">
                                {service.title}
                            </h3>
                            <p className="pt-4 text-lg text-gray-500">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
