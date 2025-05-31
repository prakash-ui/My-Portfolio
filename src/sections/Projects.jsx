// Enhanced Projects.jsx
import { useState } from 'react';
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Book Review Platform",
    description: "Upload books, write reviews, and manage content.",
    link: "https://elaborate-gumption-1cde37.netlify.app/",
    tags: ["Node.js", "Fullstack", "Database","MongoDB","React"]
  },
  {
    title: "Simple Drive",
    description: " a cloud-based file storage and management application that replicates key features of Google Drive.",
    link: "https://simpledrivee.netlify.app/",
    tags: ["React", "Supabase", "Frontend","Node.js","MongoDB"]
  },

  
  {
    title: "Weather Dashboard",
    description: "Real-time weather data visualization.",
    link: "https://prakash-ui.github.io/Weather-app/whether.html",
    tags: ["API", "Frontend", "JavaScript"]
  },
    {
    title: "Rock Paper Scissors Game",
    description: "Basic Rock-Paper-Scissors game.",
    link: "https://prakash-ui.github.io/RockpaperScissor-game/",
    tags: ["JavaScript", "HTML", "CSS" ,"Frontend"]
  }

  
];

const allTags = ["All", ...new Set(projects.flatMap(proj => proj.tags))];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(proj => proj.tags.includes(filter));

  return (
    <section id="projects" className="px-6 py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              filter === tag 
                ? 'bg-indigo-600 text-white dark:bg-indigo-400 dark:text-black' 
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}