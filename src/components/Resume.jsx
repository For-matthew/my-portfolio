import FadeIn from './FadeIn.jsx'

const skillGroups = [
  { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap'] },
  { label: 'Backend / Data', items: ['PHP', 'MySQL', 'Node.js', 'Basic database concepts'] },
  { label: 'Tools', items: ['Git/GitHub', 'VS Code', 'Figma', 'Canva', 'WordPress', 'Vercel', 'Google Apps Script'] },
  { label: 'AI Tools', items: ['ChatGPT', 'Claude', 'Gemini', 'GitHub Copilot', 'Cursor'] },
  { label: 'System / Design', items: ['Responsive Design', 'UI/UX', 'System Analysis', 'DFD', 'Flowcharts', 'Use Case Diagrams'] },
]

export default function Resume() {
  return (
    <section id="resume">
      <FadeIn className="sec-head">
        <h2>Resume</h2>
        <span className="idx mono">02 / 08</span>
      </FadeIn>

      <FadeIn className="resume-sheet">
        <div className="resume-grid">
          {/* ---------- Sidebar ---------- */}
          <aside className="resume-sidebar">
            <div className="resume-photo">
              <img src="/images/profile-barong.png" alt="Matthew Fajardo" />
            </div>
            <h3 className="resume-name">Gabrielle Matthew Fajardo</h3>
            <p className="resume-role mono">Frontend / Web Developer</p>

            <div className="resume-contact">
              <a href="https://maps.google.com/?q=Las+Pi%C3%B1as+City,+Philippines" target="_blank" rel="noopener noreferrer">Las Piñas City, Philippines</a>
              <a href="tel:+639682189099">+63 968-218-9099</a>
              <a href="mailto:gabriellematthewfajardo@gmail.com">gabriellematthewfajardo@gmail.com</a>
              <a href="https://matthew-fajardo-frontend-web-developer.vercel.app" target="_blank" rel="noopener noreferrer">Portfolio ↗</a>
              <a href="https://www.linkedin.com/in/matthew-fajardo/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>

            <div className="resume-skills">
              <span className="resume-block-label mono">Core Skills</span>
              {skillGroups.map((group) => (
                <div className="resume-skill-group" key={group.label}>
                  <h4>{group.label}</h4>
                  <div className="resume-chips">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              className="resume-pdf-link"
              href="/Gabrielle-Matthew-Fajardo-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Gabrielle-Matthew-Fajardo-Resume.pdf"
            >
              Download full PDF ↓
            </a>
          </aside>

          {/* ---------- Main column ---------- */}
          <div className="resume-main">
            <div className="resume-block">
              <span className="resume-block-label mono">Summary</span>
              <p>
                Information Systems graduate with hands-on internship experience building and
                maintaining responsive websites and web applications. Proficient in modern
                front-end and back-end frameworks, version control, and agile collaboration,
                with a strong foundation in clean code practices and UI/UX principles. Seeking
                a Junior Web Developer role on a dynamic development team.
              </p>
            </div>

            <div className="resume-block">
              <span className="resume-block-label mono">Internship Experience</span>
              <div className="resume-entry">
                <div className="resume-entry-head">
                  <h4>Web Development and Digital Marketing Intern</h4>
                  <span className="resume-entry-date mono">Jan 2026 – May 2026</span>
                </div>
                <p className="resume-entry-sub">Getmeds Philippines, Inc. — Global Pharmaceutical Company, Manila</p>
                <ul>
                  <li>Contributed to the design and front-end development of company websites, covering visual design, content updates, site maintenance, and ongoing technical improvements.</li>
                  <li>Digitalized and automated manual departmental workflows using AI tools, Google Workspace, and Google Apps Script, replacing paper-based processes with system-based ones.</li>
                  <li>Managed and grew the company's social media presence, creating original content, marketing copy, and ad copy aligned with brand voice and platform compliance standards.</li>
                  <li>Conducted market, competitor, and audience research to inform content strategy, campaign direction, and audience targeting.</li>
                </ul>
              </div>
            </div>

            <div className="resume-block">
              <span className="resume-block-label mono">Education</span>
              <div className="resume-entry">
                <div className="resume-entry-head">
                  <h4>Bachelor of Science in Information Systems</h4>
                  <span className="resume-entry-date mono">2022 – 2026</span>
                </div>
                <p className="resume-entry-sub">Dr. Filemon C. Aguilar Memorial College of Las Piñas — Las Piñas City, Manila</p>
                <ul>
                  <li>Thesis: <em>LearnEase</em> — AI E-Learning Platform, "Study Anywhere Anytime"</li>
                  <li>Relevant coursework: Web Development, Systems Analysis and Design, Data Structures and Algorithms, Human-Computer Interaction, Artificial Intelligence</li>
                </ul>
              </div>
            </div>

            <div className="resume-block">
              <span className="resume-block-label mono">Certifications</span>
              <div className="resume-entry">
                <div className="resume-entry-head">
                  <h4>freeCodeCamp</h4>
                </div>
                <p className="resume-entry-sub">Responsive Web Design · JavaScript · Front End Development Libraries · English for Developers (A2, B1)</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
