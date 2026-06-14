import "./Hero.css";
import profile from "../assets/komal.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <div className="welcome">👋 Welcome to my Portfolio</div>

        <h1>
          Hi, I'm
          <br />
          <span>Komal Shinde</span>
        </h1>

        <h2>
          Full Stack Java Developer
          <span> | ENTC Engineer</span>
        </h2>

        <p>
          Passionate Full Stack Java Developer with experience in Java, Spring
          Boot, React and MySQL.
        </p>
      </div>

      <div className="hero-right">
        <div className="glow"></div>

        <img src={profile} alt="Komal Shinde" />
      </div>
    </section>
  );
};

export default Hero;
