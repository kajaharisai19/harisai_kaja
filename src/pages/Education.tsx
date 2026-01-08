import { GraduationCap, Award, Users } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Master of Science, Applied Computer Science',
      institution: 'Grand Valley State University',
      location: 'Grand Rapids, Michigan',
      gpa: '3.89',
      period: 'Expected May 2026',
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
      title: 'Free Software Movement of India',
      role: 'Executive Committee Member, Swecha',
      period: 'May 2014 - Aug 2024',
      highlights: [
        'Led major events like PyConf Hyderabad and Full Stack Developers Meetup, engaging 300+ participants',
        'Developed frontend applications using Vue.js',
        'Guided open-source projects including Fake News Detection, Agri tech projects, CoWIN Translator, and Swecha Gonthuka (Telugu LLM)',
        'Spearheaded Agile and DevOps practices across community initiatives',
        'Managed meetups for Full Stack Developers, Data Scientists, and DevOps, fostering collaboration among 2,000+ members',
        'Tech Speaker for 20+ National and International conferences',
      ],
    },
  ]

  return (
    <section id="education" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Education & Achievements</h2>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
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
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Achievements</h3>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2 mt-1">▹</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Extracurricular */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Memberships & Community work</h3>
          </div>
          <div className="space-y-6">
            {extracurricular.map((activity, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{activity.title}</h4>
                  <span className="text-gray-600 text-sm mt-1 md:mt-0">{activity.period}</span>
                </div>
                <p className="text-blue-600 font-semibold mb-3">{activity.role}</p>
                {activity.description && (
                  <p className="text-gray-700 mb-3">{activity.description}</p>
                )}
                {activity.highlights && (
                  <ul className="space-y-2">
                    {activity.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}