export default function SectionHead({ title, path }) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      {/* GET Badge */}
      <span className="rounded-full bg-emerald-600 px-3 py-1 font-mono text-xs font-bold text-white tracking-wider">
        GET
      </span>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>

      {/* Path */}
      <span className="ml-auto font-mono text-sm text-gray-500 md:ml-0">
        {path}
      </span>
    </div>
  );
}