'use client'

import Navbar from "@/components/layout/Navbar"
import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Footer from "@/components/sections/Footer"
import Hero from "@/components/sections/Hero"
import MyStack from "@/components/sections/MyStack"
import Projects from "@/components/sections/ProjectList"
import FloatingParticles from "@/components/ui/FloatingParticles"


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <FloatingParticles/>
      <Navbar />
      <Hero />
      <About />
      <MyStack />
      <Experience />
      <Projects />
      <Footer/>
    </main>
  )
}