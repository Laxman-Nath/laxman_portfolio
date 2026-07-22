import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto max-w-[1080px] px-6">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-signal/40 to-flare/40 p-[2px]">
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-panel font-mono text-2xl font-bold text-paper">
            LN
          </div>
        </div>

        <h1 className="mb-2 font-mono text-[clamp(28px,5vw,40px)] font-bold text-paper">
          Laxman Nath
        </h1>
        <div className="mb-6 flex items-center gap-2 font-mono text-xs text-fog">
          <span className="h-2 w-2 rounded-full bg-flare" />
          Open to Work · Kathmandu, Nepal
        </div>

        <h2 className="mb-4 font-mono text-[clamp(32px,6vw,52px)] font-bold uppercase leading-[1.05] text-paper">
          Fullstack Developer
        </h2>
        <p className="mb-8 max-w-lg text-paperdim">
          Backend-focused engineer building REST APIs and web apps with Java, Spring Boot, and Node.js.
        </p>

        <div className="mb-8 flex items-center gap-4">
          
         <a   href="https://linkedin.com/in/laxman-nath"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 p-3 text-fog transition-all hover:border-signal hover:text-paper hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/Laxman-Nath"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 p-3 text-fog transition-all hover:border-signal hover:text-paper hover:bg-white/5"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href="mailto:nathlaxman242@gmail.com"
            className="rounded-lg border border-white/10 p-3 text-fog transition-all hover:border-signal hover:text-paper hover:bg-white/5"
            aria-label="Email"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
        </div>

        <a
          href="#projects"
          className="inline-block bg-signal px-8 py-3 font-mono text-xs font-bold uppercase tracking-widest text-void"
        >
          View Selected Work
        </a>
      </div>
    </section>
  );
}