function PortfolioSection() {
  const projects = [
    {
      title: "Expanding Elva’s Product Platforms",
      description: "Long Term Strategic Planning",
      image: "https://picsum.photos/id/1011/600/400",
    },
    {
      title: "Driving Smooth Product Execution",
      description: "Fancity’s Product Culture",
      image: "https://picsum.photos/id/1005/600/400",
    },
    {
      title: "Scaling SaaS Operations",
      description: "Operational Efficiency for Growth",
      image: "https://picsum.photos/id/1015/600/400",
    },
    {
      title: "User-Centric Product Design",
      description: "Design Thinking in Action",
      image: "https://picsum.photos/id/1025/600/400",
    },
  ];

  return (
    <section id="portfolio" className="scroll-mt-20 px-4 pt-10 pb-16 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow rounded overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
                <div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <a
                  href="#"
                  className="bg-[#2b0b0e] text-white font-semibold py-2 px-4 rounded hover:bg-[#3c0f14] transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
