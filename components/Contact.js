const socials = [
  { label: 'GitHub', href: 'https://github.com/Laxman-Nath' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/laxman-nath' },
  { label: 'Email', href: 'mailto:nathlaxman242@gmail.com' },
];

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-ledger py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <h2 className="mb-8 font-mono text-[clamp(32px,7vw,56px)] font-bold uppercase leading-[1.05] text-paper">
          Let&apos;s build
          <br />
          something sharp.
        </h2>

        <a
          href="mailto:nathlaxman242@gmail.com"
          className="mb-16 inline-block border border-ledger px-8 py-3 font-mono text-xs font-bold uppercase tracking-widest text-paper transition-colors hover:border-paper"
        >
          Get in touch
        </a>

        <div className="grid grid-cols-1 gap-10 border-t border-ledger pt-10 sm:grid-cols-2">
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-fog">Social</div>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener"
                  className="font-mono text-sm text-paperdim hover:text-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-fog">Legal</div>
            <div className="font-mono text-sm text-paperdim">© 2026 Laxman Nath</div>
            <div className="mt-1 font-mono text-sm text-paperdim">All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}