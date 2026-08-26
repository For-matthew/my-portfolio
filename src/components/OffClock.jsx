import FadeIn from './FadeIn.jsx'

export default function OffClock() {
  return (
    <section id="off-clock">
      <FadeIn className="sec-head">
        <h2>Off the Clock</h2>
      </FadeIn>
      <FadeIn className="off-clock">
        <div className="off-art bracket">
          <span className="comment-label">kitchen.jsx</span>
        </div>
        <div className="off-copy">
          <p>
            Outside of code, I'm usually in the kitchen. I took Cookery in
            senior high and still bake and cook regularly — there's a similar
            kind of focus in both: follow the process closely, and small
            details end up mattering a lot.
          </p>
          <div className="badge mono">NC II Cookery Certified</div>
        </div>
      </FadeIn>
    </section>
  )
}
