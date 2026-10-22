
function About() {
  return (
    <section className="section">
      <h1>About Me</h1>

      <p className="about-text">
        Hi! I'm Lekha, a Computer Science Engineering student
        interested in frontend development and UI/UX design.
        I enjoy designing user-friendly websites and learning
        new technologies. I have also worked on full-stack
        development projects using React, Java and MySQL.
      </p>

      <h2>Technical Skills</h2>

      <div className="card-grid">
        <div className="card">
          <h3>Frontend</h3>
          <p>HTML, CSS, React</p>
        </div>

        <div className="card">
          <h3>Programming</h3>
          <p>JavaScript, Java Basics, C Basics, Python Basics</p>
        </div>

        <div className="card">
          <h3>Design Tools</h3>
          <p>Figma, Canva, WordPress</p>
        </div>
      </div>

      <h2>Internship Experience</h2>

      <div className="card">
        <h3>UI/UX Design Intern - Detqel</h3>
        <p>June - July 2025</p>
        <p>
          Gained practical experience in user research,
          wireframing, prototyping and designing user-friendly
          interfaces using Figma and WordPress.
        </p>
      </div>

      <div className="card">
        <h3>Full Stack Java Development</h3>
        <p>May - June 2026</p>
        <p>
          Completed a full-stack Java development project.
        </p>
      </div>
    </section>
  );
}

export default About;
