"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Clipboard, Check, Download } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { Button } from "../ui/button";

const socialLinks = {
  email: "fzflorez02@gmail.com",
  github: "https://github.com/fzflorez",
  linkedin: "https://www.linkedin.com/in/fzflorez",
};

export function ContactSection() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(socialLinks.email).then(() => {
      setIsCopied(true);
      toast.success("Copiado!", {
        description: "El correo electrónico ha sido copiado al portapapeles.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <p className="text-primary">
            <span className="text-accent">~</span>$
          </p>
          <p className="text-foreground">contact --info</p>
        </div>
        <h2 className="text-foreground mt-2 ml-1 text-3xl font-bold">
          Let's Connect
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <p className="text-primary">
            <span className="text-accent">~</span>$
          </p>
          <p className="text-foreground">contact --email</p>
        </div>
        <div className="flex items-center gap-2 pl-4">
          <p className="text-muted-foreground bg-input border-border rounded-md border px-4 py-2">
            {socialLinks.email}
          </p>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            aria-label="Copy email"
          >
            {isCopied ? <Check className="text-green-500" /> : <Clipboard />}
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <p className="text-primary">
            <span className="text-accent">~</span>$
          </p>
          <p className="text-foreground">resume.pdf</p>
        </div>
        <div className="pl-4">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/MauricioFlorez_CV.pdf" target="_blank" download>
              <Download className="mr-2 h-4 w-4" />
              Descargar Resume
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <p className="text-primary">
            <span className="text-accent">~</span>$
          </p>
          <p className="text-foreground">ls ./social-links</p>
        </div>
        <div className="grid gap-4 pl-4 sm:grid-cols-2">
          <Link
            href={socialLinks.github}
            target="_blank"
            className="bg-card border-border hover:border-primary flex items-center gap-4 rounded-lg border p-4 transition-colors"
          >
            <SiGithub className="text-accent h-8 w-8" />
            <div>
              <p className="text-foreground font-bold">GitHub</p>
              <p className="text-muted-foreground">@fzflorez</p>
            </div>
          </Link>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            className="bg-card border-border hover:border-primary flex items-center gap-4 rounded-lg border p-4 transition-colors"
          >
            <SiLinkedin className="text-accent h-8 w-8" />
            <div>
              <p className="text-foreground font-bold">LinkedIn</p>
              <p className="text-muted-foreground">Mauricio Florez Samudio</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
