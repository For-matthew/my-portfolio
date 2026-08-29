import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'
import Magnetic from './Magnetic.jsx'

const fccProjects = [
  { num: '01', title: 'Product Landing Page', desc: 'A coffee-brand landing page built with fixed nav, hero, and a responsive feature grid.', href: '/projects/product-landing-page.html' },
  { num: '02', title: 'Technical Documentation Page', desc: 'A sticky-sidebar reference doc covering HTML, CSS, JavaScript, and workflow basics.', href: '/projects/technical-documentation.html' },
  { num: '03', title: 'Book Inventory App', desc: 'A styled data table using attribute selectors to drive status colors and rating dots.', href: '/projects/book-inventory.html' },
  { num: '04', title: 'Survey Form', desc: 'A multi-field form with validation, radio groups, checkboxes, and a select menu.', href: '/projects/survey-form.html' },
]

export default function Experience() {
  return (
    <section id="experience">
      <FadeIn className="sec-head">
        <h2>Experience</h2>
        <span className="idx mono">03 / 07</span>
      </FadeIn>

      <FadeIn className="exp-card">
        <div className="exp-tag mono">INTERNSHIP / OJT</div>
        <h3>Web Development &amp; Digital Marketing Intern</h3>
        <div className="exp-role mono">Getmeds Philippines, Inc. — Global Pharmaceutical Company, Manila · Jan 2026 – May 2026</div>
        <div className="exp-body">
          <ul className="exp-list">
            <li>Contributed to the design and front-end development of company websites, including visual design, content updates, website maintenance, and ongoing technical improvements.</li>
            <li>Drove the digitalization and automation of manual departmental processes by transitioning workflows to fully digital, system-based solutions using AI, Google Workspace, and Google Apps Script to improve operational efficiency.</li>
            <li>Provided technical support and troubleshooting assistance across departments, helping employees resolve system, software, hardware, and other technology-related concerns.</li>
            <li>Managed and grew the company's social media presence across multiple platforms, driving consistent follower growth through strategic content planning and audience engagement.</li>
            <li>Created original social media content, marketing copy, and advertising copy aligned with brand voice, business objectives, and platform compliance standards.</li>
            <li>Conducted market, competitor, audience, and media landscape research to inform content strategy, campaign direction, and audience targeting.</li>
            <li>Supported inventory-related documentation, coordination, and administrative processes as part of cross-functional office operations.</li>
          </ul>
        </div>
        <div className="tags mono">
          <span>Web Development</span><span>Automation</span><span>IT Support</span><span>Social Media</span><span>Content Creation</span><span>Market Research</span><span>Documentation</span>
        </div>
      </FadeIn>

      <FadeIn className="exp-tag mono" delay={0.1} style={{ marginTop: 56 }}>
        FREECODECAMP — RESPONSIVE WEB DESIGN
      </FadeIn>

      <div className="fcc-grid">
        {fccProjects.map((p, i) => (
          <motion.a
            key={p.num}
            className="fcc-card"
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -3 }}
          >
            <div className="fcc-num mono">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <Magnetic as="span" className="fcc-link mono" strength={12}>View project ↗</Magnetic>
          </motion.a>
        ))}
      </div>

      <FadeIn className="exp-note">
        More projects <span>in progress</span> — check back soon, or reach out
        below to see recent work directly.
      </FadeIn>
    </section>
  )
}
