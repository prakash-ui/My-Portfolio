// Enhanced Skills.jsx
import { motion } from 'framer-motion';

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 60 },
  { name: "MongoDB", level: 70 },
  { name: "Redux", level: 55 },
  { name: "Tailwind", level: 65 },
];

export default function Skills() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {skills.map((skill, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}