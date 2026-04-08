export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Blue Nucleus, GVSU',
      period: 'Jan 2026 - Present',
      location: 'Grand Rapids, MI',
      highlights: [
        'Integrated OpenAI and Anthropic LLM APIs into a clinical simulation platform for the GVSU College of Nursing — professors enter patient diagnostics as a prompt and the system generates a complete clinical case and patient chart for student simulation labs',
        'Co-ideated the product, led UX design, and implemented RBAC and application security architecture',
        'Successfully piloted with strong positive feedback from nursing students and faculty',
        'Stack: Next.js, Supabase, PostgreSQL, OpenAI API, Anthropic API, TypeScript',
      ],
    },
    {
      role: 'Graduate Research Assistant',
      company: 'Grand Valley State University',
      period: 'Jan 2025 - Jan 2026',
      location: 'Grand Rapids, MI',
      highlights: [
        'Researched blockchain-based lightweight authentication using PUFs and ZKPs for IoHT devices under Dr. Samah Mansour',
        'Published: PUFchain: Secure IoHT Authentication via PUFs, ZKPs, and Blockchain',
        'Stack: Python, Blockchain, IoT Security, Distributed Systems',
      ],
    },
    {
      role: 'Build Fellow',
      company: 'Open Avenues',
      period: 'Feb 2025 - Apr 2025',
      location: 'Remote',
      highlights: [
        'Built an AI-powered auto email reply application integrating OpenAI API — automatically reads incoming emails and generates contextually appropriate replies',
        'Stack: Node.js, OpenAI API, LLM Integration',
      ],
    },
    {
      role: 'Senior Software Developer, Architect & Team Lead',
      company: 'Candy Technologies',
      period: 'Aug 2021 - Aug 2024',
      location: 'Hyderabad, India',
      highlights: [
        'Served as technical architect — designed system architecture end-to-end, built the entire backend using NestJS and Python microservices, led a team of 5 engineers',
        'Led R&D, managed client relationships, and presented the product at tech summits',
        'Reduced AWS cloud costs by ~60% by re-architecting resource usage',
        'Cut deployment downtime from 4+ hours to under 10 minutes with Blue-Green deployments and CI/CD automation',
        'Managed 8TB+ of data in AWS S3, administered RDS, DynamoDB, EC2, ALBs using Terraform',
        'Deployed Prometheus and Grafana monitoring; introduced RBAC into legacy system',
        'Stack: NestJS, Node.js, Golang, Python, AWS, Terraform, Docker, Kubernetes, PostgreSQL, DynamoDB, Redis, Prometheus, Grafana, Jenkins',
      ],
    },
    {
      role: 'Data Engineer & Team Lead',
      company: 'NewsClick.in',
      period: 'Oct 2019 - Aug 2021',
      location: 'New Delhi, India',
      highlights: [
        'Built an ML-based COVID-19 case prediction model integrated into a live public health dashboard',
        'Built Kafka-based real-time streaming pipelines ingesting millions of records/day into ELK stack',
        'Deep PostgreSQL query tuning and ETL pipeline development',
        'Stack: Python, Apache Kafka, ELK Stack, PostgreSQL, Machine Learning',
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Vitwit Technologies',
      period: 'Aug 2018 - Oct 2019',
      location: 'Hyderabad, India',
      highlights: [
        'Built Sana, an AI assistant chatbot using Rasa in under 24 hours — won Special Appreciation Award',
        'Built a Rasa-powered tax filing assistant chatbot (Node.js + React) for a fintech client',
        'Led backend of a social media intelligence platform with NLP contextual sentiment analysis',
        'Winner, Consensus 2.0 Hackathon (2019)',
        'Stack: Python, Rasa, Node.js, React, NLP, Sentiment Analysis, PostgreSQL, Docker, Jenkins, AWS',
      ],
    },
    {
      role: 'Trainee Engineer',
      company: 'Jochebed Tech Solutions',
      period: 'Nov 2017 - Aug 2018',
      location: 'Hyderabad, India',
      highlights: [
        'Led end-to-end development of an in-house inventory monitoring and tracking system',
        'Stack: Python, Docker, SDLC',
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