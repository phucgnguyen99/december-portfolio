import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer
        style={{
          borderTop: "1px solid #1e293b",
          marginTop: "40px",
          padding: "14px 20px",
          fontSize: "12px",
          color: "#94a3b8",
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1000px",
          marginInline: "auto",
        }}
      >
        <span>© {new Date().getFullYear()} Phuc Nguyen</span>
        <span>Built with React, Vite & CSS Modules</span>
      </footer>
    </div>
  );
}

export default App;
