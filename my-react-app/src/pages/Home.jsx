
import { Link } from 'react-router-dom';
import profile from '../assets/image.png';

function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <p className="greeting">Hey,</p>

        <h1>
          <span> I'm Lekha Rani R</span>
          
         
        </h1>

        <p className="intro">
          I'm a Computer Science Engineering student. I enjoy creating beautiful websites using
          HTML, CSS and React.
        </p>

        <div className="home-buttons">
          <Link to="/about" className="btn primary">
            About Me
          </Link>

          <Link to="/projects" className="btn secondary">
            Browse Projects
          </Link>
        </div>
      </div>

      <div className="profile-circle">
        <img src={profile} alt="Lekha's profile" />
      </div>
    </section>
  );
}

export default Home;
