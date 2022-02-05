import React from "react";

function Project({ name, description, technologies }) {
  return (
    <div className="project__item">
      <img src="logo512.png" />
      <div className="project__info">
        <h2>{name}</h2>
        <h4>About this project</h4>
        <p>{description}</p>
        <h4>Technologies</h4>
        <div className="project__technologiesRow">
          {technologies.map((technology) => {
            return <p>{technology}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
