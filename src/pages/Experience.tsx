export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Blue Nucleus, GVSU',
      period: 'Jan 2026 – Present',
      location: 'Grand Rapids, MI',
      highlights: [
        'Building an AI-assisted clinical simulation platform for the GVSU College of Nursing that mirrors EHR workflows and enables realistic student practice.',
        'Integrated MCP and LLM APIs to automate clinical case creation for faculty and reduce manual preparation effort.',
        'Owned the full-stack architecture using Next.js, TypeScript, shadcn/ui, and Supabase/PostgreSQL, including data modeling, API design, and UI fidelity.',
        'Partnered with nursing faculty to translate clinical workflows into product requirements and iterate based on pilot feedback.',
        'Added Jest unit and integration tests across API endpoints and React components to maintain quality in CI/CD.',
      ],
    },
    {
      role: 'Graduate Research Assistant',
      company: 'Grand Valley State University',
      period: 'Jan 2025 – Jan 2026',
      location: 'Grand Rapids, MI',
      highlights: [
        'Researched lightweight consensus mechanisms for IoHT devices, focusing on secure coordination for resource-constrained edge nodes.',
        'Contributed to the hardware implementation of the proposed algorithm, including the intra-edge node mobility component, and validated the model on physical devices.',
        'Published 2 peer-reviewed research papers based on the protocol design and prototype results, including PUFchain: Secure IoHT Authentication via PUFs, ZKPs, and Blockchain (2026).',
        'Collaborated with research advisors across hardware design, validation, and paper authorship.',
      ],
    },
    {
      role: 'Senior Software Engineer, Architect & Tech Lead',
      company: 'Candy Technologies Pvt Ltd',
      period: 'Aug 2021 – Aug 2024',
      location: 'Hyderabad, India',
      highlights: [
        'Led modernization of SyncOffice, an enterprise collaboration SaaS used by healthcare, universities, CA firms, and IT services companies, after inheriting a legacy PHP/React codebase with scalability and security gaps.',
        'Reduced deployment time from overnight to minutes by introducing Blue-Green deployments, load balancing, stronger security controls, and AWS infrastructure improvements.',
        'Cut cloud costs by approximately 60% while improving reliability and scalability.',
        'Architected and built a cloud-native SyncOffice platform from scratch using Next.js, NestJS, and shadcn/ui, with modern security and performance standards across the stack.',
        'Led migration of 12TB+ of client documents into SyncCloud using cached, low-downtime transitions.',
        'Designed and built TallyCloud, enabling clients to access on-premise Tally accounting software through a web interface.',
        'Ran requirements discovery and product discussions with 3 chartered accountant firm clients, each with multiple branches and up to 2,000+ end clients.',
        'Established Jest and pytest testing practices and made automated testing part of the CI/CD pipeline.',
        'Led and mentored engineers, drove sprint planning, architecture reviews, and stakeholder communication as the primary technical voice.',
      ],
    },
    {
      role: 'Data Engineer & Tech Lead',
      company: 'NewsClick.in',
      period: 'Oct 2019 – Aug 2021',
      location: 'New Delhi, India',
      highlights: [
        'Architected and delivered a COVID-19 data intelligence platform used by national news media, solving the challenge of extracting structured data from newspapers, social media, and online news sources.',
        'Applied KDD methodology and imputation techniques to improve data accuracy across global, national, state, district, and ward levels.',
        'Built the extraction, validation, and processing engine in Python, with Apache Druid and PostgreSQL for analytics and Next.js for the frontend.',
        'Built an election results live dashboard providing real-time vote counting, vote/poll shift analysis, and historical comparisons using React Charts, Python, MongoDB, and GitLab CI.',
        'Wrote pytest suites to validate extraction accuracy, imputation logic, and data integrity, and integrated them into Jenkins CI.',
        'Designed a GraphQL API layer for an internal service, defining schemas, resolvers, and query optimization patterns.',
        'Led a team of 3 and worked closely with journalists and data scientists to translate editorial needs into technical solutions.',
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Vitwit Technologies Pvt Ltd',
      period: 'Aug 2018 – Oct 2019',
      location: 'Hyderabad, India',
      highlights: [
        'Built a fintech ITR filing application in React and Python/Flask, automating document analysis, tax suggestion, and form autofill workflows through a chatbot-driven interface.',
        'Led development of a social media intelligence platform that extracted content from Google News, local newspapers, portals, Twitter, and Facebook, then applied NLP sentiment analysis for classification and scoring.',
        'Optimized the extraction engine with multithreading and parallel processing to process 10,000–50,000 records in minutes.',
        'Improved retrieval performance through Elasticsearch indexing and query optimization, reducing database P95 latency.',
        'Built Jest and pytest test coverage for API and NLP components and automated builds in Jenkins CI.',
      ],
    },
    {
      role: 'Trainee Software Engineer',
      company: 'Jochebed Tech Solutions',
      period: 'Nov 2017 – Aug 2018',
      location: 'Hyderabad, India',
      highlights: [
        'Built a Python/Django inventory management application with an Android frontend to track raw materials, finished goods, invoicing, and daily reporting.',
        'Contributed to an embedded pollution monitoring project using NodeMCU, C++, and MQTT for municipal reporting.',
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
                        <span className="text-blue-600 mr-2 mt-1.5 shrink-0">•</span>
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
