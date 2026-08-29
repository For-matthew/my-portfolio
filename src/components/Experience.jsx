import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'
import Magnetic from './Magnetic.jsx'

const fccProjects = [
  { title: 'Product Landing Page', skill: 'Responsive Web Design', desc: 'A coffee-brand landing page built with fixed nav, hero, and a responsive feature grid.', image: '/images/fcc/product-landing-page.png', href: '/projects/product-landing-page.html' },
  { title: 'Survey Form', skill: 'Responsive Web Design', desc: 'A multi-field form with validation, radio groups, checkboxes, and a select menu.', image: '/images/fcc/survey-form.png', href: '/projects/survey-form.html' },
  { title: 'Technical Documentation Page', skill: 'Responsive Web Design', desc: 'A sticky-sidebar reference doc covering HTML, CSS, JavaScript, and workflow basics.', image: '/images/fcc/technical-documentation.png', href: '/projects/technical-documentation.html' },
  { title: 'Drum Machine', skill: 'JavaScript', desc: 'A playable drum pad app with keyboard support, active-state feedback, and a live display.', image: '/images/fcc/drum-machine.png', href: '/projects/drum-machine.html' },
  { title: 'Weather App', skill: 'JavaScript', desc: 'A city-based weather lookup using a live API, showing temperature, humidity, wind, and conditions.', image: '/images/fcc/weather-app.png', href: '/projects/weather-app.html' },
  { title: 'Photography Exhibit', skill: 'Front End Development Libraries', desc: 'A responsive photo gallery grid built with Tailwind CSS utility classes.', image: '/images/fcc/photography-exhibit.png', href: '/projects/photography-exhibit.html' },
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

        <div className="exp-categories">
          <div className="exp-category">
            <div className="exp-category-head">
              <span className="exp-category-badge mono">DEV</span>
              <h4>Web Development &amp; IT Support</h4>
            </div>
            <ul className="exp-list">
              <li>Contributed to the design and front-end development of company websites, including visual design, content updates, website maintenance, and ongoing technical improvements.</li>
              <li>Drove the digitalization and automation of manual departmental processes by transitioning workflows to fully digital, system-based solutions using AI, Google Workspace, and Google Apps Script to improve operational efficiency.</li>
              <li>Provided technical support and troubleshooting assistance across departments, helping employees resolve system, software, hardware, and other technology-related concerns.</li>
            </ul>
          </div>

          <div className="exp-category">
            <div className="exp-category-head">
              <span className="exp-category-badge mono">MKT</span>
              <h4>Digital Marketing &amp; Content</h4>
            </div>
            <ul className="exp-list">
              <li>Managed and grew the company's social media presence across multiple platforms, driving consistent follower growth through strategic content planning and audience engagement.</li>
              <li>Created original social media content, marketing copy, and advertising copy aligned with brand voice, business objectives, and platform compliance standards.</li>
              <li>Conducted market, competitor, audience, and media landscape research to inform content strategy, campaign direction, and audience targeting.</li>
            </ul>
          </div>

          <div className="exp-category">
            <div className="exp-category-head">
              <span className="exp-category-badge mono">OPS</span>
              <h4>Operations &amp; Documentation</h4>
            </div>
            <ul className="exp-list">
              <li>Supported inventory-related documentation, coordination, and administrative processes as part of cross-functional office operations.</li>
            </ul>
          </div>
        </div>

        <div className="tags mono">
          <span>Web Development</span><span>Automation</span><span>IT Support</span><span>Social Media</span><span>Content Creation</span><span>Market Research</span><span>Documentation</span>
        </div>
      </FadeIn>

      <FadeIn className="exp-tag mono" delay={0.1} style={{ marginTop: 56 }}>
        FREECODECAMP
      </FadeIn>

      <div className="fcc-grid">
        {fccProjects.map((p, i) => (
          <motion.a
            key={p.title}
            className="fcc-card"
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div className="fcc-image-wrap">
              <img src={p.image} alt={`${p.title} screenshot`} className="fcc-image" loading="lazy" />
            </div>
            <span className="fcc-skill mono">{p.skill}</span>
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
