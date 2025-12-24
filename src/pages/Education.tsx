import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Master of Science, Applied Computer Science',
      institution: 'Grand Valley State University',
      location: 'Grand Rapids, Michigan',
      gpa: '3.85',
      period: 'Expected Aug 2026',
    },
    {
      degree: 'Bachelor of Technology, Electronics and Communication Engineering',
      institution: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      gpa: '3.5',
      period: 'Jun 2017',
    },
  ]

  const achievements = [
    'Winner, Consensus 2.0 Hackathon - 2019',
    'Special Appreciation Award, Vitwit Technologies - 2019',
  ]

  const extracurricular = [
    {
      title: 'Python Software Foundation',
      role: 'Managing Member',
      period: 'Mar 2021 - Present',
      description: 'Validated upstream contributions into pip packages.',
    },
    {
      title: 'Free Software Movement of India, Hyderabad',
      role: 'Executive Committee Member, Swecha',
      period: 'May 2014 - Aug 2024',
      description: 'Led major events like PyConf Hyderabad and Full Stack Developers Meetup, engaging 300+ participants.',
    },
  ]

  return (
    <section id="education" className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Education & Achievements
        </h2>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-600 transition-colors"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                <p className="text-blue-400 mb-1">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>GPA: {edu.gpa}</span>
                  <span>•</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Achievements
          </h3>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">▹</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Extracurricular */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Extracurricular Activities
          </h3>
          <div className="space-y-6">
            {extracurricular.map((activity, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-600 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-semibold text-white">{activity.title}</h4>
                  <span className="text-gray-400 text-sm">{activity.period}</span>
                </div>
                <p className="text-blue-400 mb-2">{activity.role}</p>
                <p className="text-gray-300">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}