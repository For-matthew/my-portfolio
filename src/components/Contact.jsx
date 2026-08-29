import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn.jsx'
import Magnetic from './Magnetic.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: Placeholder lang ito for now. Kapag ready na tayo sa backend
    // (Vercel serverless function papuntang email service), papalitan natin
    // ito ng totoong fetch() call papunta sa /api/contact.
    setSent(true)
  }

  return (
    <section id="contact">
      <FadeIn className="sec-head">
        <h2>Contact</h2>
        <span className="idx mono">07 / 07</span>
      </FadeIn>
      <FadeIn className="contact-grid">
        <div>
          <h2>Let's build<br />something<br />together.</h2>
          <p className="sub">
            Open to frontend developer roles, freelance work, and interesting
            collaborations.
          </p>
          <div className="direct-links">
            <a href="mailto:gabriellematthewfajardo@gmail.com">gabriellematthewfajardo@gmail.com</a>
            <a href="tel:+639682189099">+63 968-218-9099</a>
            <a href="https://github.com/For-matthew" target="_blank" rel="noopener noreferrer">GitHub / For-matthew</a>
            <a href="https://www.linkedin.com/in/matthew-fajardo/" target="_blank" rel="noopener noreferrer">LinkedIn / matthew-fajardo</a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Juan Dela Cruz" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="juan@email.com" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required placeholder="Tell me about your project..."></textarea>
          </div>
          <Magnetic as={motion.button} className="submit-btn" type="submit" whileTap={{ scale: 0.97 }} strength={22}>
            Send message →
          </Magnetic>
          <p className="form-note mono">{sent ? 'Message sent. Thank you!' : ''}</p>
        </form>
      </FadeIn>
    </section>
  )
}
