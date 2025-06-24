import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import avatar from "./assets/avatar-dev.png"; // Ruta ilustración personalizada
import logoOT from "./assets/logot.png"; // Logo con iniciales OT
import { SiPython, SiDjango, SiJavascript, SiReact, SiVuedotjs, SiMongodb, SiTailwindcss, SiApacheairflow } from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode) {
      setDarkMode(storedMode === "dark");
      document.documentElement.classList.toggle("dark", storedMode === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-[#0c0f13] dark:to-[#1a1e23] text-gray-800 dark:text-gray-100 font-sans transition-colors duration-500">
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <img src={avatar} alt="Oscar Dev" className="w-10 h-10 rounded-full border border-emerald-500 shadow-md" />
            <h1 className="text-2xl font-extrabold tracking-tight text-emerald-600">Oscar Torres</h1>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-end">
            <nav className="flex flex-wrap gap-4 text-sm font-medium justify-center">
              <a href="#about" className="hover:text-emerald-600 transition">Sobre mí</a>
              <a href="#portfolio" className="hover:text-emerald-600 transition">Portafolio</a>
              <a href="#blog" className="hover:text-emerald-600 transition">Blog</a>
              <a href="#skills" className="hover:text-emerald-600 transition">Skills</a>
              <a href="#contact" className="hover:text-emerald-600 transition">Contacto</a>
            </nav>
            <button
              onClick={toggleTheme}
              className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
            </button>
          </div>
        </div>
      </header>

      <section className="relative py-32 text-center bg-gradient-to-r from-emerald-50 via-white to-emerald-100 dark:from-[#14191f] dark:via-[#101419] dark:to-[#14191f] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-pattern.svg')] bg-cover bg-no-repeat opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            Hola, soy <span className="text-emerald-600">Oscar</span> 👋
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
          >
            Desarrollador fullstack con foco en soluciones inteligentes y eficientes. Experto en Python, Django, Vue y React.
          </motion.p>
          <motion.a
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.1, ease: "easeOut" }}
            href="#contact"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all shadow-md"
          >
            Contáctame
          </motion.a>
        </div>
      </section>

      <section id="skills" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Tecnologías que domino
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[{
            icon: <SiPython size={40} />, name: "Python"
          }, {
            icon: <SiDjango size={40} />, name: "Django"
          }, {
            icon: <SiJavascript size={40} />, name: "JavaScript"
          }, {
            icon: <SiReact size={40} />, name: "React"
          }, {
            icon: <SiVuedotjs size={40} />, name: "Vue.js"
          }, {
            icon: <SiMongodb size={40} />, name: "MongoDB"
          }, {
            icon: <SiTailwindcss size={40} />, name: "Tailwind CSS"
          }, {
            icon: <SiApacheairflow size={40} />, name: "Apache Airflow"
          }].map((tech, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-emerald-600 dark:text-emerald-400">
                {tech.icon}
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Marca flotante con logo OT */}
      <img
        src={logoOT}
        alt="Logo OT"
        className="fixed bottom-4 right-4 w-14 h-14 opacity-70 hover:opacity-100 transition-opacity z-50 bg-white/10 dark:bg-white/10 backdrop-blur-md rounded-full p-2 shadow-lg"
      />
    </div>
  );
}
