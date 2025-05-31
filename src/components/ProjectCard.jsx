import { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function ProjectCard({ title, description, link, tags = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition hover:scale-[1.02] cursor-pointer"
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {isOpen && (
        <ProjectModal
          project={{ title, description, link, tags }}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}