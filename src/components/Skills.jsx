import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'

const skills = [
  { name: 'JavaScript', desc: 'Core language for interactivity, DOM manipulation, and client-side logic.', level: 90, color: 'var(--accent)' },
  { name: 'HTML & CSS', desc: 'Semantic markup, responsive layouts, and detail-oriented styling.', level: 92, color: 'var(--amber)' },
  { name: 'PHP', desc: 'Server-side logic and admin-facing tools built around real business needs.', level: 75, color: 'var(--terracotta)' },
  { name: 'Java', desc: 'Comfortable working with Java for backend logic and coursework projects.', level: 60, color: '#D98E5C' },
  { name: 'Admin & CMS Systems', desc: 'Hands-on experience maintaining a live admin panel for pricing and product content.', level: 80, color: 'var(--sage)' },
  { name: 'Responsive UI Design', desc: 'Designing layouts that hold up cleanly across screen sizes.', level: 78, color: '#C99A6B' },
]

export default function Skills() {
  return (
    <section id="skills">
      <FadeIn className="sec-head">
        <h2>Skills &amp; Experience</h2>
        <span className="idx mono">02 / 04</span>
      </FadeIn>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <FadeIn key={s.name} className="skill-card" delay={i * 0.05}>
            <div className="swatch" style={{ background: s.color }}></div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <div className="bar">
              <motion.i
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ background: s.color }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
