// app/page.jsx (Next.js 13+ with App Router)
"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

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
      <div className="text-2xl font-bold">Encore</div>
      <nav className="space-x-6">
        <a href="#features" className="hover:text-gray-300">
          Concerts
        </a>
        <a href="#about" className="hover:text-gray-300">
          About
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>
        <a href="#log-in" className="hover:text-gray-300">
          Log In
        </a>
        <a href="#sign-up" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition">
          Sign Up
        </a>
        {/* Search Icon */}
        <button
          aria-label="Search"
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          <Search size={20} className="text-white" />
        </button>
      </nav>
    </header>
  );
}

// ----- Hero Section Component -----
function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 min-h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/concert-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay to darken video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Your Concert Memories, Logged.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Track the concerts you’ve attended, review your experiences, and
          discover new shows based on your music taste.
        </p>
        <div className="flex gap-4 justify-center">
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
      </div>
    </section>
  );
}

// ----- Features Section Component -----
function Features() {
  return (
    <section id="features" className="py-20 px-8 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Use Encore?
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

type FeatureCardProps = {
  title: string;
  description: string;
};

// ----- Feature Card Component -----
function FeatureCard({ title, description } : FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // amount is how much of the element must be visible
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-lg p-6 shadow-md shadow border-3 border-gray-500"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
// ----- Footer Component -----
function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
      © {new Date().getFullYear()} Encore. All rights reserved.
    </footer>
  );
}
