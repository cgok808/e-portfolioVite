import React, { useContext } from "react";
import dashboardProject from "../assets/images/dashboard.png";
import ePort from "../assets/images/e-port.png";
import library from "../assets/images/library.png";
import { ThemeContext } from "../App";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      id: "library",
      title: "Library",
      subtitle: "React | JavaScript",
      description:
        "A responsive React e-commerce application displaying popular and recommended books. Includes full e-commerce functionality, mock API usage, and UX loading states.",
      imgSrc: library,
      imgAlt: "Library project",
      github: "https://github.com/cgok808/Library-Project-REACT",
      live: "https://library-react-cgok.netlify.app/",
    },
    {
      id: "dashboard",
      title: "Personal Dashboard",
      subtitle: "React | Vite | WeatherAPI",
      description:
        "Personal dashboard designed for my daily use. Utilizes Weather API to display local weather, has an adaptive wallpaper based on local time, integrates a persistent task tracker that you can manage, and features a unified search hub for instant access to Google, Reddit, Amazon, Spotify, and YouTube.",
      imgSrc: dashboardProject,
      imgAlt: "Personal dashboard project",
      github: "https://github.com/cgok808/homepage-Project",
      live: "https://chaylinshomepage.netlify.app/",
    },
    // {
    //   id: "eport",
    //   title: "E-Portfolio Template",
    //   subtitle: "HTML | CSS | JavaScript",
    //   description:
    //     "A responsive multi-platform portfolio built using semantic HTML5 and BEM-styled CSS. Client data replaced for privacy.",
    //   imgSrc: ePort,
    //   imgAlt: "E-Portfolio project",
    //   github: "https://github.com/cgok808/E-Portfolio-Example",
    //   live: "https://cgok808.github.io/E-Portfolio-Example/",
    // },
  ];

  return (
    <section id="projects" className="flex justify-center">
      <div className="container my-12">
        <div className="w-full max-w-5xl mx-auto px-3">
          <h1
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } text-center text-5xl mb-14 font-bold mt-28`}
          >
            Here are some of my <span className="text-cOrange">projects</span>
          </h1>

          <ul className="list-none p-0 m-0">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                subtitle={p.subtitle}
                description={p.description}
                imgSrc={p.imgSrc}
                imgAlt={p.imgAlt}
                github={p.github}
                live={p.live}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
