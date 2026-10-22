
function Projects() {
  const projects = [
    {
      title: 'Ticket Booking Website',
      description:
        'Designed an online ticket booking website using HTML, CSS and JavaScript.'
    },
    {
      title: 'Online Tourist Website',
      description:
        'Developed a tourist website using WordPress and Figma.'
    },
    {
      title: 'Learning Management System',
      description:
        'Designed a MERN stack project for learning management.'
    },
    {
      title: 'RoomEase',
      description:
        'Developed a hotel room booking system using React, Java Spring Boot and MySQL.'
    }
  ];

  return (
    <section className="section">
      <h1>My Projects</h1>
      <p>Here are some projects I have worked on.</p>

      <div className="card-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
