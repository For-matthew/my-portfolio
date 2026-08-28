import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'
import Magnetic from './Magnetic.jsx'

const certs = [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    color: '#FF7A45',
    href: 'https://www.freecodecamp.org/certification/gabriellematthewfajardo/responsive-web-design-v9',
  },
  {
    title: 'JavaScript',
    issuer: 'freeCodeCamp',
    color: '#F2A93B',
    href: 'https://www.freecodecamp.org/certification/gabriellematthewfajardo/javascript-v9',
  },
  {
    title: 'Front End Development Libraries',
    issuer: 'freeCodeCamp',
    color: '#C1613D',
    href: 'https://www.freecodecamp.org/certification/gabriellematthewfajardo/front-end-development-libraries-v9',
  },
  {
    title: 'A2 English for Developers',
    issuer: 'freeCodeCamp',
    color: '#8FAE8B',
    href: 'https://www.freecodecamp.org/certification/gabriellematthewfajardo/a2-english-for-developers',
  },
  {
    title: 'B1 English for Developers',
    issuer: 'freeCodeCamp',
    color: '#8FAE8B',
    href: 'https://www.freecodecamp.org/certification/gabriellematthewfajardo/b1-english-for-developers',
  },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <FadeIn className="sec-head">
        <h2>Certifications</h2>
        <span className="idx mono">05 / 06</span>
      </FadeIn>

      <div className="cert-grid">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            className="cert-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="cert-badge" style={{ background: `${c.color}1F`, borderColor: c.color }}>
              <span style={{ color: c.color }}>✓</span>
            </div>
            <h3>{c.title}</h3>
            <p className="cert-issuer mono">{c.issuer}</p>
            <Magnetic as="a" className="cert-link mono" strength={10} href={c.href} target="_blank" rel="noopener noreferrer">
              Verify credential ↗
            </Magnetic>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
