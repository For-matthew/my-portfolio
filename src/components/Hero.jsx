import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero bracket">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow mono">Information Systems Graduate</div>
        <h1>
          I build <em>interfaces</em> people actually enjoy using
          <span className="cursor"></span>
        </h1>
        <p className="role">
          Matthew Fajardo — Frontend Developer with a design eye, and real
          hands-on experience keeping a live admin system running.
        </p>
        <div className="coords mono">
          <div>LOCATION <span>Philippines</span></div>
          <div>FOCUS <span>Frontend Development</span></div>
          <div>BACKGROUND <span>BS Information Systems</span></div>
        </div>
      </motion.div>
      <div className="scroll-cue mono"><div className="ln"></div>SCROLL</div>
    </section>
  )
}
