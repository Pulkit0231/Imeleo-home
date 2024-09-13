const services = [
    {
        title: 'Web App Development',
        description:
            'Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences.',
        icon: '/services/Vectorweb app.svg',
    },
    {
        title: 'App Development',
        description:
            'Crafting exceptional mobile experiences that revolutionize user engagement on the go. Our solutions deliver intuitive, high-performance.',
        icon: '/services/mobile-regular 1app.svg',
    },
    {
        title: 'IT Consulting',
        description:
            'Strategic IT consulting services to guide businesses through the dynamic technology landscape. We provide expert insights and solutions to optimize.',
        icon: '/services/VectorIT.svg',
    },
    {
        title: 'Software Development',
        description:
            'Enterprise-grade, bespoke solutions that perfectly align with your business needs and goals.',
        icon: '/services/Vectorsoftware.svg',
    },
    {
        title: 'Cloud Services',
        description:
            'Empower businesses to harness the full potential of cloud computing with solutions that ensure flexibility, scalability.',
        icon: '/services/Vectorcloud.svg',
    },
    {
        title: 'Data Engineering',
        description:
            'Robust data pipelines, ensuring the seamless collection, storage, and management of your data, no matter the scale.',
        icon: '/services/Vector.svg',
    },
];

const Services = () => {
    return (
        <div id="services" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-[48px] leading-[57.6px] font-bold text-[#1E40AF]">Services</h2>
                    <p className="mt-2 text-xl text-gray-500">
                        Comprehensive business services designed to support growth <br /> and enhance your competitive edge.
                    </p>
                </div>

                <div className="mt-12 text-left grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-9">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white border-2  rounded-3xl  p-6 "
                        >
                            <img
                                className=" bg-[#F0F0F0] rounded-full px-1 py-1  h-14 w-14 mb-4"
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

                <div className="mt-8 text-center">
                    <button className="border font-semibold relative border-blue-600 text-black-600 py-2 pl-8 pr-11 rounded-lg hover:bg-blue-100 transition">
                        View More
                        <img className=" absolute right-4 top-3 " src="/solutions/Vector.png" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
