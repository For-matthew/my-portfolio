import FadeIn from './FadeIn.jsx'

const skillGroups = [
  {
    title: 'Front-End Development',
    color: 'var(--accent)',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Back-End Development',
    color: 'var(--terracotta)',
    items: ['Node.js', 'PHP'],
  },
  {
    title: 'Tools & Practices',
    color: 'var(--amber)',
    items: ['Git/GitHub', 'VS Code', 'Canva', 'Figma', 'Responsive Design', 'WordPress', 'Vercel'],
  },
  {
    title: 'AI Tools & Technologies',
    color: 'var(--sage)',
    items: ['ChatGPT', 'Claude', 'Gemini', 'GitHub Copilot', 'Cursor'],
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
  return (
    <section id="skills">
      <FadeIn className="sec-head">
        <h2>Skills &amp; Experience</h2>
        <span className="idx mono">02 / 05</span>
      </FadeIn>
      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <FadeIn key={g.title} className="skill-card" delay={i * 0.05}>
            <div className="swatch" style={{ background: g.color }}></div>
            <h3>{g.title}</h3>
            <div className="skill-pills">
              {g.items.map((item) => (
                <span key={item} className="skill-pill mono">{item}</span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
