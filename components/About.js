import BigHeading from './BigHeading';

const stats = [
  { value: '2+', label: 'Years of Experience', note: 'Building real-world applications' },
  { value: '16+', label: 'Technologies', note: 'In the current arsenal' },
  { value: '3', label: 'Skill Domains', note: 'Backend, frontend, and DevOps' },
  { value: 'Open', label: 'Current Status', note: 'Kathmandu, Nepal' },
];

export default function About() {
  return (
    <section id="about" className="border-t border-ledger py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <BigHeading title="Profile" subtitle="Who I am & what I do" />

        <p className="mb-12 max-w-2xl text-[17px] text-paperdim">
          Full-stack developer with a <strong className="font-semibold text-paper">strong backend focus</strong>,
          building REST APIs and production web applications in Java, Spring Boot, and Node.js.
          Comfortable across the stack — from database schema and authentication to React and
          Next.js on the front end. Currently expanding expertise toward backend engineering:
          databases, APIs, and server-side architecture.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border border-ledger p-6">
              <div className="mb-2 font-mono text-4xl font-bold text-paper">{s.value}</div>
              <div className="font-mono text-xs uppercase tracking-wide text-paperdim">{s.label}</div>
              <div className="mt-1 text-xs text-fog">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}