"use client"

import { projects } from "@/data/projects"
import { Github, ExternalLink, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 fade-in-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm text-on-gradient-muted font-medium">My Work</span>
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-on-gradient mb-6 sm:mb-8">
            Featured Projects
          </h2>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-on-gradient-secondary max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in AI/ML, computer vision, and full-stack development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`section-glass card-hover border-0 fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl font-semibold text-on-gradient group-hover:text-blue-300 transition-colors line-clamp-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-on-gradient-secondary line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.stack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs sm:text-sm bg-white/10 border-white/20 text-on-gradient-secondary hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.link, "_blank")}
                    className="flex items-center gap-2 section-glass border-white/20 hover:bg-white/10 text-on-gradient-secondary text-xs sm:text-sm flex-1 sm:flex-none"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.demo, "_blank")}
                      className="flex items-center gap-2 section-glass border-white/20 hover:bg-white/10 text-on-gradient-secondary text-xs sm:text-sm flex-1 sm:flex-none"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
