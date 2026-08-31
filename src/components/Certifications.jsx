import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'

const certs = [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    color: '#FF7A45',
    image: '/images/certs/responsive-web-design.png',
    href: 'https://www.freecodecamp.org/certification/gabriellematthewfajardo/responsive-web-design-v9',
  },
  {
    title: 'JavaScript',
    issuer: 'freeCodeCamp',
    color: '#F2A93B',
    image: '/images/certs/javascript.png',
    href: 'https://www.freecodecamp.org/certification/gabriellematthewfajardo/javascript-v9',
  },
  {
    title: 'Front End Development Libraries',
    issuer: 'freeCodeCamp',
    color: '#C1613D',
    image: '/images/certs/front-end-development-libraries.png',
    href: 'https://www.freecodecamp.org/certification/gabriellematthewfajardo/front-end-development-libraries-v9',
  },
  {
    title: 'A2 English for Developers',
    issuer: 'freeCodeCamp',
    color: '#8FAE8B',
    image: '/images/certs/a2-english-for-developers.png',
    href: 'https://www.freecodecamp.org/certification/gabriellematthewfajardo/a2-english-for-developers',
  },
  {
    title: 'B1 English for Developers',
    issuer: 'freeCodeCamp',
    color: '#8FAE8B',
    image: '/images/certs/b1-english-for-developers.png',
    href: 'https://www.freecodecamp.org/certification/gabriellematthewfajardo/b1-english-for-developers',
  },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <FadeIn className="sec-head">
        <h2>Certifications</h2>
        <span className="idx mono">07 / 08</span>
      </FadeIn>

      <div className="cert-grid">
        {certs.map((c, i) => (
          <motion.a
            key={c.title}
            className="cert-card"
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div className="cert-image-wrap">
              <img src={c.image} alt={`${c.title} certificate`} className="cert-image" />
              <div className="cert-image-overlay" style={{ background: `${c.color}22` }}></div>
            </div>
            <h3>{c.title}</h3>
            <p className="cert-issuer mono">{c.issuer}</p>
            <span className="cert-link mono">View credential ↗</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
