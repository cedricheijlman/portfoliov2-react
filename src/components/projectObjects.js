let allProjects = [
  {
    type: "frontend",
    name: "React Movie Finder",
    description:
      "A Frontend application where you can search for movies, their info and cast members.",
    technologies: ["HTML/CSS", "Javascript", "React", "The Movie Database Api"],
    linkSite: "https://reactmoviefinder3.netlify.app/",
    linkGithub: "https://github.com/cedricheijlman/react-movie-search-site",
  },
  {
    type: "backend",
    name: "Chat Application (Discord Inspired)",
    description:
      "A fullstack chat application where you can message your friends, make servers where you can chat with a whole group at once, friendship system included.",
    technologies: [
      "HTML/CSS",
      "Javascript",
      "React",
      "Node.js (Express)",
      "MongoDB (Mongoose)",
      "Socket.io (Websockets)",
    ],
    linkSite: "https://discordcloneee.netlify.app/login",
    linkGithub: "https://github.com/cedricheijlman/discord-V2-MERN",
  },
];

let showAll = allProjects;
let frontend = allProjects.filter((project) => project.type == "frontend");
let backend = allProjects.filter((project) => project.type == "backend");
export { showAll, frontend, backend };
