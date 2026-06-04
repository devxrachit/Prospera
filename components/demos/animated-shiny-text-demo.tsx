'use client'
import { cn } from "@/lib/utils";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { FcGoogle } from "react-icons/fc";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center md:justify-center mb-4">
      <div
        className={cn(
          "group rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-base text-slate-700 transition-all ease-in",
        )}
      >
        <AnimatedShinyText className="items-center justify-center py-1 transition ease-out hover:duration-300">
          <div className="md:flex flex-col-reverse md:flex-row justify-between gap-x-6">
            ⭐{" "}⭐{" "}⭐{" "}⭐{" "}⭐
            <div className="flex items-center space-x-2 py-2 md:py-0">
              <FcGoogle className="h-6 w-6" />
              <span className="text-slate-600 hover:underline cursor-pointer">
                4.9 stars · 200+ Google reviews
              </span>
            </div>
          </div>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
