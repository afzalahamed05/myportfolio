import { motion } from 'framer-motion';

const Education = () => (
  <section id="education" className="py-20 px-4 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-slate-100"
    >
      Education
    </motion.h2>
    <div className="text-center text-gray-700 dark:text-slate-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100">Bachelor of Technology – Computer Science and Engineering</h3>
      <p>Vellore Institute of Technology, Chennai</p>
      <p>CGPA: 8.03/10.0 | 2023 – 2027</p>
    </div>
  </section>
);

export default Education;