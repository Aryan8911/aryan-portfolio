import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aryan Sharma - Full-Stack & Embedded Systems Developer",
  description:
    "Innovative developer with a passion for front-end engineering, embedded systems, and intelligent applications. Bridging software with hardware using React, YOLOv8, MediaPipe, and edge AI technologies.",
  keywords:
    "Frontend, React, JavaScript, AI, ML, Machine Learning, Embedded Systems, YOLO, MediaPipe, Python, Full-Stack Developer",
  authors: [{ name: "Aryan Sharma" }],
  openGraph: {
    title: "Aryan Sharma - Software & Embedded Systems Engineer",
    description:
      "Engineer with a strong foundation in front-end development, embedded systems, and AI/ML. Experienced in building responsive UIs, real-time systems, and intelligent applications for edge deployment.",
    type: "website",
  },
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
