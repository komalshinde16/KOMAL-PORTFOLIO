// const Skills = () => {
//   return (
//     <section id="skills" style={{height:"100vh"}}>
//       <h1>Skills</h1>
//     </section>
//   );
// };

// export default Skills;




const Skills = () => {
  const skills = {
    Backend: [
      "Java",
      "Spring Boot",
      "JDBC",
      "Hibernate",
      "REST API",
      "Maven",
    ],

    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Material UI",
    ],

    Database: [
      "MySQL",
      "SQL",
    ],

    Tools: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
    ],

    
  };

  return (
    <section id="skills" className="skills-section">
      <h1>My Skills</h1>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h2>{category}</h2>

          <div className="skills-grid">
            {items.map((skill) => (
              <div key={skill} className="skill-card">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;