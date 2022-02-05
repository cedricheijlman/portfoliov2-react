let allProjects = [
  {
    type: "frontend",
    name: "Project 1",
    description: "sjkfsjfaisfi",
    technologies: ["nodeJS", "Express", "React"],
  },
  {
    type: "backend",
    name: "Project 2",
    description: "sjkfsjfaisfi",
    technologies: ["nodeJS", "Express", "HTML", "React"],
  },
];

let showAll = allProjects;
let frontend = allProjects.filter((project) => project.type == "frontend");
let backend = allProjects.filter((project) => project.type == "backend");
export { showAll, frontend, backend };
