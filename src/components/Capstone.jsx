import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'

const shots = [
  {
    src: '/images/capstone/landing-hero.png',
    title: 'Platform Overview',
    description: 'A clear starting point for navigating the learning experience.',
    short: 'Overview',
  },
  {
    src: '/images/capstone/features.png',
    title: 'AI Features',
    description: 'AI-powered learning tools presented through a focused interface.',
    short: 'Features',
  },
  {
    src: '/images/capstone/ai-tutor.png',
    title: 'AI Tutor',
    description: 'Interactive chat experience for personalized learning support.',
    short: 'AI Tutor',
  },
  {
    src: '/images/capstone/review-materials.png',
    title: 'Review Materials',
    description: 'A structured space for accessing and working through study materials.',
    short: 'Resources',
  },
  {
    src: '/images/capstone/profile.png',
    title: 'User Profile',
    description: 'Profile and account management designed around the student experience.',
    short: 'Profile',
  },
]

const features = [
  ['01', 'AI Tutor', 'Interactive AI-assisted learning support'],
  ['02', 'Smart Quizzes', 'AI-generated practice and assessment'],
  ['03', 'Progress Analytics', 'Learning progress and performance tracking'],
  ['04', 'Role-Based UX', 'Separate student and teacher experiences'],
]

export default function Capstone() {
  const [active, setActive] = useState(0)
  const current = shots[active]

  const next = () => setActive((value) => (value + 1) % shots.length)
  const previous = () => setActive((value) => (value - 1 + shots.length) % shots.length)

  return (
    <section id="capstone" className="featured-project-section">
      <FadeIn className="sec-head">
        <div>
          <span className="section-kicker mono">SELECTED WORK</span>
          <h2>Featured Project</h2>
        </div>
        <span className="idx mono">04 / 07</span>
      </FadeIn>

      <FadeIn className="featured-project-intro">
        <div className="featured-project-copy">
          <div className="project-label mono">LEARN EASE</div>
          <h3>AI-Powered E-Learning Platform</h3>
          <p className="project-lead">
            A learning platform designed around accessible study, AI-assisted practice,
            and clear user experiences for students and teachers.
          </p>
          <p>
            My contribution focused on frontend design, system planning, documentation,
            and data-flow modeling. I translated the product idea into interfaces that
            keep learning tools, navigation, and role-based experiences easy to follow.
          </p>
          <div className="project-meta mono">
            <span>PHP</span><span>MySQL</span><span>AI-ASSISTED LEARNING</span>
          </div>
        </div>

        <div className="project-features">
          {features.map(([number, title, description]) => (
            <div className="project-feature" key={number}>
              <span className="project-feature-number mono">{number}</span>
              <div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="interface-showcase" delay={0.08}>
        <div className="interface-head">
          <div>
            <span className="section-kicker mono">INTERFACE PREVIEW</span>
            <h3>A closer look at the system</h3>
          </div>
          <div className="interface-controls">
            <button type="button" onClick={previous} aria-label="Previous interface">←</button>
            <button type="button" onClick={next} aria-label="Next interface">→</button>
            <span className="interface-counter mono">0{active + 1} — 0{shots.length}</span>
          </div>
        </div>

        <div className="workflow-visualizer" aria-label="LearnEase interface sequence">
          <div className="workflow-line" aria-hidden="true">
            <span className="workflow-progress" style={{ width: `${(active / (shots.length - 1)) * 100}%` }} />
          </div>
          <div className="workflow-items">
            {shots.map((shot, index) => (
              <button
                type="button"
                key={shot.short}
                className={`workflow-item ${index === active ? 'active' : ''}`}
                onClick={() => setActive(index)}
                aria-label={`View ${shot.title}`}
              >
                <span className="workflow-number mono">0{index + 1}</span>
                <span>{shot.short}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="showcase-stage">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.src}
              className="showcase-image-wrap"
              initial={{ opacity: 0, x: 35, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -35, scale: 0.985 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={current.src} alt={current.title} />
              <div className="showcase-image-shine" aria-hidden="true" />
            </motion.div>
          </AnimatePresence>

          <div className="showcase-caption">
            <div>
              <span className="mono">SCREEN 0{active + 1}</span>
              <h4>{current.title}</h4>
            </div>
            <p>{current.description}</p>
          </div>
        </div>

        <div className="showcase-dots" aria-label="Interface slides">
          {shots.map((shot, index) => (
            <button
              type="button"
              key={shot.title}
              className={index === active ? 'active' : ''}
              onClick={() => setActive(index)}
              aria-label={`Go to ${shot.title}`}
            />
          ))}
        </div>
      </FadeIn>

      <p className="capstone-note mono">
        Selected work · frontend design, system planning, documentation, and data-flow modeling.
      </p>
    </section>
  )
}
