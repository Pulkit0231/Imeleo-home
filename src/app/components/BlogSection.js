import Image from 'next/image';

const BlogSection = () => {
  const blogs = [
    {
      title: 'Why Data-Driven Decision Making is Key for Business Growth',
      date: 'January 10, 2024',
      description: 'Learn how leveraging software that offers real-time data insights can enhance strategic decisions, boost productivity, and drive sustainable growth.',
      imageUrl: '/Blogs/business-person-futuristic-business-environment.png',
    },
    {
      title: 'Top 5 Business Services to Boost Customer Satisfaction',
      date: 'september 1, 2024',
      description: 'Explore essential services such as CRM, help desk solutions, and automated support systems that can enhance customer experiences and foster long-term loyalty.',
      imageUrl: '/Blogs/top5.png',
    },
    {
      title: 'Leveraging Software Solutions to Enhance Business Efficiency',
      date: 'January 10, 2024',
      description: 'Discover how modern software tools can streamline your operations, automate tasks, and improve workflow efficiency to help your business stay competitive.',
      imageUrl: '/Blogs/Enchance Efficieny.png',
    },
  ];

  return (
    <section id='blogs' className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-[48px] leading-[57.6px] font-bold text-[#1E40AF] text-center  ">Blogs</h2>
        <p className="text-center mt-2 text-xl text-gray-500">
          Explore our blog for expert tips, industry insights, and engaging <br /> content on the latest trends. Stay informed and inspired!
        </p>
        <div className="mt-12 grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-9">
          {blogs.map((blog, index) => (
            <div key={index} className=" border-2 bg-gray-50 rounded-3xl p-6 ">
              <Image width={500}
                height={500} src={blog.imageUrl} alt={blog.title} className="w-[338px] h-[300px]  mb-6 " />
              <div className="">
                <span className="border border-[#1E40AF] rounded-3xl text-gray-500 px-5 py-1 ">{blog.date}</span>
                <h3 className="text-2xl mt-3 font-semibold text-[#1E40AF]">{blog.title}</h3>
                <p className="pt-4 text-lg text-gray-500">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="border  font-semibold relative border-blue-600 text-black-600 py-2 pl-8 pr-11 rounded-lg hover:bg-blue-100 transition">
            View More
            <Image width={12}
              height={12} className=" absolute right-4 top-3 " src="/solutions/Vector.png" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
