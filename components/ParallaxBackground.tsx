"use client"

import { useEffect, useState } from "react"

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Full page gradient background */}
      <div
        className="parallax-bg"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          height: `${100 + scrollY * 0.1}vh`,
        }}
      />

      {/* Full page gradient overlay */}
      <div className="full-page-gradient" />

      {/* Enhanced animated background shapes for full page */}
      <div className="bg-shapes">
        <div className="bg-shape" style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)` }} />
        <div
          className="bg-shape"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * -0.1}deg)` }}
        />
        <div
          className="bg-shape"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
        />
        <div
          className="bg-shape"
          style={{ transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * -0.05}deg)` }}
        />
        <div
          className="bg-shape"
          style={{ transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.08}deg)` }}
        />
        <div
          className="bg-shape"
          style={{ transform: `translateY(${scrollY * 0.35}px) rotate(${scrollY * -0.08}deg)` }}
        />
        <div
          className="bg-shape"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.06}deg)` }}
        />
        <div
          className="bg-shape"
          style={{ transform: `translateY(${scrollY * 0.45}px) rotate(${scrollY * -0.06}deg)` }}
        />
      </div>
    </>
  )
}
