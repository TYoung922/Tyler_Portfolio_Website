"use client";
import React, { useState } from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Api Request",
    description: "a simple API request and render of the data",
    image: "/images/projects/ApiRequest.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    prieviewUrl: "/",
  },
  {
    id: 2,
    title: "Memory Match Game",
    description: "a memory match game app using JavaScirpt",
    image: "/images/projects/MemoryMatch.png",
    tag: ["All", "Web", "Game"],
    gitUrl: "/",
    prieviewUrl: "/",
  },
  {
    id: 3,
    title: "Mario Club Website",
    description: "a simple but good website I built from scratch",
    image: "/images/projects/MarioClub.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    prieviewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-8 py-6">
        <ProjectTag
          onCLick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onCLick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onCLick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
      </div>
      <div
      //   className="flex flex-row justify-center items-center gap-10 "
      >
        {filteredProjects.map((project) => (
          <ProjectCards
            key={project.id}
            title={project.title}
            description={project.description}
            imagUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.prieviewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
