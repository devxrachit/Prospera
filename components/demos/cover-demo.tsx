import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-3xl md:text-6xl font-display font-semibold max-w-5xl mx-auto md:text-center relative z-20 text-foreground">
        Choose the right career with{" "}
        <br className="hidden md:block" />
        <Cover>Prospera Counselling Services</Cover>
      </h1>
    </div>
  );
}
