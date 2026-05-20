import { BookOpen, Cpu, HeartPulse, GraduationCap } from 'lucide-react'

export default function Research() {
  const publications = [
    {
      title: 'PUFchain: Secure IoHT Authentication via PUFs, Zero-Knowledge Proofs, and Blockchain',
      year: '2026',
      type: 'Peer-Reviewed',
      summary:
        'Research on lightweight distributed security for IoT healthcare edge devices. Combines Physically Unclonable Functions (PUFs) and Zero-Knowledge Proofs (ZKPs) with a blockchain-based authentication layer designed for resource-constrained nodes.',
    },
    {
      title: 'Lightweight Consensus Mechanisms for IoHT Edge Devices',
      year: '2025 / 2026',
      type: 'Peer-Reviewed',
      summary:
        'Proposes and evaluates a lightweight consensus protocol for IoT healthcare (IoHT) edge nodes. Based on hardware prototype research at GVSU, including the intra-edge node mobility component, and validated on physical devices.',
    },
  ]

  const areas = [
    {
      icon: Cpu,
      title: 'IoT & Edge Security',
      description:
        'Lightweight authentication and consensus for resource-constrained IoHT edge nodes. Focus on PUF-based identity, ZKP-based verification, and blockchain coordination without heavy compute overhead.',
    },
    {
      icon: HeartPulse,
      title: 'Healthcare + AI',
      description:
        'AI-assisted clinical workflows — from LLM-generated patient case simulation (Blue Nucleus, GVSU) to secure device authentication in connected medical infrastructure (PUFchain).',
    },
    {
      icon: GraduationCap,
      title: 'Education + AI',
      description:
        'Applied AI to nursing simulation and clinical education at GVSU — building tools that reduce faculty prep time and give students exposure to realistic EHR-style workflows before clinical placement.',
    },
    {
      icon: BookOpen,
      title: 'Open Source & Language AI',
      description:
        'Contributed to the Swecha Telugu LLM — one of the first open-source large language models for Telugu (80M+ speakers). Member of the Free Software Movement of India since 2014.',
    },
  ]

  return (
    <section id="research" className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Research & Publications</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Research Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Peer-reviewed research on secure distributed systems for healthcare IoT, plus applied work at the intersection of AI, healthcare, and education.
          </p>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Publications
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">{pub.title}</h4>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{pub.year}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">{pub.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{pub.summary}</p>
                <p className="text-xs text-gray-400 mt-3 font-medium">Grand Valley State University — Graduate Research</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Research & Applied Areas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
