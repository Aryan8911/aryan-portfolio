"use client"

import { Github, Linkedin, Mail, ArrowDown, Sparkles, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-28"
    >
      {/* Light mode overlay for better contrast */}
      <div className="light-mode-overlay" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-4 sm:left-10 w-2 h-2 bg-white/60 rounded-full floating opacity-60" />
        <div className="absolute top-32 right-8 sm:right-20 w-3 h-3 bg-white/50 rounded-full floating-delayed opacity-40" />
        <div className="absolute bottom-40 left-8 sm:left-20 w-1 h-1 bg-white/70 rounded-full floating opacity-80" />
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-white/40 rounded-full floating-delayed opacity-50" />
        <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-white/60 rounded-full floating opacity-70" />
        <div className="absolute bottom-60 right-1/4 w-2.5 h-2.5 bg-white/45 rounded-full floating-delayed opacity-45" />
        <div className="hidden lg:block absolute top-20 right-10 w-4 h-4 bg-white/30 rounded-full floating opacity-30" />
        <div className="hidden lg:block absolute bottom-32 left-1/3 w-3 h-3 bg-white/50 rounded-full floating-delayed opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12 xl:space-y-16">
          {/* Welcome badge */}
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 sm:gap-3 glass px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse" />
              <span className="text-sm sm:text-base lg:text-lg hero-text-secondary font-medium">
                Welcome to my portfolio
              </span>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 animate-pulse" />
            </div>
          </div>

          {/* Main heading and description */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold hero-text-primary leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              Hi, I'm <span className="gradient-text">Aryan</span>
            </h4>

            <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl hero-text-secondary font-medium max-w-5xl mx-auto leading-relaxed px-2 sm:px-4">
              Full-Stack Engineer, Embedded Systems Developer & AI/ML Practitioner
            </h5>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hero-text-tertiary max-w-5xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-8">
              Building intelligent, real-time systems at the intersection of hardware and software. I work across
              <span className="text-blue-200 font-semibold"> React</span> &
              <span className="text-green-200 font-semibold"> Node.js</span> frontends/backends,
              <span className="text-emerald-200 font-semibold"> MongoDB</span> databases, and
              <span className="text-fuchsia-200 font-semibold"> embedded platforms</span> like
              <span className="text-yellow-200 font-semibold"> Jetson</span>,
              <span className="text-indigo-200 font-semibold"> Raspberry Pi</span>, and
              <span className="text-rose-200 font-semibold"> ESP32</span>. My AI/ML toolkit includes
              <span className="text-purple-200 font-semibold"> YOLOv8</span>,
              <span className="text-pink-200 font-semibold"> MediaPipe</span>,
              <span className="text-cyan-200 font-semibold"> LSTM</span>, and real-time inference with
              <span className="text-lime-200 font-semibold"> TensorFlow</span> and
              <span className="text-orange-200 font-semibold"> PyTorch</span>.
            </p>
          </div>

          {/* Social Buttons */}
          <div
            className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              aria-label="GitHub"
              variant="ghost"
              size="lg"
              onClick={() => window.open("https://github.com/Aryan8911", "_blank")}
              className="glass p-4 sm:p-5 lg:p-6 hover:scale-110 transition-all duration-300 glow btn-premium group"
            >
              <Github className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-white group-hover:text-blue-200 transition-colors" />
            </Button>
            <Button
              aria-label="LinkedIn"
              variant="ghost"
              size="lg"
              onClick={() => window.open("https://www.linkedin.com/in/aryan-sharma-813381251/", "_blank")}
              className="glass p-4 sm:p-5 lg:p-6 hover:scale-110 transition-all duration-300 glow btn-premium group"
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-white group-hover:text-blue-200 transition-colors" />
            </Button>
            <Button
              aria-label="Email"
              variant="ghost"
              size="lg"
              onClick={() => window.open("mailto:aryansharma8911@gmail.com")}
              className="glass p-4 sm:p-5 lg:p-6 hover:scale-110 transition-all duration-300 glow btn-premium group"
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-white group-hover:text-blue-200 transition-colors" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center px-4 sm:px-6 fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="glass bg-white/20 hover:bg-white/30 text-white border-white/30 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-300 glow btn-premium"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://drive.google.com/file/d/1P_l9HG2pJ61O_CdIAIiD3T_QIdy47pkx/view", "_blank")
              }
              className="glass bg-transparent hover:bg-white/10 text-white border-white/30 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-300 btn-premium"
            >
              View Resume
            </Button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="pt-12 sm:pt-16 lg:pt-20 xl:pt-24 fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex flex-col items-center space-y-4">
              <span className="hero-text-tertiary text-sm sm:text-base font-medium">Scroll to explore</span>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("#about")}
                className="animate-bounce hover:scale-110 transition-all duration-300 glass p-3 sm:p-4 rounded-full"
              >
                <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
