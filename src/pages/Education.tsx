import { GraduationCap, Award, Users } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'M.S. Applied Computer Science — Specialization in Cyber Security',
      institution: 'Grand Valley State University',
      location: 'Grand Rapids, MI',
      gpa: '3.89 / 4.0',
      period: 'Aug 2024 – Expected Apr 2026',
      note: "Dean's Honor List, Fall 2025",
    },
    {
      degree: 'B.Tech. Electronics & Communication Engineering',
      institution: 'Mahaveer Institute of Science & Technology',
      location: 'Hyderabad, India',
      gpa: '3.5 / 4.0',
      period: '2013 – 2017',
      note: '',
    },
  ]

  const achievements = [
    "Dean's Honor List — Grand Valley State University, Fall 2025",
    'Winner — Consensus 2.0 Hackathon (2019)',
    'Special Appreciation Award — Vitwit Technologies (2019), for delivering an AI assistant in under 24 hours',
  ]

  const community = [
    {
      title: 'Python Software Foundation',
      role: 'Managing Member',
      period: 'Mar 2021 – Present',
      highlights: [
        'Validated upstream contributions to widely used pip packages.',
      ],
    },
    {
      title: 'Swecha / Free Software Movement of India',
      role: 'Volunteer & Infrastructure Engineer',
      period: 'May 2014 – Present',
      highlights: [
        'Guest speaker on Python, JavaScript, and Arduino; organized events with 3,000+ attendees.',
        'Infrastructure Engineer maintaining server uptime and security for community infrastructure serving thousands of users.',
        'Contributor to Swecha Telugu LLM, FakeNews Detection, CoWIN Translator, and Pothole Detection and Reporting.',
        'Guest speaker at DebConf 2021 and 20+ national and international conference talks.',
      ],
    },
  ]

  return (
    <section id="education" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Education & Community</h2>
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
                  {edu.gpa && <><span>•</span><span>GPA: {edu.gpa}</span></>}
                  <span>•</span>
                  <span>{edu.period}</span>
                </div>
                {edu.note && (
                  <p className="mt-2 text-sm text-blue-600 font-medium">{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Awards</h3>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2 mt-1 shrink-0">▹</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Community */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Open Source & Community</h3>
          </div>
          <div className="space-y-6">
            {community.map((org, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{org.title}</h4>
                  <span className="text-gray-500 text-sm mt-1 md:mt-0">{org.period}</span>
                </div>
                <p className="text-blue-600 font-semibold mb-3">{org.role}</p>
                <ul className="space-y-2">
                  {org.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-2 mt-1 shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
