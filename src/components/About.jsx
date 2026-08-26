import FadeIn from './FadeIn.jsx'

export default function About() {
  return (
    <section id="about">
      <FadeIn className="sec-head">
        <h2>About</h2>
        <span className="idx mono">01 / 04</span>
      </FadeIn>
      <FadeIn className="about-grid">
        <div className="portrait bracket">
          <span className="comment-label">about.jsx</span>
        </div>
        <div className="about-copy">
          <p>
            I took up Information Systems, but it was the front end that really
            pulled me in — the part of a system people actually see and touch.
            I like the challenge of making something that's technically solid
            also feel simple to use.
          </p>
          <p>
            During my OJT, I designed a company website from scratch and handed
            it off to the IT team — then ended up staying on as the one
            managing the admin system behind it. Whenever the company changed a
            product's price or swapped out a product image, I was the one
            updating it directly in the admin panel. That's where I learned
            that good frontend work doesn't stop at launch — someone has to
            live with it.
          </p>
          <div className="about-meta">
            <div>Education<span>BS Information Systems</span></div>
            <div>Focus<span>Frontend Development</span></div>
            <div>Backend (familiar)<span>PHP, Java</span></div>
            <div>Certification<span>NC II — Cookery</span></div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
