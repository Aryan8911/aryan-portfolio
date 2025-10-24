import { timeline } from "@/data/timeline"
import { Calendar, MapPin, Building } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 fade-in-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm text-on-gradient-muted font-medium">My Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-on-gradient mb-6 sm:mb-8">
            Experience & Education
          </h2>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-on-gradient-secondary max-w-3xl mx-auto">
            My journey in AI/ML research and embedded systems development
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              // Center the last one if odd count (e.g., 5)
              const isLastCentered = index === timeline.length - 1 && timeline.length % 2 !== 0
              const layoutClass = isLastCentered
                ? "md:justify-center md:text-center"
                : index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"

              const contentClass = isLastCentered
                ? "md:w-1/2 md:mx-auto"
                : index % 2 === 0
                ? "md:pr-8 md:w-1/2"
                : "md:pl-8 md:w-1/2"

              return (
                <div
                  key={index}
                  className={`relative flex items-center fade-in-up ${layoutClass}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Dot on the timeline */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-white/20"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 ${contentClass}`}>
                    <div className="section-glass p-6 sm:p-8 rounded-2xl shadow-lg card-hover">
                      <div className="flex items-center justify-center md:justify-start gap-2 text-blue-300 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-on-gradient mb-2">{item.role}</h3>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-on-gradient-secondary mb-2">
                        <Building className="w-4 h-4" />
                        <span>{item.company}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-on-gradient-muted mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                      <p className="text-on-gradient-secondary leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
