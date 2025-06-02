"use client"

import HeroSection from "@/components/home/hero-section"
import WelcomeSection from "@/components/home/welcome-section"
import dynamic from "next/dynamic"
import ContactSection from "@/components/home/contact-section"

// Lazy load the testimonials section
const LazyTestimonialsSection = dynamic(() => import("@/components/home/lazy-testimonials-section"), {
  loading: () => <div className="py-20 bg-primary/5 min-h-[400px]"></div>,
  ssr: false,
})

export default function HomeContent() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <LazyTestimonialsSection />
      <ContactSection />
    </main>
  )
}
