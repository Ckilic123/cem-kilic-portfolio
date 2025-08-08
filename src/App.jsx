import { Button } from './components/ui/button.jsx'
import LeafletCareerMap from './components/LeafletCareerMap.jsx'
import Navbar from './components/Navbar.jsx'

function IntroSection() {
  return (
    <section className="mb-20 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
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
          className="rounded-2xl shadow-lg w-full max-w-[300px] md:max-w-[400px] h-auto"
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
  return <section id="about" className="scroll-mt-20">About Section</section>
}

function PortfolioSection() {
  return <section id="portfolio" className="scroll-mt-20">Portfolio Section</section>
}

function ContactSection() {
  return <section id="contact" className="scroll-mt-20">Contact Section</section>
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
  )
}
