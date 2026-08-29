import FadeIn from './FadeIn.jsx'

const shots = [
  { src: '/images/capstone/landing-hero.png', alt: 'LearnEase landing page hero section' },
  { src: '/images/capstone/features.png', alt: 'LearnEase AI features overview' },
  { src: '/images/capstone/ai-tutor.png', alt: 'LearnEase AI Tutor chat interface' },
  { src: '/images/capstone/profile.png', alt: 'LearnEase student profile page' },
  { src: '/images/capstone/review-materials.png', alt: 'LearnEase NAT review materials page' },
]

export default function Capstone() {
  return (
    <section id="capstone">
      <FadeIn className="sec-head">
        <h2>Capstone Project</h2>
        <span className="idx mono">04 / 07</span>
      </FadeIn>

      <FadeIn className="exp-card">
        <div className="exp-tag mono">THESIS / GROUP CAPSTONE — TEAM OF 3</div>
        <h3>LearnEase — AI E-Learning Platform</h3>
        <div className="exp-role mono">PHP · MySQL · AI-Assisted Learning</div>
        <div className="exp-body">
          <p>
            LearnEase is an AI-powered e-learning platform built as our
            thesis capstone project, designed around NAT (National
            Achievement Test) exam preparation — with lesson management, an
            AI tutor chat, AI-generated quizzes, progress analytics, and
            separate role-based dashboards for students and teachers.
          </p>
          <p>
            <strong>My role</strong> focused on frontend design and system
            planning: I designed the interface, wrote the project
            documentation, mapped out the system flow, and built the data
            flow diagram (DFD) in EdrawMax that defined how information
            moved through the platform. I also proposed integrating AI into
            the system during our proposal defense — a direction the rest of
            the project was built around. Database work was handled by my
            groupmates.
          </p>
        </div>
        <div className="tags mono">
          <span>Frontend Design</span><span>Documentation</span><span>System Flow / DFD</span><span>PHP</span><span>MySQL</span>
        </div>
      </FadeIn>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...shots, ...shots].map((s, i) => (
            <div className="marquee-item" key={i}>
              <img src={s.src} alt={s.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <p className="capstone-note mono">
        Private academic project — not publicly hosted or on GitHub.
      </p>
    </section>
  )
}
