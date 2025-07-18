import { skills } from "@/data/skills"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 fade-in-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm text-on-gradient-muted font-medium">My Expertise</span>
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-on-gradient mb-6 sm:mb-8">
            Skills & Technologies
          </h2>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-on-gradient-secondary max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and scalable applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className={`section-glass p-6 sm:p-8 rounded-2xl card-hover fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-on-gradient mb-4 sm:mb-6 capitalize">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillList.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="text-sm bg-white/10 border-white/20 text-on-gradient-secondary hover:bg-white/20 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
