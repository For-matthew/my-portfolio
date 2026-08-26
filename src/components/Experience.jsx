import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'

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
        <span className="idx mono">03 / 05</span>
      </FadeIn>

      <FadeIn className="exp-card">
        <div className="exp-tag mono">INTERNSHIP / OJT</div>
        <h3>Digital Marketing Associate</h3>
        <div className="exp-role mono">Getmeds Philippines, Inc. — Global Pharmaceutical Company, Manila · Jan 2026 – May 2026</div>
        <div className="exp-body">
          <ul className="exp-list">
            <li>Managed and grew the company's social media presence across multiple platforms, driving consistent follower growth through content planning and audience engagement strategies.</li>
            <li>Created original content, marketing copy, and ad copy for social media posts and campaigns, aligned with brand voice and compliance standards.</li>
            <li>Conducted market and audience research to inform content direction and campaign targeting.</li>
            <li>Assisted in website design and front-end development tasks, contributing to the maintenance and visual updates of company web pages.</li>
            <li>Supported inventory-related documentation and coordination as part of cross-functional office tasks.</li>
          </ul>
        </div>
        <div className="tags mono">
          <span>Social Media</span><span>Content Creation</span><span>Market Research</span><span>Web Development</span><span>Documentation</span>
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
            <span className="fcc-link mono">View project ↗</span>
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
