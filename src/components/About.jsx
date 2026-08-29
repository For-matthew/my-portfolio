import { useEffect, useRef } from 'react'
import FadeIn from './FadeIn.jsx'
import { gsap, ScrollTrigger } from '../gsapSetup.js'

export default function About() {
  const sectionRef = useRef(null)
  const portraitRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        portraitRef.current,
        { yPercent: -4, scale: 1.04 },
        {
          yPercent: 4,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef}>
      <FadeIn className="sec-head">
        <h2>About</h2>
        <span className="idx mono">01 / 07</span>
      </FadeIn>
      <FadeIn className="about-grid">
        <div className="portrait" style={{ overflow: 'hidden' }}>
          <img ref={portraitRef} src="/images/profile-barong.png" alt="Matthew Fajardo" className="portrait-parallax" />
        </div>
        <div className="about-copy">
          <p>
            Detail-oriented and highly motivated Information Systems
            graduate with hands-on internship experience building and
            maintaining responsive websites and web applications. Proficient
            in modern front-end and back-end frameworks, version control, and
            agile collaboration.
          </p>
          <p>
            I'm a quick learner with a strong foundation in problem-solving,
            clean code practices, and UI/UX principles — eager to contribute
            to a dynamic development team as a Junior Web Developer.
          </p>
          <div className="about-meta">
            <div>Role<span>Junior Web Developer</span></div>
            <div>Focus<span>Frontend &amp; Full-Stack Basics</span></div>
            <div>Languages<span>English (fluent), Filipino (native)</span></div>
            <div>Status<span>Open to Work</span></div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
