import { Award, ExternalLink, Calendar } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      title: 'RCR - Applied Computer Sciences Graduate Students',
      issuer: 'CITI Program',
      date: 'Nov 2025',
      credentialId: '',
      link: 'https://www.citiprogram.org/verify/?w9a657a2f-2e07-4bc7-9dbb-ed4badaa5fe7-73156874',
      logo: 'https://about.citiprogram.org/wp-content/uploads/2016/12/Logo-flat.png',
      skills: ['Responsible Research'],
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google',
      date: 'Nov 2024',
      credentialId: '',
      link: 'https://www.skills.google/public_profiles/15ea166b-5380-4fa2-b663-d6d023c30ed8/badges/13085459',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png',
      skills: ['Generative AI', 'Python', 'Large Language Models'],
    },
    {
      title: 'Introduction to Data Engineering',
      issuer: 'DataCamp',
      date: 'Sep 2024',
      credentialId: '',
      link: 'https://www.datacamp.com/statement-of-accomplishment/course/7aa3a5324fc4e3d72c915771effbcd13da722f22?raw=1',
      logo: 'data:image/png;base64,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',
      skills: ['Intro to DataEngineering', 'ETL'],
    },
    // Add more certifications here
  ]

  return (
    <section id="certifications" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Certifications</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Certifications &{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Licenses
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Logo */}
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-lg p-3">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + cert.issuer.substring(0, 2) + '&size=80&background=3B82F6&color=fff'
                  }}
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-blue-600 font-semibold text-sm">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                {cert.credentialId && (
                  <p className="text-gray-500 text-xs font-mono">
                    ID: {cert.credentialId}
                  </p>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {cert.link && (
                  
                 <a   href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm pt-2"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
            <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900 mb-1">{certifications.length}+</p>
            <p className="text-gray-600">Certifications</p>
          </div>
          <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
            <Award className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900 mb-1">7+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
            <Award className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900 mb-1">20+</p>
            <p className="text-gray-600">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  )
}