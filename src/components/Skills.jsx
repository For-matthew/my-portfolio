import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'
import { SkillIcon } from '../skillIcons.jsx'

const skillGroups = [
  {
    title: 'Front-End Development',
    icon: '⌘',
    items: [
      ['HTML5', 'HTML', 'html5'],
      ['CSS3', 'CSS', 'css3'],
      ['JavaScript (ES6+)', 'JS', 'javascript'],
      ['React.js', 'React', 'react'],
      ['Tailwind CSS', 'TW', 'tailwind'],
      ['Bootstrap', 'BS', 'bootstrap'],
    ],
  },
  {
    title: 'Back-End Development',
    icon: '⌁',
    items: [
      ['Node.js', 'Node', 'nodejs'],
      ['PHP', 'PHP', 'php'],
    ],
  },
  {
    title: 'Tools & Practices',
    icon: '⚙',
    items: [
      ['Git / GitHub', 'Git', 'git'],
      ['VS Code', 'VS'],
      ['Canva', 'Canva'],
      ['Figma', 'Fig', 'figma'],
      ['Responsive Design', 'RWD'],
      ['WordPress', 'WP', 'wordpress'],
      ['Vercel', 'V', 'vercel'],
    ],
  },
  {
    title: 'AI Tools & Technologies',
    icon: '✦',
    items: [
      ['ChatGPT', 'AI'],
      ['Claude', 'CL', 'claude'],
      ['Gemini', 'GE', 'gemini'],
      ['GitHub Copilot', 'CP', 'copilot'],
      ['Cursor', 'CU', 'cursor'],
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
        <h2>Skills & Experience</h2>
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
              {group.items.map(([name, mark, iconSlug], index) => (
                <motion.div
                  key={name}
                  className={`skill-tile skill-tile-${(index % 4) + 1}`}
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                  aria-label={`${name} skill`}
                >
                  <span className="skill-tile-glow" aria-hidden="true"></span>
                  <span className="skill-mark" aria-hidden="true">
                    {iconSlug ? <SkillIcon slug={iconSlug} className="skill-icon" /> : mark}
                  </span>
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