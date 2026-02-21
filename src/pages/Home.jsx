import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../motion/variants";
import ResumeButtons from "../components/ResumeButtons";

export default function Home() {
  return (
    <motion.div
      variants={page}
      initial="hidden"
      animate="show"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center"
    >
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.h1
          variants={fadeUp}
          className="text-5xl font-bold text-primary dark:neon-text mb-6"
        >
          Afzal Ahamed
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mb-10"
        >
          Building intelligent systems that move from theory → real world.
          Machine Learning, Systems Engineering, and Full-Stack interfaces.
        </motion.p>

        <motion.div variants={fadeUp}>
          <ResumeButtons />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}