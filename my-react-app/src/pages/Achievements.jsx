
function Achievements() {
  const achievements = [
    'AWS Academy Graduate - AWS Academy Cloud Foundations',
    'Front End Web Developer Certification - Infosys Springboard',
    'UI/UX Design Internship Certification - WordPress and Figma',
    'Mendix Rapid Developer Certification',
    'Cyber Security Foundation Certification - Infosys Springboard'
  ];

  return (
    <section className="section">
      <h1>Achievements & Certifications</h1>
      <p>Courses and certifications I have completed.</p>

      <div className="card-grid">
        {achievements.map((item, index) => (
          <div className="card achievement" key={index}>
            <span></span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
