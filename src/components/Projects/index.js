import React from "react";
import { project } from "./data";

function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <h1>Projects</h1>
        </div>
        <div className="card">
          {project.map((project) => (
            <a href={project.link} key={project.image}>
              <div className="container">
                <div>
                  <h2>{project.description}</h2>
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
