import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Fast Delivery",
    description: "1-2 days delivery of all of the pre-built career guidance modules",
  },
  {
    icon: "/icons/design.svg",
    title: "Interests Evaluation",
    description: "We evaluate your interests and then select the best for you",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Larger Picture",
    description: "We look at the larger picture for your career by data analysis",
  },
  {
    icon: "/icons/team.svg",
    title: "Team of Experts",
    description: "A team of expert counsellors who are best in their fields are ready to help you, at all times.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Secure Data",
    description: "We ensure you that your personal data is safe with us from all colleges.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Analytics Tracking",
    description: "Track your progress with our built in analytics",
  },
  {
    icon: "/icons/flexible.svg",
    title: "Dynamic Solutions",
    description: "We offer you dynamic solutions so that you never feel stuck in a career.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Support",
    description: "We offer 24/7 support for all our clients. Call us for more information.",
  },
  {
    icon: "/icons/money.svg",
    title: "Affordable Pricing",
    description: "Affordable pricing for all our clients.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-[#060b14] border border-[#f5c518]/10 flex flex-col items-center justify-center relative w-full px-6 md:px-0 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#f5c518] via-white to-white">
          Our guarantees to you.
        </h2>
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          We ensure the highest quality of work, with the fastest delivery times.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col p-8 bg-[#0f1729] border border-[#f5c518]/10 hover:border-[#f5c518]/35 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,197,24,0.07)]"
          >
            <div className="w-14 h-14 p-3 bg-gradient-to-br from-[#1a2540] to-[#0f1729] border border-[#f5c518]/20 rounded-xl flex items-center justify-center mb-4">
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold mt-2 text-white">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
