import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-slate-100"
    >
      Profile Summary
    </motion.h2>
    <p className="text-lg leading-relaxed text-gray-700 dark:text-slate-300">
      Applied AI & Machine Learning Engineer with experience building end-to-end intelligent systems that move from simulation to real-world deployment. Strong in reinforcement learning, optimization, and anomaly detection, with hands-on work in resource allocation, network security, and sustainable agriculture. Skilled in translating real-world constraints into models and deploying ML systems with measurable impact. Experienced in full-stack web applications, backend development, and scalable APIs.
    </p>
  </section>
);

export default About;