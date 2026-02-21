import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MainLayout = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-gray-900 dark:text-slate-200">
      <ParticlesBackground darkMode={darkMode} />
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MainLayout;