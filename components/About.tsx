export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 fade-in-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm text-on-gradient-muted font-medium">Get to know me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-on-gradient mb-6 sm:mb-8">
            About Me
          </h2>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-on-gradient-secondary max-w-3xl mx-auto">
            Full-stack engineer with a passion for AI systems and real-world deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 fade-in-left">
            <p className="text-lg sm:text-xl lg:text-2xl text-on-gradient-secondary leading-relaxed">
              I’m Aryan Sharma, a multi-disciplinary developer and AI enthusiast. I build real-time systems combining deep learning models with intuitive UIs, optimized for embedded devices like Jetson Nano and Raspberry Pi.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-on-gradient-secondary leading-relaxed">
              My expertise spans computer vision (YOLO, MediaPipe), time-series modeling (LSTM), real-time monitoring systems, and full-stack deployment using React (Web & Native), FastAPI/Flask/Node.js, MongoDB, and Docker.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-on-gradient-secondary leading-relaxed">
              From dashboard analytics to on-device AI pipelines, I enjoy turning research into robust, user-centric applications. I’ve built intelligent driver monitoring systems, health prediction models, and embedded interfaces for industrial automation.
            </p>
          </div>

          <div className="section-glass p-8 sm:p-10 lg:p-12 rounded-3xl card-hover fade-in-right glow">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-on-gradient mb-8 sm:mb-10">
              Tech Snapshot
            </h3>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                <span className="text-on-gradient-muted font-medium text-lg">Frontend:</span>
                <span className="text-on-gradient font-semibold text-lg">React, Tailwind, React Native</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                <span className="text-on-gradient-muted font-medium text-lg">Backend:</span>
                <span className="text-on-gradient font-semibold text-lg">Flask, FastAPI, Node.js, MongoDB</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                <span className="text-on-gradient-muted font-medium text-lg">AI/ML:</span>
                <span className="text-on-gradient font-semibold text-lg">YOLOv8, MediaPipe, LSTM, LightGBM</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                <span className="text-on-gradient-muted font-medium text-lg">Embedded:</span>
                <span className="text-on-gradient font-semibold text-lg">Jetson, Raspberry Pi, ESP32</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                <span className="text-on-gradient-muted font-medium text-lg">DevOps:</span>
                <span className="text-on-gradient font-semibold text-lg">Docker, Kafka, GitHub Actions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
