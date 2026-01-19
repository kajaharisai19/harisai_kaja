export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Blue Nucleus - Grand Valley State University',
      period: 'Jan 2026 - Present',
      location: 'Grand Rapids, MI',
      highlights: [
        'Software Developer'
      ],
    },
    {
      role: 'Graduate Assistant',
      company: 'Grand Valley State University',
      period: 'Jan 2025 - Present',
      location: 'Grand Rapids, MI',
      highlights: [
        'Researched secure authentication protocols for IoHT devices using blockchain under Dr. Samah Mansour',
        'Developed lightweight authentication algorithms and built simulator to test algorithms',
        'Documented and presented findings to academic committees, effectively communicating technical details',
      ],
    },
    {
      role: 'Senior Software Developer & Team Lead',
      company: 'Candy Technologies pvt ltd',
      period: 'Aug 2021 - Aug 2024',
      location: 'Hyderabad, India',
      highlights: [
        'Led backend team and managed cloud infrastructure on AWS to enhance scalability and system performance',
        'Enhanced system security by implementing session management and OAuth protocols',
        'Redesigned backend architecture using NestJS to optimize performance and maintainability',
        'Developed front-end applications with NextJS, ensuring responsive interfaces',
        'Engineered backup system from AWS S3 to Hetzner, ensuring robust data redundancy',
        'Led R&D team on developing cloud solution for Tally, increasing client productivity by 70%',
      ],
    },
    {
      role: 'Data Engineer & Team Lead',
      company: 'NewsClick.in',
      period: 'Oct 2019 - Aug 2021',
      location: 'New Delhi, India',
      highlights: [
        'Constructed real-time Covid-19 dashboard by integrating APIs and optimizing data pipelines',
        'Led Election Maps project by enhancing site performance with static rendering',
        'Designed and implemented automated ETL processes to streamline data integration',
        'Enhanced platform performance through database design improvements using PostgreSQL and Python',
        'Configured and managed local, staging, and production environments',
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Vitwit Technologies pvt ltd',
      period: 'Aug 2018 - Oct 2019',
      location: 'Hyderabad, India',
      highlights: [
        'Engineered backend APIs for Brandowler using Node.js and Python with focus on big data integration',
        'Implemented sentiment analysis using NLTK achieving performance improvement from 60% to 85%',
        'Directed DevOps initiatives by containerizing applications with Docker and establishing CI/CD pipelines via Jenkins on AWS',
        'Developed and maintained secure data pipelines to ensure robust data protection',
        'Optimized database performance and security measures to enhance application reliability',
      ],
    },
    {
      role: 'Trainee Engineer',
      company: 'Jochebed Tech Solutions',
      period: 'Nov 2017 - Aug 2018',
      location: 'Hyderabad, India',
      highlights: [
        'Developed comprehensive monitoring system for in-house inventory using Django and MySQL',
        'Implemented backend system that improved data integrity and operational efficiency',
        'Applied SDLC practices to maintain consistent code quality',
        'Performed DevOps tasks utilizing Docker for containerization',
        'Automated critical processes to reduce manual tasks and improve efficiency',
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-gray-50"></div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-gray-600 text-sm mt-2 md:mt-0 md:text-right">
                      <p className="font-medium">{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}