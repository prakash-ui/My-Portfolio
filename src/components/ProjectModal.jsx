import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              {project.details && (
                <p className="text-gray-700 dark:text-gray-300">{project.details}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-black rounded hover:bg-indigo-700 dark:hover:bg-indigo-500"
              >
                View Project
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}