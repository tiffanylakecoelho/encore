// app/page.jsx (Next.js 13+ with App Router)
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}

// ----- Header Component -----
function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black border-b border-gray-800">
      <div className="text-2xl font-bold">ConcertLog</div>
      <nav className="space-x-6">
        <a href="#features" className="hover:text-gray-300">
          Features
        </a>
        <a href="#about" className="hover:text-gray-300">
          About
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>
      </nav>
    </header>
  );
}

// ----- Hero Section Component -----
function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Your Concert Memories, Logged.
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        Track the concerts you’ve attended, review your experiences, and
        discover new shows based on your music taste.
      </p>
      <div className="flex gap-4">
        <a
          href="#get-started"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
        >
          Get Started
        </a>
        <a
          href="#learn-more"
          className="px-6 py-3 border border-gray-500 hover:bg-gray-800 rounded-lg font-semibold transition-colors"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

// ----- Features Section Component -----
function Features() {
  return (
    <section id="features" className="py-20 px-8 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Use ConcertLog?
      </h2>
      <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        <FeatureCard
          title="Log Every Show"
          description="Quickly add concerts you’ve attended with date, location, and setlist details."
        />
        <FeatureCard
          title="Write Reviews"
          description="Share your experiences with other fans and rate your favorite performances."
        />
        <FeatureCard
          title="Get Recommendations"
          description="Discover upcoming shows based on your listening habits and past attendance."
        />
      </div>
    </section>
  );
}

// ----- Feature Card Component -----
function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

// ----- Footer Component -----
function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
      © {new Date().getFullYear()} ConcertLog. All rights reserved.
    </footer>
  );
}
