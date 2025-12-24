export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
              <img
                src="Profile.png"
                alt="Hari Sai Kaja"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-gray-300 space-y-4">
            <p className="text-lg leading-relaxed">
              I'm a Full-Stack Software Engineer with 5+ years of experience building 
              scalable SaaS applications, fintech platforms, and microservices using 
              PHP/Laravel, JavaScript, and Node.js.
            </p>
            <p className="text-lg leading-relaxed">
              Currently pursuing a Master's in Applied Computer Science at Grand Valley 
              State University, I'm passionate about creating secure backend services, 
              user-facing web features, and AI-driven financial applications.
            </p>
            <p className="text-lg leading-relaxed">
              I also actively contribute to open-source communities, having led major 
              events like PyConf Hyderabad and guided projects including Fake News 
              Detection and Telugu LLM initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}