export default function Experience() {
  const experiences = [
    {
      role: 'Graduate Assistant',
      company: 'Grand Valley State University',
      period: 'Jan 2025 - Present',
      location: 'Grand Rapids, MI',
      highlights: [
        'Researching secure authentication protocols for IoHT devices using blockchain under Dr. Samah Mansour',
        'Developed lightweight authentication algorithms and built simulator to test algorithms',
        'Designed continuous authentication protocol for IOT/IOHT devices',
        'Documented and presented findings to academic committees, effectively communicating technical details',
      ],
    },
    {
      role: 'Senior Software Developer & Team Lead',
      company: 'Candy Technologies',
      period: 'Aug 2021 - Aug 2024',
      location: 'Hyderabad, India',
      highlights: [
        'Collaborated with software engineering teams to build backend microservices and scalable APIs',
        'Built full-stack features using Laravel (backend) and JavaScript/Next.js (frontend) for customer-facing dashboards',
        'Designed microservices and backend services in Laravel and NestJS to improve scalability',
        'Managed AWS-based infrastructure, optimized MySQL queries, and implemented CI/CD pipelines',
      ],
    },
    {
      role: 'Data Engineer & Team Lead',
      company: 'NewsClick.in',
      period: 'Oct 2019 - Aug 2021',
      location: 'New Delhi, India',
      highlights: [
        'Constructed real-time Covid-19 dashboard by integrating APIs and optimizing data pipelines',
        'Developed data-driven dashboards and automated ETL pipelines supporting business-critical decision making',
        'Led Election Maps project by enhancing site performance with static rendering and automating data flows',
        'Enhanced platform performance through database design improvements using PostgreSQL and Python',
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Vitwit Technologies',
      period: 'Aug 2018 - Oct 2019',
      location: 'Hyderabad, India',
      highlights: [
        'Designed and developed AI-based fintech application which automated 80% of manual efforts in e-filing of income tax',
        'Engineered backend APIs for Brandowler using Node.js and Python with focus on big data integration',
        'Implemented sentiment analysis using NLTK achieving performance improvement from 60% to 85%',
        'Directed DevOps initiatives by containerizing applications with Docker and establishing CI/CD pipelines via Jenkins on AWS',
      ],
    },
    {
      role: 'Trainee Engineer',
      company: 'Jochebed Tech Solutions',
      period: 'Nov 2017 - Aug 2018',
      location: 'Hyderabad, India',
      highlights: [
        'Developed comprehensive monitoring system for in-house inventory using Django and MySQL',
        'Implemented and deployed backend system that improved data integrity and operational efficiency',
        'Applied SDLC practices to maintain consistent code quality and organized project workflows',
        'Performed DevOps tasks utilizing Docker for containerization and timely application deployments',
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