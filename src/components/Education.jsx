import FadeIn from './FadeIn.jsx'

export default function Education() {
  return (
    <section id="education">
      <FadeIn className="sec-head">
        <h2>Education</h2>
        <span className="idx mono">06 / 08</span>
      </FadeIn>

      <FadeIn className="exp-card">
        <div className="exp-tag mono">2022 – 2026</div>
        <h3>Bachelor of Science in Information Systems</h3>
        <div className="exp-role mono">Dr. Filemon C. Aguilar Memorial College of Las Piñas — Las Piñas City, Manila</div>
        <div className="exp-body">
          <p>
            <strong>Relevant coursework:</strong> Systems Analysis &amp; Design,
            Web Development, Data Structures &amp; Algorithms, Information
            Systems Management, Business Process Management,
            Human-Computer Interaction (HCI), Information Security,
            Programming, Enterprise Information Systems, Artificial
            Intelligence.
          </p>
          <p>
            <strong>Thesis:</strong> "AI E-Learning Platform — Study Anywhere,
            Anytime" — Grade: 1.25 (Excellent).
          </p>
        </div>
        <div className="tags mono">
          <span>Dean's Lister</span>
        </div>
      </FadeIn>
    </section>
  )
}
