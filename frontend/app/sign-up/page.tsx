"use client";

import SignUpForm from "@/app/components/SignUpForm";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function SignUpPage() {
    return (
        <main className="bg-black text-white font-sans min-h-screen flex flex-col">
            <Navbar />
            <SignUpForm />
            <Footer />
        </main>
    )
}