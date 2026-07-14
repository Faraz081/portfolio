import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white text-2xl">
      Loading...
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;