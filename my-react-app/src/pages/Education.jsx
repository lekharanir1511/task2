
function Education() {
  const education = [
    {
      qualification: 'Bachelor of Engineering',
      institution: 'S.A. Engineering College',
      course: 'Computer Science Engineering',
      year: '2023 - 2027',
      details: 'CGPA: 9.29'
    },
    {
      qualification: 'Higher Secondary Education',
      institution: 'C.S.I. Bain School',
      course: 'HSC',
      year: '2021 - 2023',
      details: 'Percentage: 81%'
    },
    {
      qualification: 'SSLC',
      institution: 'C.S.I. Bain School',
      course: 'Secondary Education',
      year: '2020 - 2021',
      details: 'Pass'
    }
  ];

  return (
    <section className="section">
      <h1>Education</h1>
      <p>My academic background.</p>

      <div className="card-grid">
        {education.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.qualification}</h3>
            <p>{item.course}</p>
            <p>{item.institution}</p>
            <p>{item.year}</p>
            <strong>{item.details}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
