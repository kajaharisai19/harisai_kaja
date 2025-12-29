export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Go', 'C', 'Java', 'Rust'],
    },
    {
      title: 'Frameworks',
      skills: ['Django', 'Flask', 'Node.js', 'Next.js', 'NestJS', 'Express', 'React', 'Vue.js'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Elastic Search'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS EC2', 'AWS S3', 'Hetzner', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI'],
    },
    {
      title: 'Data Processing',
      skills: ['Pandas', 'NLTK', 'ETL Pipelines', 'Data Visualization'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Nginx', 'Apache', 'Gunicorn', 'Cypress', 'Agile', 'CI/CD'],
    },
  ]

  return (
    <section id="skills" className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build scalable, secure, and high-performance systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg text-sm transition-colors cursor-default"
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