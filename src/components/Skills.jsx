import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'

const skillGroups = [
  {
    title: 'Front-End Development',
    icon: '⌘',
    items: [
      ['HTML5', 'HTML'],
      ['CSS3', 'CSS'],
      ['JavaScript (ES6+)', 'JS'],
      ['React.js', 'React'],
      ['Tailwind CSS', 'TW'],
      ['Bootstrap', 'BS'],
    ],
  },
  {
    title: 'Back-End Development',
    icon: '⌁',
    items: [
      ['Node.js', 'Node'],
      ['PHP', 'PHP'],
    ],
  },
  {
    title: 'Tools & Practices',
    icon: '⚙',
    items: [
      ['Git / GitHub', 'Git'],
      ['VS Code', 'VS'],
      ['Canva', 'Canva'],
      ['Figma', 'Fig'],
      ['Responsive Design', 'RWD'],
      ['WordPress', 'WP'],
      ['Vercel', 'V'],
    ],
  },
  {
    title: 'AI Tools & Technologies',
    icon: '✦',
    items: [
      ['ChatGPT', 'AI'],
      ['Claude', 'CL'],
      ['Gemini', 'GE'],
      ['GitHub Copilot', 'CP'],
      ['Cursor', 'CU'],
    ],
  },
  {
    title: 'Other Skills',
    icon: '◈',
    items: [
      ['Basic SEO', 'SEO'],
      ['Social Media Management', 'SM'],
      ['Content Management', 'CMS'],
      ['Content Creation', 'CC'],
      ['Cross-Browser Testing', 'QA'],
      ['Debugging & Troubleshooting', 'DB'],
    ],
  },
  {
    title: 'Soft Skills',
    icon: '◎',
    items: [
      ['Problem-solving', 'PS'],
      ['Teamwork', 'TW'],
      ['Communication', 'COM'],
      ['Adaptability', 'AD'],
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="glow-blob glow-a"></div>
      <div className="glow-blob glow-b"></div>

      <FadeIn className="sec-head">
        <h2>Skills &amp; Experience</h2>
        <span className="idx mono">02 / 07</span>
      </FadeIn>

      <div className="skills-groups">
        {skillGroups.map((group, groupIndex) => (
          <FadeIn key={group.title} className="skill-group" delay={groupIndex * 0.04}>
            <div className="skill-group-head">
              <span className="skill-group-icon" aria-hidden="true">{group.icon}</span>
              <h3>{group.title}</h3>
            </div>

            <div className="skill-tiles">
              {group.items.map(([name, mark], index) => (
                <motion.div
                  key={name}
                  className={`skill-tile skill-tile-${(index % 4) + 1}`}
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                >
                  <span className="skill-tile-glow" aria-hidden="true"></span>
                  <span className="skill-mark" aria-hidden="true">{mark}</span>
                  <span className="skill-name">{name}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
