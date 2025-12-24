export default function Experience() {
  const experiences = [
    {
      role: 'Graduate Assistant',
      company: 'Grand Valley State University',
      period: 'Jan 2025 - Present',
      location: 'Grand Rapids, MI',
      highlights: [
        'Researching secure authentication protocols for IoHT devices using blockchain',
        'Developed lightweight authentication algorithms and built simulator',
        'Designed continuous authentication protocol for IOT/IOHT devices',
      ],
    },
    {
      role: 'Senior Software Developer & Team Lead',
      company: 'Candy Technologies',
      period: 'Aug 2021 - Aug 2024',
      location: 'Hyderabad, India',
      highlights: [
        'Built backend microservices and scalable APIs for fintech applications',
        'Developed full-stack features using Laravel and Next.js',
        'Managed AWS infrastructure and implemented CI/CD pipelines',
      ],
    },
    {
      role: 'Data Engineer & Team Lead',
      company: 'NewsClick.in',
      period: 'Oct 2019 - Aug 2021',
      location: 'New Delhi, India',
      highlights: [
        'Constructed real-time Covid-19 dashboard with API integration',
        'Developed data-driven dashboards and automated ETL pipelines',
        'Enhanced platform performance with PostgreSQL optimization',
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                </div>
                <div className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}