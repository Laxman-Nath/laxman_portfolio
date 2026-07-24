export default function BigHeading({ title, subtitle, lead }) {
  return (
    <div className="mb-10">
      <h2 className="font-mono text-[clamp(36px,7vw,64px)] font-bold uppercase leading-none text-paper">
        {title}
        <span className="text-fog">.</span>
      </h2>
      <div className="mt-5 h-[2px] w-16 bg-paper" />
      {subtitle && (
        <div className="mt-4 font-mono text-xs uppercase tracking-widest text-fog">{subtitle}</div>
      )}
      {lead && <p className="mt-4 max-w-2xl text-paperdim">{lead}</p>}
    </div>
  );
}