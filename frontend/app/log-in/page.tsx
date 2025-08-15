"use client";

import LogInForm from "@/app/components/LogInForm";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function SignUpPage() {
    return (
        <main className="bg-black text-white font-sans min-h-screen flex flex-col">
            <Navbar />
            <LogInForm />
            <Footer />
        </main>
    )
}