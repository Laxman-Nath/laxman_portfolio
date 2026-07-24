import BigHeading from '../common/BigHeading';

const education = [
  {
    degree: 'BACHELOR OF SCIENCE — CSIT',
    school: 'Siddhanath Science Campus',
    field: 'Computer Science and Information Technology',
    date: '2021 — 2025',
    src:"logos/siddhanath.png"
  },
  {
    degree: 'HIGHER SECONDARY — SCIENCE',
    school: 'Radiant Secondary School',
    field: 'Science (+2)',
    date: '2019 — 2021',
    src:"logos/radiant.png"
  },
];

export default function Education() {
  return (
    <section id="education" className="reveal in-view border-t border-ledger py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <BigHeading
          title="Education"
          subtitle="Academic Journey"
          lead="From foundational concepts to applied engineering — a structured path through computer science and technology."
        />

        <div>
          {education.map((e, i) => (
            <div
              key={e.school}
              className={`flex flex-col gap-5 py-8 sm:flex-row sm:items-center ${
                i > 0 ? 'border-t border-ledger' : 'border-t border-ledger'
              }`}
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center border border-ledger bg-panel font-mono text-xs font-bold text-fog">
               <img src={e.src} alt={e.school} className="h-12 w-12 object-contain" />
              </div>

              <div className="flex-1">
                <div className="mb-2 inline-block border border-ledger px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-paperdim">
                  {e.degree}
                </div>
                <h3 className="mb-1 font-mono text-lg font-bold text-paper">{e.school}</h3>
                <div className="text-sm text-fog">{e.field}</div>
              </div>

              <div className="font-mono text-xs uppercase tracking-wide text-fog sm:text-right">
                {e.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}