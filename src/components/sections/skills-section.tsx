import { Badge } from "../ui/badge";

export function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
  ];

  return (
    <section id="skills" className="space-y-4">
      <div className="flex items-center gap-2">
        <p className="text-primary">
          <span className="text-accent">~/skills</span>$
        </p>
        <p className="text-foreground">ls -a</p>
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground cursor-default px-3 py-1 text-base"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
