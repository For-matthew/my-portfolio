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
      // Subtle parallax: background gradient drifts slower than scroll,
      // giving the hero a bit of depth as the person scrolls past it.
      gsap.to(bgRef.current, {
        yPercent: 18,
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
    <section className="hero bracket" ref={heroRef}>
      <div className="hero-bg" ref={bgRef} aria-hidden="true"></div>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="eyebrow mono">Information Systems Graduate</motion.div>
        <motion.h1 variants={item}>
          I build <em>interfaces</em> people actually enjoy using
          <span className="cursor"></span>
        </motion.h1>
        <motion.p variants={item} className="role">
          Matthew Fajardo — Frontend Developer with a design eye, and real
          hands-on experience keeping a live admin system running.
        </motion.p>
        <motion.div variants={item} className="coords mono">
          <div>LOCATION <span>Philippines</span></div>
          <div>FOCUS <span>Frontend Development</span></div>
          <div>BACKGROUND <span>BS Information Systems</span></div>
        </motion.div>
      </motion.div>
      <div className="scroll-cue mono"><div className="ln"></div>SCROLL</div>
    </section>
  )
}
