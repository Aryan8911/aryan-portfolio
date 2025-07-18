"use client"

import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 fade-in-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm text-on-gradient-muted font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-on-gradient mb-6 sm:mb-8">
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-on-gradient-secondary max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI/ML, any development projects and
            technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="section-glass p-6 sm:p-8 lg:p-10 rounded-2xl card-hover fade-in-up glow">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
              {/* Email */}
              <div className="text-center group">
                <a
                  href="mailto:aryansharma8911@gmail.com"
                  className="flex justify-center mb-3 sm:mb-4 w-full"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 section-glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 group-hover:text-blue-200 transition-colors" />
                  </div>
                </a>
                <h3 className="text-base sm:text-lg font-semibold text-on-gradient mb-2">Email</h3>
                <p className="text-sm sm:text-base text-on-gradient-secondary text-center leading-tight">
                  aryansharma8911@gmail.com
                </p>
              </div>

              {/* GitHub */}
              <div className="text-center group">
                <button
                  onClick={() => window.open("https://github.com/Aryan8911", "_blank")}
                  className="flex justify-center mb-3 sm:mb-4 w-full"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 section-glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 group-hover:text-blue-200 transition-colors" />
                  </div>
                </button>
                <h3 className="text-base sm:text-lg font-semibold text-on-gradient mb-2">GitHub</h3>
                <p className="text-sm sm:text-base text-on-gradient-secondary text-center leading-tight">
                  github.com/Aryan8911
                </p>
              </div>

              {/* LinkedIn */}
              <div className="text-center group">
                <button
                  onClick={() => window.open("https://www.linkedin.com/in/aryan-sharma-813381251/", "_blank")}
                  className="flex justify-center mb-3 sm:mb-4 w-full"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 section-glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 group-hover:text-blue-200 transition-colors" />
                  </div>
                </button>
                <h3 className="text-base sm:text-lg font-semibold text-on-gradient mb-2">LinkedIn</h3>
                <p className="text-sm sm:text-base text-on-gradient-secondary text-center leading-tight">
                  linkedin.com/in/aryansharma8911
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
