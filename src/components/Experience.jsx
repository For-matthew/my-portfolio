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
        <span className="idx mono">03 / 04</span>
      </FadeIn>

      <FadeIn className="exp-card">
        <div className="exp-tag mono">FEATURED — OJT PROJECT</div>
        <h3>Company Website Design &amp; Admin System Management</h3>
        <div className="exp-role mono">On-the-Job Training · Frontend &amp; Systems</div>
        <div className="exp-body">
          <p>
            Designed the company's website from the ground up, then handed the
            build over to the IT team for deployment. Rather than stepping
            away after handoff, I stayed on as the person responsible for the{' '}
            <strong>admin system</strong> that kept the site current.
          </p>
          <p>
            Whenever the company updated a product's price or swapped in new
            product imagery, I made those changes directly through the admin
            panel — keeping the live site accurate without needing a developer
            to step in every time.
          </p>
        </div>
        <div className="tags mono">
          <span>HTML/CSS</span><span>JavaScript</span><span>PHP</span><span>Admin Systems</span>
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
