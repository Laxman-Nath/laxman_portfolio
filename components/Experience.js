import BigHeading from './BigHeading';

const jobs = [
  {
    role: 'Fullstack Developer',
    company: 'INVENTECHGROUP',
    date: 'MAR 2026 — PRESENT',
    duration: '5 MONTHS',
    desc: 'Building full-stack features for Buzzend across Angular, Flutter, and a Spring Boot backend, keeping functionality consistent across web and mobile. Built a suggestion engine and RESTful APIs powering personalized recommendations, replaced offset-based pagination with cursor-based pagination to cut database load, and secured APIs with JWT authentication and role-based access control.',
  },
  {
    role: 'Software Developer',
    company: 'DARSE TECHNOLOGIES',
    date: 'MAY 2025 — FEB 2026',
    duration: '10 MONTHS',
    desc: 'Shipped full-stack features across projects using React, Next.js, Remix, Node.js, and Spring Boot. Migrated a legacy Java Servlets/JSP application to a modern Spring Boot + React architecture, built and maintained serverless AWS Lambda functions, and configured AWS WAF rate-limiting rules while evaluating AWS Shield for DDoS protection.',
  },
  {
    role: 'Backend Developer Intern',
    company: 'DARSE TECHNOLOGIES',
    date: 'JAN 2025 — APR 2025',
    duration: '4 MONTHS',
    desc: 'Built REST APIs with Spring Boot and JPA, integrated with MySQL and Redis. Added input validation and error handling to strengthen data integrity, containerized services with Docker, and learned CI/CD deployment practices.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ledger py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <BigHeading title="Experience" />

        <div>
          {jobs.map((job, i) => (
            <div
              key={job.role + job.company}
              className={`py-10 ${i > 0 ? 'border-t border-ledger' : ''}`}
            >
              <h3 className="mb-1 font-mono text-2xl font-bold text-paper">{job.role}</h3>
              <div className="mb-4 font-mono text-xs uppercase tracking-wide text-fog">
                {job.company}
                <span className="mx-2 text-ledger">•</span>
                {job.date}
                <span className="mx-2 text-ledger">•</span>
                {job.duration}
              </div>
              <p className="max-w-2xl text-[15px] leading-relaxed text-paperdim">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}