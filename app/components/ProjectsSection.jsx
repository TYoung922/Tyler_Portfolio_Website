"use client";
import React, { useState, useRef } from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCards
              key={project.id}
              title={project.title}
              description={project.description}
              imagUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.prieviewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
