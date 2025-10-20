"use client";

import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  onCompleted?: () => void;
}

export function TypingEffect({
  text,
  speed = 100,
  className,
  onCompleted,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
        if (onCompleted) onCompleted();
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, onCompleted]);

  const isCompleted = displayedText.length === text.length;

  return (
    <span className={cn("font-code", className)}>
      {displayedText}
      <span
        className={cn(
          "bg-foreground ml-1 inline-block h-[1em] w-2",
          isCompleted ? "animate-pulse" : "",
        )}
      ></span>
    </span>
  );
}
