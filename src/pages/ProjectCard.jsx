import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, github }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition text-gray-900 dark:text-slate-200"
  >
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="mb-4 text-gray-700 dark:text-slate-300">{description}</p>
    <p className="text-sm mb-4 text-gray-600 dark:text-slate-400"><strong>Technologies:</strong> {technologies}</p>
    <a href={github} target="_blank" rel="noreferrer" className="text-primary dark:text-cyan-400 hover:underline">GitHub Link</a>
  </motion.div>
);

export default ProjectCard;