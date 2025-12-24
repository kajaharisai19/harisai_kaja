export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['PHP', 'JavaScript', 'TypeScript', 'Python', 'C', 'SQL', 'Go'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Laravel', 'Node.js', 'Next.js', 'React', 'NestJS', 'Express.js', 'Django', 'Flask', 'Vue.js', 'FastAPI'],
    },
    {
      title: 'Full-Stack Development',
      skills: ['REST APIs', 'MVC Architecture', 'Microservices', 'UI Feature Development', 'Authentication Systems'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Elastic Search'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS EC2', 'AWS S3', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Nginx', 'Apache'],
    },
    {
      title: 'Testing & Data Processing',
      skills: ['Cypress', 'PyTest', 'Pandas', 'NLTK', 'ETL Pipelines'],
    },
  ]

  return (
    <section id="skills" className="min-h-screen bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors"
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