"use client";

import { cn } from "@/src/lib/utils";
import { useState } from "react";
import { TypingEffect } from "../typing-effect";

export function HeroSection() {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <section
      id="home"
      className="flex min-h-[14rem] flex-col justify-center space-y-4"
    >
      <div className="flex items-center gap-2">
        <p className="text-primary text-lg">
          <span className="text-accent">~</span>$
        </p>
        <TypingEffect
          text="cat bio.txt"
          speed={100}
          onCompleted={() => setIsTypingDone(true)}
          className="text-lg"
        />
      </div>
      <div
        className={cn(
          "text-muted-foreground space-y-2 pl-4 transition-opacity duration-1000",
          isTypingDone ? "opacity-100" : "-z-10 opacity-0",
        )}
      >
        <h1 className="text-foreground !-ml-1 text-4xl font-bold">
          Mauricio Florez.
        </h1>
        <p className="text-lg">Frontend Developer.</p>
      </div>
    </section>
  );
}
