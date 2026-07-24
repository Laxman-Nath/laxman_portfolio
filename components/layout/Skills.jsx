import BigHeading from '../common/BigHeading';
import { FaJava, FaGitAlt, FaDocker, FaCode } from 'react-icons/fa';
import {
  SiSpringboot, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiSwagger,
  SiPostman,
} from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'React.js', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redis', icon: SiRedis },
  { name: 'Docker', icon: FaDocker },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Swagger', icon: SiSwagger },
  { name: 'Postman', icon: SiPostman },
  { name: 'VS Code', icon: FaCode },
];

export default function Skills() {
  return (
    <section id="skills" className="reveal in-view border-t border-ledger py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <BigHeading
          title="Technical Skills"
          subtitle="Toolkit"
          lead="A toolkit refined over experience building scalable applications and real-world web products."
        />
        <div className="grid grid-cols-2 gap-px bg-ledger sm:grid-cols-4">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center gap-3 bg-void px-4 py-8 text-center transition-colors hover:bg-panel2"
            >
              <Icon size={28} className="text-paperdim group-hover:text-paper" />
              <span className="font-mono text-xs text-fog group-hover:text-paperdim">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}