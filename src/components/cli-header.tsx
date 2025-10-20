import Link from "next/link";

export function CliHeader() {
  const navItems = [
    { name: "skills", path: "#skills" },
    { name: "projects", path: "#projects" },
    { name: "contact", path: "#contact" },
  ];

  return (
    <header className="flex items-center gap-4">
      <p className="text-primary shrink-0">
        <span className="text-accent">~</span>$
      </p>
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="text-muted-foreground">ln -s</span>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
