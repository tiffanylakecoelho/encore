// app/page.jsx (Next.js 13+ with App Router)
"use client";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";

export default function LandingPage() {
  return (
    <main className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}