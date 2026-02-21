import { motion } from 'framer-motion';

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-blue-700 text-white">
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-5xl font-bold mb-4">Afzal Ahamed A</h1>
      <p className="text-2xl mb-6">Applied Machine Learning Engineer & Full-Stack Developer</p>
      <div className="space-x-4">
        <a href="tel:+919080831595" className="bg-white text-primary px-4 py-2 rounded">+91 9080831595</a>
        <a href="mailto:afzalaadhil@gmail.com" className="bg-white text-primary px-4 py-2 rounded">Email</a>
        <a href="https://www.linkedin.com/in/afzal-ahamed-a-816932287/" target="_blank" rel="noreferrer" className="bg-white text-primary px-4 py-2 rounded">LinkedIn</a>
        <a href="https://github.com/afzalaadhil" target="_blank" rel="noreferrer" className="bg-white text-primary px-4 py-2 rounded">GitHub</a>
      </div>
    </motion.div>
  </section>
);

export default Hero;