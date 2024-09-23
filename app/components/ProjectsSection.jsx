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
    gitUrl: "https://github.com/TYoung922/first_api_request",
    prieviewUrl: "https://tyoung922.github.io/first_api_request/",
  },
  {
    id: 2,
    title: "Memory Match Game",
    description: "a memory match game app using JavaScirpt",
    image: "/images/projects/MemoryMatch.png",
    tag: ["All", "Web", "Game"],
    gitUrl: "https://github.com/TYoung922/Memory_Game",
    prieviewUrl: "https://tyoung922.github.io/Memory_Game/",
  },
  {
    id: 3,
    title: "Mario Club Website",
    description: "a simple but good website I built from scratch",
    image: "/images/projects/MarioClub.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TYoung922/Mario_club",
    prieviewUrl: "https://tyoung922.github.io/Mario_club/",
  },
  {
    id: 4,
    title: "Cafe Menu",
    description: "a basic web menu",
    image: "/images/projects/CafeMenu.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TYoung922/cafe_menu",
    prieviewUrl: "https://tyoung922.github.io/cafe_menu/",
  },
  {
    id: 5,
    title: "Interactive Site",
    description: "a web page displaying different techniques",
    image: "/images/projects/InteractiveSite.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TYoung922/Interactive_html_css",
    prieviewUrl: "https://tyoung922.github.io/Interactive_html_css/",
  },
  {
    id: 6,
    title: "Java Quiz",
    description: "a simple quiz app",
    image: "/images/projects/JavaQuiz.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/TYoung922/java_quiz",
    prieviewUrl: "https://tyoung922.github.io/java_quiz/",
  },
  {
    id: 7,
    title: "List App",
    description: "an app for making lists that stores info",
    image: "/images/projects/ListApp.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/TYoung922/java_list_program",
    prieviewUrl: "https://tyoung922.github.io/java_list_program/",
  },
  {
    id: 8,
    title: "Password Generator",
    description: "an app for generating passwords that can take variables",
    image: "/images/projects/PasswordGenerator.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/TYoung922/password_generator",
    prieviewUrl: "https://tyoung922.github.io/password_generator/",
  },
  {
    id: 9,
    title: "Fighting Game",
    description: "a basic fighting game",
    image: "/images/projects/FightingGame2.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/TYoung922/Fiting_game",
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
          name="App"
          isSelected={tag === "App"}
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
