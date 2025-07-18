import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ParallaxBackground from "@/components/ParallaxBackground"
import ScrollAnimations from "@/components/ScrollAnimations"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
