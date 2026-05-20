export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'Node.js', 'Go', 'Java', 'C++', 'SQL'],
    },
    {
      title: 'AI / LLM / Agents',
      skills: ['MCP', 'OpenAI API', 'Anthropic API', 'LangChain', 'RAG', 'NLP', 'Sentiment Analysis', 'Scikit-learn', 'Rasa'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Angular', 'shadcn/ui', 'Tailwind CSS', 'React Charts'],
    },
    {
      title: 'Backend & APIs',
      skills: ['NestJS', 'FastAPI', 'Django', 'Flask', 'Express', 'REST APIs', 'GraphQL', 'gRPC', 'Microservices'],
    },
    {
      title: 'Data & Streaming',
      skills: ['Kafka', 'Apache Druid', 'Elasticsearch', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'MySQL', 'ETL'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Helm', 'Lambda', 'ALB', 'CloudWatch', 'Serverless'],
    },
    {
      title: 'CI/CD & Testing',
      skills: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Jest', 'pytest', 'Cypress', 'Playwright'],
    },
    {
      title: 'Security & Practices',
      skills: ['OAuth2', 'JWT', 'RBAC', 'Load Balancing', 'System Design', 'Code Reviews', 'Agile'],
    },
  ]

  return (
    <section id="skills" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Technical Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tools and technologies I've used to build and ship production systems across healthcare, fintech, SaaS, and data engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-base font-bold text-blue-600 mb-4 uppercase tracking-wide">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg text-sm transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
