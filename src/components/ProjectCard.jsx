import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiLink } from "react-icons/hi";

const ProjectCard = ({
  title,
  subtitle,
  description,
  imgSrc,
  imgAlt,
  github,
  live,
}) => {
  return (
    <li className="mb-36">
      <div className="project__wrapper">
        <img src={imgSrc} alt={imgAlt || title} className="project__img" />
        <div className="project__wrapper--bg" />
        <div className="project__description">
          <h3 className="project__description--title font-bold">{title}</h3>
          <h4 className="project__description--sub-title font-semibold text-3xl">
            {subtitle}
          </h4>
          <p className="project__description--para">{description}</p>
          <div className="project__description--links flex">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <AiOutlineGithub className="text-2xl mr-3 transition__ease hover:scale-110 active:scale-90" />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer">
                <HiLink className="text-2xl transition__ease hover:scale-110 active:scale-90" />
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
