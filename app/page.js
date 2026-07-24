import Nav from '@/components/layout/Nav';
import Hero from '@/components/layout/Hero';
import About from '@/components/layout/About';
import Skills from '@/components/layout/Skills';
import Experience from '@/components/layout/Experience';
import Projects from '@/components/layout/Projects';
import Education from '@/components/layout/Education';
import Contact from '@/components/layout/Contact';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}