import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap, ScrollTrigger } from '../gsapSetup.js'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const bgRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

return (
    <section className="hero" ref={heroRef} aria-label="Introduction">
      <div className="hero-bg" ref={bgRef} aria-hidden="true">
        <video
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/portfolio-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay" aria-hidden="true"></div>
      </div>

      <div className="hero-inner">
        <motion.div className="hero-text" variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="eyebrow mono">Information Systems Graduate</motion.div>
          <motion.h1 variants={item}>
            I build <em>interfaces</em> people actually enjoy using
            <span className="cursor"></span>
          </motion.h1>
          <motion.p variants={item} className="role">
            Matthew Fajardo — Frontend Developer with a design eye, and real
            hands-on experience keeping a live admin system running.
          </motion.p>

          <motion.div variants={item} className="hero-tags">
            <span className="hero-tag">Frontend Web Developer</span>
            <span className="hero-tag hero-tag-status">Open to Work</span>
          </motion.div>

          <motion.div variants={item} className="coords mono">
            <div>LOCATION <span>Philippines</span></div>
            <div>FOCUS <span>Frontend Development</span></div>
            <div>BACKGROUND <span>BS Information Systems</span></div>
          </motion.div>

          <motion.div variants={item} className="hero-tools">
            <span className="hero-tools-label mono">Tools</span>
            <div className="hero-tools-row">
              {['VS Code', 'Vercel', 'GitHub', 'WordPress', 'EdrawMax', 'Figma'].map((tool) => (
                <span key={tool} className="hero-tool-chip">{tool}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="hero-actions">
            <a className="hero-secondary-link" href="#contact" aria-label="Get in touch">Get in touch →</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          aria-label="Profile photo"
        >
          <img src="/images/profile-toga.png" alt="Matthew Fajardo, frontend developer" />
        </motion.div>
      </div>
    </section>
  )
}
