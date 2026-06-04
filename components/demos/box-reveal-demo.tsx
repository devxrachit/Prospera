"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";

const BoxRevealDemo = () => {
  return (
    <div className="h-full w-full items-center justify-center ml-10 overflow-hidden pt-8 space-y-2">
      <BoxReveal boxColor={"#f5c518"} duration={0.5}>
        <p className="text-3xl font-semibold text-white">1. Connect</p>
      </BoxReveal>

      <BoxReveal boxColor={"#f5c518"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-400">
          Connect with us via
          <Link href={"/meeting"} className="text-[#f5c518] hover:underline">
            {" "}
            meeting{" "}
          </Link>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#f5c518"} duration={0.5}>
        <p className="text-3xl font-semibold text-white">2. Learn</p>
      </BoxReveal>

      <BoxReveal boxColor={"#f5c518"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-400">
          Learn with our experts
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#f5c518"} duration={0.5}>
        <p className="text-3xl font-semibold text-white">3. Explore</p>
      </BoxReveal>

      <BoxReveal boxColor={"#f5c518"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-400">Explore the Aligned Career</h2>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;
