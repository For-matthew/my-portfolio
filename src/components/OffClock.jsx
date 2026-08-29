import FadeIn from './FadeIn.jsx'

export default function OffClock() {
  return (
    <section id="off-clock">
      <FadeIn className="sec-head">
        <h2>Off the Clock</h2>
      </FadeIn>
      <FadeIn className="off-clock">
        <a
          className="off-art"
          href="/images/cookery-nc-ii.png"
          target="_blank"
          rel="noreferrer"
          aria-label="View Cookery NC II Certificate of Completion"
        >
          <img
            src="/images/cookery-nc-ii.png"
            alt="Cookery NC II and Bread & Pastry Production NC II Certificate of Completion"
          />
          <span className="off-art-label mono">VIEW CERTIFICATE ↗</span>
        </a>

        <div className="off-copy">
          <p>
            Outside of code, I'm usually in the kitchen. I completed training in
            Cookery NC II and Bread & Pastry Production NC II, experiences that
            helped me develop discipline, precision, patience, and attention to detail.
          </p>
          <div className="badge mono">Cookery NC II — Certificate of Completion</div>
        </div>
      </FadeIn>
    </section>
  )
}
