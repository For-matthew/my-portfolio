import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-mark"><span className="brk">{'</>'}</span> MATTHEW FAJARDO</div>
      <div className="nav-links">
        <a href="#about"><span>01</span> About</a>
        <a href="#skills"><span>02</span> Skills</a>
        <a href="#experience"><span>03</span> Experience</a>
        <a href="#education"><span>04</span> Education</a>
        <a href="#contact"><span>05</span> Contact</a>
      </div>
    </nav>
  )
}
