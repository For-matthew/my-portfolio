import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'

const skillGroups = [
  {
    title: 'Front-End Development',
    color: '#FF7A45',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap'],
  },
  {
    title: 'Back-End Development',
    color: '#C1613D',
    items: ['Node.js', 'PHP'],
  },
  {
    title: 'Tools & Practices',
    color: '#F2A93B',
    items: ['Git/GitHub', 'VS Code', 'Canva', 'Figma', 'Responsive Design', 'WordPress', 'Vercel'],
  },
  {
    title: 'AI Tools & Technologies',
    color: '#8FAE8B',
    items: ['ChatGPT', 'Claude', 'Gemini', 'GitHub Copilot'],
  },
  {
    title: 'Other Skills',
    color: '#D98E5C',
    items: ['Basic SEO', 'Social Media Management', 'Content Management', 'Content Creation', 'Cross-Browser Testing', 'Debugging & Troubleshooting'],
  },
  {
    title: 'Soft Skills',
    color: '#C99A6B',
    items: ['Problem-solving', 'Teamwork', 'Communication', 'Adaptability'],
  },
]

export default function Skills() {
  const [selected, setSelected] = useState(new Set())

  const toggle = (key) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  return (
    <section id="skills" className="skills-section">
      <div className="glow-blob glow-a"></div>
      <div className="glow-blob glow-b"></div>

      <FadeIn className="sec-head">
        <h2>Skills &amp; Experience</h2>
        <span className="idx mono">02 / 06</span>
      </FadeIn>
      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <FadeIn key={g.title} className="skill-card glass" delay={i * 0.05}>
            <div className="swatch" style={{ background: g.color }}></div>
            <h3>{g.title}</h3>
            <div className="skill-pills">
              {g.items.map((item) => {
                const key = `${g.title}-${item}`
                const isSelected = selected.has(key)
                return (
                  <motion.button
                    key={key}
                    type="button"
                    className={`skill-pill mono${isSelected ? ' selected' : ''}`}
                    onClick={() => toggle(key)}
                    animate={{ scale: isSelected ? 1.06 : 1 }}
                    whileHover={{ scale: isSelected ? 1.06 : 1.04 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    style={
                      isSelected
                        ? { background: `${g.color}26`, borderColor: g.color, color: '#F5EDE4' }
                        : undefined
                    }
                  >
                    {item}
                  </motion.button>
                )
              })}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
