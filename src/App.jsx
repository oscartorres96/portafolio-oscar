export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight">Oscar Torres</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-600 transition">Sobre mí</a>
            <a href="#portfolio" className="hover:text-emerald-600 transition">Portafolio</a>
            <a href="#blog" className="hover:text-emerald-600 transition">Blog</a>
            <a href="#contact" className="hover:text-emerald-600 transition">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="bg-white py-24 text-center shadow-inner">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4">Hola, soy <span className="text-emerald-600">Oscar</span> 👋</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Soy un desarrollador apasionado por la tecnología, con experiencia en backend y frontend. Me especializo en Python, Django, Vue, React y automatización de procesos de datos.</p>
          <a href="#contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all">Contáctame</a>
        </div>
      </section>

      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Sobre mí</h2>
        <p className="text-base leading-relaxed text-center text-gray-700">
          Soy un desarrollador con experiencia en Python, Django, Vue, React y más. Actualmente trabajo como Ingeniero de Datos, pero me apasiona el desarrollo fullstack y la enseñanza. Me encanta construir soluciones útiles, limpias y mantenibles.
        </p>
      </section>

      <section id="portfolio" className="py-24 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Portafolio</h2>
        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">MarcaPersonal App</h3>
            <p className="text-sm mb-4 text-gray-600">Aplicación desarrollada en Django + Vue para registrar PRs personales de entrenamiento. Incluye autenticación, CRUD y gráficos.</p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-600 mb-4">
              <span className="bg-white border border-gray-300 px-2 py-1 rounded-full">Django</span>
              <span className="bg-white border border-gray-300 px-2 py-1 rounded-full">Vue.js</span>
              <span className="bg-white border border-gray-300 px-2 py-1 rounded-full">MongoDB</span>
            </div>
            <a href="https://gitlab.com/tu_usuario/marcapersonal" target="_blank" className="text-emerald-600 hover:underline font-medium">Ver código en GitLab</a>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Blog</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-emerald-700">¿Qué es POO en Python? 🐍</h3>
            <p className="text-sm mb-4 text-gray-600">Una explicación clara y directa de los conceptos de programación orientada a objetos en Python, con ejemplos prácticos para empezar.</p>
            <a href="#" className="text-emerald-600 hover:underline font-medium text-sm">Leer más</a>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-white border-t py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">¿Hablamos?</h2>
          <p className="mb-4 text-gray-600">Puedes escribirme a <a href="mailto:oscar@email.com" className="underline hover:text-emerald-600">oscar@email.com</a></p>
          <div className="space-x-6">
            <a href="https://www.linkedin.com/in/tuusuario" target="_blank" className="hover:text-emerald-600 font-medium">LinkedIn</a>
            <a href="https://gitlab.com/tu_usuario" target="_blank" className="hover:text-emerald-600 font-medium">GitLab</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
