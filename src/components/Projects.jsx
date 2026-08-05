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
      title: "Studio Ghibli Library",
      subtitle: "React | Vite | Tailwind CSS | React Router",
      description: "A responsive React storefront app for browsing Studio Ghibli films. Includes category filtering, dynamic pricing, and a persistent shopping cart, all built on a local dataset with a clean, minimal UI.",
      imgSrc: library,
      imgAlt: "Library project",
      github: "https://github.com/cgok808/studio_ghibli_library",
      live: "https://studioghibli-library.netlify.app/",
    },
    {
      id: "dashboard",
      title: "Personal Dashboard",
      subtitle: "React | Vite | Tailwind CSS | WeatherAPI",
      description: "Personal dashboard designed for daily use. Features a time-aware wallpaper, local weather via WeatherAPI, a persistent task tracker, quick-launch app shortcuts, and a unified search hub for instant access to Google, Reddit, Amazon, Spotify, and YouTube.",
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
