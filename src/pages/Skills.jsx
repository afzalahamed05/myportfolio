import { motion } from "framer-motion";

const skills = [
  {
    title: "Machine Learning",
    items: ["PyTorch","TensorFlow","RL","Anomaly Detection","RAG Systems"]
  },
  {
    title: "Backend Systems",
    items: ["Node.js","FastAPI","Flask","Docker","REST APIs"]
  },
  {
    title: "Frontend",
    items: ["React","Tailwind","Framer Motion","WebRTC"]
  },
  {
    title: "Data",
    items: ["Pandas","NumPy","Scikit-learn","PostgreSQL","MongoDB"]
  },
  {
    title: "Core CS",
    items: ["DSA","Optimization","Networking","OS Concepts"]
  }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <div className="min-h-screen px-6 py-28 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-16 text-center text-primary dark:neon-text">
        Technical Constellations
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {skills.map((group, i) => (
          <motion.div
            key={i}
            variants={item}
            className="glass rounded-2xl p-7 hover-lift"
          >
            <h2 className="text-xl font-semibold mb-5 text-primary dark:text-cyan-300">
              {group.title}
            </h2>

            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-sm text-gray-700 dark:text-slate-300 neon-border bg-cyan-400/5 dark:bg-cyan-400/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}