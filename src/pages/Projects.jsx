import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    title: 'RL-Based Resource Allocator (Simulation → Real System)',
    description: 'Designed an end-to-end reinforcement learning system to dynamically allocate CPU resources, transitioning from simulation to live container control. Custom RL environment, reward functions for latency/SLA/resource efficiency. Integrated with Dockerized service and real-time dashboard, outperforming static autoscaling.',
    technologies: 'Python, Reinforcement Learning, Docker, Flask, System Metrics, Linux',
    github: 'https://github.com/afzalaadhil/rl-resource-allocator',
  },
  {
    title: 'ContextForge – Retrieval Augmented Generation Knowledge System',
    description: 'Engineered a production-ready RAG pipeline with hybrid retrieval, semantic reranking, grounding validation. FastAPI backend with lazy loading, timeout handling. Interactive chatbot and document intelligence workflow for accurate, source-grounded querying.',
    technologies: 'Python, FastAPI, Transformers, Sentence Transformers, Vector Databases, RAG Pipeline, Docker, JavaScript, HTML, CSS',
    github: 'https://github.com/afzalaadhil/contextforge',
  },
  {
    title: 'AgriHelp - Quantum-Inspired Fertilizer Optimization for Sustainable Agriculture',
    description: 'Formulated fertilizer selection as QUBO optimization to minimize cost while meeting ICAR nutrient targets. Implemented QAOA-inspired heuristics and neural crop recommendation model (95% top-3 accuracy). Built interactive Streamlit app achieving 87% nutrient match and 32% cost reduction.',
    technologies: 'Python, PyTorch, Optimization Algorithms, Streamlit, NumPy, Pandas',
    github: 'https://github.com/afzalaadhil/agrihelp',
  },
  {
    title: 'Network Traffic Simulation & Anomaly Detection',
    description: 'Developed network traffic simulation generating 20,000+ synthetic records with anomalies. Trained Isolation Forest (unsupervised) and Random Forest (supervised) for detection under imbalance. Flask dashboard for data generation, training, and real-time detection.',
    technologies: 'Python, Scikit-learn, Flask, Pandas, NumPy, Machine Learning',
    github: 'https://github.com/afzalaadhil/network-traffic-anomaly-detection',
  },
  {
    title: 'HabitFit – Social Habit Tracking Platform',
    description: 'Full-stack app for habit building, friend connections, communities. JWT authentication, user profiles, image uploads, real-time messaging. Scalable MongoDB models for users/habits/friendships/chats.',
    technologies: 'Node.js, Express.js, MongoDB, JWT, HTML, CSS, JavaScript, Multer',
    github: 'https://github.com/afzalaadhil/habitfit',
  },
  {
    title: 'EventSphere – Event Listing & Management Platform',
    description: 'Full-stack platform for event discovery, bookings, profiles. User authentication, multi-criteria filtering, booking workflows. Scalable MongoDB schemas for users/events/bookings.',
    technologies: 'Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, REST APIs',
    github: 'https://github.com/afzalaadhil/eventsphere',
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-slate-100">Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;