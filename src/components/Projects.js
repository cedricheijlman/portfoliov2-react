import React, { useState } from "react";
import Project from "./Project";
import { showAll, frontend, backend } from "./projectObjects";
function Projects() {
  const [selected, setSelected] = useState("showAll");

  return (
    <section id="projects">
      <div data-aos="fade-left" class="projects__title">
        <h1>Projects</h1>
      </div>

      <div className="projectOptions">
        <a
          className={selected == "showAll" ? "selected" : ""}
          onClick={() => {
            setSelected("showAll");
          }}
        >
          Show All
        </a>
        <a
          className={selected == "frontEnd" ? "selected" : ""}
          onClick={() => {
            setSelected("frontEnd");
          }}
        >
          Front End
        </a>
        <a
          className={selected == "backEnd" ? "selected" : ""}
          onClick={() => {
            setSelected("backEnd");
          }}
        >
          Back End
        </a>
      </div>

      <div className="projectsRow">
        {selected == "showAll" &&
          showAll.map((project) => {
            return (
              <Project
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                linkSite={project.linkSite}
                linkGithub={project.linkGithub}
              />
            );
          })}
        {selected == "frontEnd" &&
          frontend.map((project) => {
            return (
              <Project
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                linkSite={project.linkSite}
                linkGithub={project.linkGithub}
              />
            );
          })}
        {selected == "backEnd" &&
          backend.map((project) => {
            return (
              <Project
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                linkSite={project.linkSite}
                linkGithub={project.linkGithub}
              />
            );
          })}
      </div>
    </section>
  );
}

export default Projects;
