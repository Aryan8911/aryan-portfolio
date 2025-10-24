"use client"
import { useEffect, useState } from "react"

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("system")

  // Apply theme to HTML element
  const applyTheme = (mode) => {
    const html = document.documentElement
    if (mode === "dark") {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Detect system preference + time
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      applyTheme(savedTheme)
      setTheme(savedTheme)
      return
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const hour = new Date().getHours()
    const isNight = hour >= 19 || hour < 7

    if (prefersDark || isNight) {
      applyTheme("dark")
      setTheme("dark")
    } else {
      applyTheme("light")
      setTheme("light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    applyTheme(newTheme)
    setTheme(newTheme)
  }

  return (
    <>
      {/* Optional toggle icon (you can move it to navbar if you want) */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="fixed bottom-4 right-4 z-50 p-3 glass rounded-full shadow-lg hover:scale-110 transition-transform text-white"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>

      {children}
    </>
  )
}
