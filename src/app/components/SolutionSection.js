import Image from "next/image";

const solutions = [
    {
        title: 'Content Management',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetudwa',
        imageUrl: '/solutions/Content Management.png',
    },
    {
        title: 'Employee Management',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetudwa',
        imageUrl: '/solutions/Employee Management.png',
    },
    {
        title: 'Vehicle Management',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetudwa',
        imageUrl: '/solutions/Vehicle Management.png',
    },
    {
        title: 'Lead Management',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetudwa',
        imageUrl: '/solutions/Lead Management.png',
    },
    {
        title: 'Inventory Management',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetudwa',
        imageUrl: '/solutions/Inventory Management.png',
    },
    {
        title: 'Hospital Management',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetudwa',
        imageUrl: '/solutions/Hospital Management.png',
    },
];

const SolutionSection = () => {
    return (
        <div id="solutions" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-[48px] leading-[57.6px] font-bold text-[#1E40AF]">Solutions</h2>
                    <p className="mt-2 text-xl text-gray-500">
                        Innovative software solutions tailored to streamline your <br /> business operations and maximize efficiency.
                    </p>
                </div>

                <div className="mt-12 grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-9">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="bg-white border-2  rounded-3xl "
                        >
                            <Image
                                className="w-[338px] h-[245px] mt-6 ml-6"
                                width={500}
                                height={500}
                                src={solution.imageUrl}
                                alt={solution.title}
                            />
                            <div className="p-6">
                                <h3 className=" text-3xl font-semibold text-[#1E40AF]">
                                    {solution.title}
                                </h3>
                                <p className="pt-4 text-lg text-gray-500">{solution.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <button className="border font-semibold relative border-blue-600 text-black-600 py-2 pl-8 pr-11 rounded-lg hover:bg-blue-100 transition">
                        View More
                        <Image className=" absolute right-4 top-3 " width={12} alt="arrowblack"
                            height={12} src="/solutions/Vector.png" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SolutionSection;
