import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100 font-sans">
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-emerald-600">Oscar Torres</h1>
          <div className="flex items-center gap-4">
            <nav className="space-x-6 text-sm font-medium">
              <a href="#about" className="hover:text-emerald-600 transition">Sobre mí</a>
              <a href="#portfolio" className="hover:text-emerald-600 transition">Portafolio</a>
              <a href="#blog" className="hover:text-emerald-600 transition">Blog</a>
              <a href="#contact" className="hover:text-emerald-600 transition">Contacto</a>
            </nav>
            <button
              onClick={toggleTheme}
              className="ml-4 text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
            </button>
          </div>
        </div>
      </header>

      <section className="py-32 text-center bg-[url('/bg-pattern.svg')] bg-cover bg-no-repeat bg-center dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold mb-6 leading-tight"
          >
            Hola, soy <span className="text-emerald-600">Oscar</span> 👋
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Desarrollador fullstack con foco en soluciones inteligentes y eficientes. Experto en Python, Django, Vue y React.
          </p>
          <a
            href="#contact"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all shadow-md"
          >
            Contáctame
          </a>
        </div>
      </section>

      <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
          Ingeniero de Datos y Desarrollador Fullstack. Apasionado por construir sistemas robustos, escalables y visualmente atractivos.
        </p>
      </section>

      <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Proyectos destacados</h2>
        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl transition hover:scale-[1.01]">
            <h3 className="text-xl font-bold mb-2 text-emerald-700">MarcaPersonal App</h3>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">App para registrar PRs de entrenamiento, con gráficos y autenticación.</p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-600 dark:text-gray-400 mb-4">
              <span className="bg-emerald-50 dark:bg-gray-700 border border-emerald-200 dark:border-gray-600 px-2 py-1 rounded-full">Django</span>
              <span className="bg-emerald-50 dark:bg-gray-700 border border-emerald-200 dark:border-gray-600 px-2 py-1 rounded-full">Vue.js</span>
              <span className="bg-emerald-50 dark:bg-gray-700 border border-emerald-200 dark:border-gray-600 px-2 py-1 rounded-full">MongoDB</span>
            </div>
            <a href="https://gitlab.com/tu_usuario/marcapersonal" target="_blank" className="text-emerald-600 hover:underline font-medium">Ver código en GitLab</a>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Últimos artículos</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-emerald-700">¿Qué es POO en Python? 🐍</h3>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">Entiende los conceptos clave de la programación orientada a objetos en Python.</p>
            <a href="#" className="text-emerald-600 hover:underline font-medium text-sm">Leer más</a>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">¿Trabajamos juntos?</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Escríbeme a <a href="mailto:oscar@email.com" className="underline hover:text-emerald-600">oscar@email.com</a>
          </p>
          <div className="space-x-6 text-sm">
            <a href="https://www.linkedin.com/in/tuusuario" target="_blank" className="hover:text-emerald-600 font-medium">LinkedIn</a>
            <a href="https://gitlab.com/tu_usuario" target="_blank" className="hover:text-emerald-600 font-medium">GitLab</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
