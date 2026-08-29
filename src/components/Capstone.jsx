import FadeIn from './FadeIn.jsx'

const shots = [
  { src: '/images/capstone/landing-hero.png', alt: 'LearnEase landing page' },
  { src: '/images/capstone/features.png', alt: 'LearnEase feature overview' },
  { src: '/images/capstone/ai-tutor.png', alt: 'LearnEase AI Tutor interface' },
  { src: '/images/capstone/profile.png', alt: 'LearnEase student profile' },
  { src: '/images/capstone/review-materials.png', alt: 'LearnEase review materials' },
]

const highlights = [
  ['01', 'AI Tutor', 'Interactive AI-assisted learning support'],
  ['02', 'Smart Quizzes', 'AI-generated practice and assessment'],
  ['03', 'Progress Analytics', 'Learning progress and performance tracking'],
  ['04', 'Role-Based UX', 'Separate student and teacher experiences'],
]

export default function Capstone() {
  return (
    <section id="capstone" className="project-section">
      <FadeIn className="sec-head">
        <div>
          <span className="section-kicker mono">SELECTED WORK</span>
          <h2>Featured Project</h2>
        </div>
        <span className="idx mono">04 / 07</span>
      </FadeIn>

      <FadeIn className="featured-project">
        <div className="project-intro">
          <div className="project-number mono">01</div>
          <div className="project-copy">
            <div className="project-meta mono">LEARN EASE · E-LEARNING PLATFORM</div>
            <h3>LearnEase</h3>
            <p className="project-lead">
              An AI-powered learning platform designed to make exam preparation
              more structured, accessible, and engaging.
            </p>
            <p>
              The platform brings together lesson management, an AI tutor,
              generated quizzes, progress analytics, and role-based dashboards
              for students and teachers. My work centered on the interface,
              system planning, documentation, and translating the product idea
              into a clear user experience.
            </p>

            <div className="project-role">
              <span className="mono">MY CONTRIBUTION</span>
              <div className="project-tags">
                <span>Frontend Design</span>
                <span>System Planning</span>
                <span>Documentation</span>
                <span>DFD / System Flow</span>
              </div>
            </div>

            <div className="project-stack mono">
              <span>PHP</span>
              <span>MySQL</span>
              <span>AI-Assisted Learning</span>
            </div>
          </div>
        </div>

        <div className="project-highlights">
          {highlights.map(([num, title, text]) => (
            <div className="project-highlight" key={num}>
              <span className="mono">{num}</span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="project-gallery-head">
        <span className="mono">INTERFACE PREVIEW</span>
        <span className="mono">01 — 05</span>
      </FadeIn>

      <div className="marquee-wrap project-marquee">
        <div className="marquee-track">
          {[...shots, ...shots].map((s, i) => (
            <div className="marquee-item" key={i}>
              <img src={s.src} alt={s.alt} loading="lazy" />
              <span className="project-shot-label mono">
                {String((i % shots.length) + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="project-note mono">
        Selected academic work · interface, documentation, and system planning.
      </p>
    </section>
  )
}
