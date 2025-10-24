"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Download, Menu, X, Home, User, Briefcase, Code, Award, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Skills", href: "#skills", icon: Award },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass navbar-blur shadow-2xl py-2 sm:py-3" : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-glow">Aryan Sharma</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105 text-sm xl:text-base group"
                >
                  <IconComponent className="w-4 h-4 group-hover:text-blue-300 transition-colors" />
                  {item.name}
                </button>
              )
            })}

           <Button
  variant="outline"
  size="sm"
  onClick={() =>
    window.open("https://drive.google.com/file/d/1HazLt7DsEULpIX4svKOQ_sYoigGdt-b2/view?usp=sharing", "_blank")
  }
  className="flex items-center gap-2 glass border-white/20 text-white hover:bg-white/10 text-sm btn-premium glow"
>
  <Download className="w-4 h-4" />
  View Resume
</Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-white hover:bg-white/10 glass rounded-full"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 sm:p-3 text-white hover:bg-white/10 glass rounded-full"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 sm:p-3 text-white hover:bg-white/10 glass rounded-full"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden glass border-t border-white/10 mt-4 rounded-2xl overflow-hidden">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-xl font-medium"
                  >
                    <IconComponent className="w-5 h-5" />
                    {item.name}
                  </button>
                )
              })}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1P_l9HG2pJ61O_CdIAIiD3T_QIdy47pkx/view", "_blank")
                }
                className="flex items-center gap-2 mt-4 mx-4 glass border-white/20 text-white hover:bg-white/10 w-full justify-center"
              >
                <Download className="w-4 h-4" />
                View Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
