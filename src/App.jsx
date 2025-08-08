import { Button } from './components/ui/button.jsx'
import LeafletCareerMap from './components/LeafletCareerMap.jsx'
import Navbar from './components/Navbar.jsx'

function IntroSection() {
  return (
    <section className="mb-8 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
      {/* Column 1: Text */}
      <div className="w-full md:w-1/3 flex flex-col justify-end">
        <h2 className="text-5xl font-extrabold mb-4 text-left leading-tight">
          CEM<br />
          <em className="text-blue-600 not-italic">KILIC</em>
        </h2>
        <p className="text-lg mb-6">
          Hey there! I’m a Product Manager based in Munich, Germany.
        </p>
        <Button asChild>
          <a href="#about">About Me →</a>
        </Button>
      </div>

      {/* Column 2: Photo */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src="/pic.jpg"
          alt="Cem Kilic"
          className="rounded-2xl shadow-lg w-full max-w-[300px] md:max-w-[350px] h-auto"
        />
      </div>

      {/* Column 3: Map */}
      <div className="w-full md:w-1/3">
        <LeafletCareerMap />
      </div>
    </section>
  );
}

function AboutSection() {
  return <section id="about" className="scroll-mt-20 px-4 py-16 bg-white"></section>;
}

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
    <section id="portfolio" className="scroll-mt-20 px-4 pt-4 pb-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Portfolio</h2>
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

function ContactSection() {
  return <section id="contact" className="scroll-mt-20 px-4 py-16 bg-white"></section>;
}

export default function App() {
  return (
    <div className="relative pt-20">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
