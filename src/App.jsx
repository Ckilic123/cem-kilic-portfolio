import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="flex justify-between items-center mb-16">
      <h1 className="text-2xl font-bold">Cem Kilic</h1>
      <nav className="space-x-6" aria-label="Main navigation">
        <a href="#productivity" className="hover:underline font-bold">About</a>
        <a href="#tech" className="hover:underline font-bold">Contact</a>
      </nav>
    </header>
  );
}

function IntroSection() {
  return (
    <section className="mb-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl font-extrabold mb-4 text-left">
          CEM<br />
          <em className="text-blue-600 not-italic">KILIC</em>
        </h2>
        <p className="text-lg mb-6 max-w-xl">
          My life mission: To improve human productivity by bringing modern technology closer to our lives.
        </p>
        <Button asChild><a href="#about">About Me →</a></Button>
      </div>
      <div className="w-full md:w-1/2">
        {/* Replace src with actual image path */}
        <img src="/cem-profile.jpg" alt="Cem Kilic" className="rounded-2xl shadow-lg w-full h-auto" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="mb-24 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Everyone, meet <em className="text-blue-500 not-italic">Cem Kilic</em>.</h3>
      <p className="mb-4">
        Hi! I’m a Senior Product Manager building B2B platforms that empower fund managers. I love working on 0→1 products, leading cross-functional teams, and turning complex workflows into elegant tools.
      </p>
      <p className="mb-4">
        This site is my digital hub where you can:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>See what I’ve built in my <a href="#portfolio" className="text-blue-600 underline">Portfolio</a></li>
        <li>Dive into my thoughts on product strategy in <a href="#tech" className="text-blue-600 underline">Product Notes</a></li>
        <li>Explore my photos and tech tinkering in <a href="#photos" className="text-blue-600 underline">Side Projects</a></li>
      </ul>
      <p>
        If you’re hiring or want to collaborate, drop me a line via the <a href="#contact" className="text-blue-600 underline">Contact</a> page.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t pt-6 mt-12 text-center text-sm text-gray-500">
      <div className="mb-2 space-x-4">
        <a href="https://linkedin.com/in/cemkilic" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/cemkilic" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:hello@cemkilic.com">Email</a>
      </div>
      <p>© 2025 Cem Kilic</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <Header />
      <IntroSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
