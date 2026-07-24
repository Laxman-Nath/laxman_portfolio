import BigHeading from '../common/BigHeading';

const projects = [
  {
    num: '01',
    name: 'MobileMart — E-commerce Platform',
    desc: 'Full-featured e-commerce platform with product catalog, shopping cart, order processing, PDF invoice generation, and an admin dashboard for managing products and orders.',
    stack: 'Java · Spring Boot · Thymeleaf · MySQL · Spring Security',
    link: 'https://github.com/Laxman-Nath/MobileMart',
    linkLabel: 'View Code ↗',
  },
  {
    num: '02',
    name: 'Library Management System',
    desc: 'RESTful APIs for managing books, users, and library transactions, with a responsive React frontend, dynamic routing, and Swagger-documented, role-based access control.',
    stack: 'Java · Spring Boot · JPA · MySQL · Swagger · Lombok · React · Tailwind · Vite',
    link: 'https://github.com/Laxman-Nath/LMS_Backend',
    linkLabel: 'View Backend ↗',
    secondaryLink: 'https://github.com/Laxman-Nath/LMS_Frontend',
    secondaryLinkLabel: 'View Frontend ↗',
  },
  {
    num: '03',
    name: 'JobFinder — Live Job Aggregation Platform',
    desc: 'A job board that crawls company career pages and ATS platforms, deduplicates listings, and delivers personalized recommendations by email. Uses a pluggable fetcher architecture — official ATS APIs where available, LLM-based extraction via Gemini as a fallback for unstructured career pages — with Redis caching and RabbitMQ-driven async email notifications.',
    stack: 'Java · Spring Boot · PostgreSQL · Redis · RabbitMQ · Next.js · TypeScript · Tailwind · JWT Auth · Gemini API',
    link: 'https://jobs-scraper-nu.vercel.app/',
    linkLabel: 'Live Demo ↗',
    secondaryLink: 'https://github.com/Laxman-Nath/Jobs-Scraper',
    secondaryLinkLabel: 'View Code ↗',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="reveal in-view border-t border-ledger py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <BigHeading
            title="Selected Work"
            subtitle={`${projects.length} PROJECTS`}
            lead="A curation of full-stack applications built end to end, from database to UI."
          />
        </div>

        <div>
          {projects.map((p, i) => (
            <div key={p.num} className={`py-10 ${i > 0 ? 'border-t border-ledger' : ''}`}>
              <div className="mb-5 flex h-56 items-center justify-center border border-ledger bg-panel md:h-72">
                <span className="font-mono text-6xl font-bold text-ledger">{p.num}</span>
              </div>

              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3 className="font-mono text-xl font-bold text-paper">{p.name}</h3>
                {[
                  [p.link, p.linkLabel],
                  [p.secondaryLink, p.secondaryLinkLabel],
                ]
                  .filter(([href]) => href)
                  .map(([href, label], idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-wide text-paperdim underline underline-offset-4 hover:text-paper transition-colors"
                    >
                      {label || 'View ↗'}
                    </a>
                  ))}
              </div>

              <p className="mb-3 max-w-2xl text-[15px] leading-relaxed text-paperdim">{p.desc}</p>
              <div className="font-mono text-xs uppercase tracking-wide text-fog">{p.stack}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}