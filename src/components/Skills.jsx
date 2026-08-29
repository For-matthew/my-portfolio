import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'

const BrandIcon = ({ name }) => {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true };
  const icons = {
    'Git / GitHub': <svg {...common}><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.51-.29-5.15-1.26-5.15-5.59 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .94-.3 3.09 1.16A10.7 10.7 0 0 1 12 6.66c.95 0 1.9.13 2.79.39 2.15-1.46 3.09-1.16 3.09-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.34-2.65 5.29-5.17 5.57.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" fill="currentColor"/></svg>,
    'VS Code': <svg {...common}><path d="m4.2 6.3 3.2-2.55L17.9 12 7.4 20.25 4.2 17.7 10.5 12 4.2 6.3Z" fill="currentColor"/><path d="m17.9 3.75 2.2 1.1v14.3l-2.2 1.1-7.4-8.25 7.4-8.25Z" fill="currentColor" opacity=".62"/></svg>,
    Canva: <svg {...common}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M15.6 9.2c-.8-.9-2-1.45-3.35-1.45-2.45 0-4.3 1.8-4.3 4.25s1.85 4.25 4.3 4.25c1.35 0 2.55-.55 3.35-1.45" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    Figma: <svg {...common}><path d="M9 2.2h3v6.1H9a3.05 3.05 0 1 1 0-6.1Zm3 0h3a3.05 3.05 0 1 1 0 6.1h-3V2.2Zm0 6.1h3a3.05 3.05 0 1 1 0 6.1h-3V8.3ZM9 8.3h3v6.1H9a3.05 3.05 0 1 1 0-6.1Zm0 6.1h3v3.05a3.05 3.05 0 1 1-3-3.05Z" fill="currentColor"/></svg>,
    ChatGPT: <svg {...common}><path d="M12 3.2a3.6 3.6 0 0 1 6.25 2.9 3.6 3.6 0 0 1 1.12 6.65 3.6 3.6 0 0 1-3.35 5.93 3.6 3.6 0 0 1-6.3 1.15 3.6 3.6 0 0 1-5.1-4.7 3.6 3.6 0 0 1 .83-6.7A3.6 3.6 0 0 1 12 3.2Z" stroke="currentColor" strokeWidth="1.25"/><path d="m8.2 8.2 7.6 4.4M8.2 15.8l7.6-4.4M12 4.1v8.8M12 11.2l3.8 2.2M12 11.2 8.2 13.4" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round"/></svg>,
    Claude: <svg {...common}><path d="M6.3 5.2 9.1 12 6.3 18.8M17.7 5.2 14.9 12l2.8 6.8M10.1 4.2h3.8M10.1 19.8h3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    Gemini: <svg {...common}><path d="M12 2.7c.9 4.3 3.1 7.4 7.3 9.3-4.2 1.9-6.4 5-7.3 9.3-.9-4.3-3.1-7.4-7.3-9.3C8.9 10.1 11.1 7 12 2.7Z" fill="currentColor"/></svg>,
    'GitHub Copilot': <svg {...common}><path d="M4.2 6.8 12 3.5l7.8 3.3v8.4L12 18.5l-7.8-3.3V6.8Z" stroke="currentColor" strokeWidth="1.5"/><path d="M8.2 10.1h.01M15.8 10.1h.01M8.5 13.7c2.1 1.3 4.9 1.3 7 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
    Cursor: <svg {...common}><path d="m5 3 13.5 8.2-6.1 1.35L15.7 19 12.9 20.3 9.7 14 5 18.3V3Z" fill="currentColor"/></svg>,
    HTML5: <svg {...common}><path d="m4 3 1.3 15.1L12 20.2l6.7-2.1L20 3H4Zm11.9 4H8.1l.2 2h7.4l-.5 5.8-3.2 1-3.2-1-.2-2h2l.1.8 1.3.4 1.3-.4.2-2H8.8L8.4 7h7.5Z" fill="currentColor"/></svg>,
    CSS3: <svg {...common}><path d="m4 3 1.3 15.1L12 20.2l6.7-2.1L20 3H4Zm11.5 4H8.4l.2 2h6.7l-.4 5.2-2.9.9-2.9-.9-.2-1.7h2l.1.7 1 .3 1-.3.2-2H8.8L8.4 7h7.4l-.3 0Z" fill="currentColor"/></svg>,
    'JavaScript (ES6+)': <svg {...common}><rect x="4" y="4" width="16" height="16" rx="1.5" fill="currentColor"/><path d="M9.1 10v5.2c0 .8-.35 1.2-1.05 1.2-.5 0-.9-.18-1.3-.52l-.7 1.15c.57.52 1.28.78 2.08.78 1.57 0 2.55-.93 2.55-2.5V10H9.1Zm4.1 5.4c.58.77 1.42 1.15 2.55 1.15 1.43 0 2.35-.77 2.35-1.94 0-.98-.53-1.52-1.77-2.05l-.4-.17c-.56-.24-.8-.4-.8-.68 0-.26.22-.47.65-.47.47 0 .86.2 1.17.58l.97-.95c-.55-.64-1.25-.94-2.15-.94-1.37 0-2.26.8-2.26 1.9 0 .95.55 1.5 1.68 1.98l.42.18c.58.25.84.42.84.74 0 .3-.27.51-.75.51-.62 0-1.12-.28-1.53-.84l-.97.99Z" fill="#191714"/></svg>,
  }
  return icons[name] || <svg {...common}><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6"/><path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
}

const skillGroups = [
  {
    title: 'Front-End Development', icon: '⌘', items: [['HTML5','HTML5'],['CSS3','CSS3'],['JavaScript (ES6+)','JavaScript (ES6+)'],['React.js','React.js'],['Tailwind CSS','Tailwind CSS'],['Bootstrap','Bootstrap']],
  },
  { title: 'Back-End Development', icon: '⌁', items: [['Node.js','Node.js'],['PHP','PHP']], },
  { title: 'Tools & Practices', icon: '⚙', items: [['Git / GitHub','Git / GitHub'],['VS Code','VS Code'],['Canva','Canva'],['Figma','Figma'],['Responsive Design','Responsive Design'],['WordPress','WordPress'],['Vercel','Vercel']], },
  { title: 'AI Tools & Technologies', icon: '✦', items: [['ChatGPT','ChatGPT'],['Claude','Claude'],['Gemini','Gemini'],['GitHub Copilot','GitHub Copilot'],['Cursor','Cursor']], },
  { title: 'Other Skills', icon: '◈', items: [['Basic SEO','Basic SEO'],['Social Media Management','Social Media Management'],['Content Management','Content Management'],['Content Creation','Content Creation'],['Cross-Browser Testing','Cross-Browser Testing'],['Debugging & Troubleshooting','Debugging & Troubleshooting']], },
  { title: 'Soft Skills', icon: '◎', items: [['Problem-solving','Problem-solving'],['Teamwork','Teamwork'],['Communication','Communication'],['Adaptability','Adaptability']], },
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
              {group.items.map(([name, iconName], index) => (
                <motion.div
                  key={name}
                  className={`skill-tile skill-tile-${(index % 4) + 1}`}
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                >
                  <span className="skill-tile-glow" aria-hidden="true"></span>
                  <span className="skill-mark" aria-hidden="true"><BrandIcon name={iconName} /></span>
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
