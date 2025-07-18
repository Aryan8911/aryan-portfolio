"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-on-gradient">Aryan Sharma</h3>
            <p className="text-on-gradient-secondary">Aspiring AI/ML Researcher & Embedded Systems Developer</p>
          </div>

          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://github.com/Aryan8911", "_blank")}
              className="text-on-gradient-secondary hover:text-on-gradient section-glass p-3 rounded-full"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://www.linkedin.com/in/aryan-sharma-813381251/", "_blank")}
              className="text-on-gradient-secondary hover:text-on-gradient section-glass p-3 rounded-full"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("mailto:aryansharma8911@gmail.com", "_blank")}
              className="text-on-gradient-secondary hover:text-on-gradient section-glass p-3 rounded-full"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-on-gradient-muted">© {new Date().getFullYear()} Aryan Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
