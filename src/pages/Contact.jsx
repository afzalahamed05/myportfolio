import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-slate-100"
    >
      Contact Me
    </motion.h2>
    <div className="text-center space-y-4 text-gray-700 dark:text-slate-300">
      <p>Email: <a href="mailto:afzalaadhil@gmail.com" className="text-primary dark:text-cyan-400">afzalaadhil@gmail.com</a></p>
      <p>Phone: <a href="tel:+919080831595" className="text-primary dark:text-cyan-400">+91 9080831595</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/afzal-ahamed-a-816932287/" target="_blank" rel="noreferrer" className="text-primary dark:text-cyan-400">afzal-ahamed-a</a></p>
      <p>GitHub: <a href="https://github.com/afzalaadhil" target="_blank" rel="noreferrer" className="text-primary dark:text-cyan-400">afzalaadhil</a></p>
    </div>
  </section>
);

export default Contact;