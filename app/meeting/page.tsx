"use client";

import Calendly from "./calendly";
import ShowcaseNavbar from "@/components/showcase-navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Career Assessment and Guidance",
    description: "Turn your aspirations into reality with our Counselling services.",
  },
  {
    title: "One to One Consultation",
    description: "Get expert advice on how to improve your career selection.",
  },
  {
    title: "Technical Support",
    description: "Get technical support for your application.",
  },
];

const Meeting = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <ShowcaseNavbar />

      <div className="container-page justify-between mt-10 md:mt-14 md:flex pb-20">

        {/* Left: info */}
        <div className="md:w-2/5 pt-10">
          <div className="inline-block mb-4 px-3 py-1 rounded-pill bg-brand-50 border border-brand-100">
            <span className="text-brand-700 text-xs font-semibold tracking-wide uppercase">Schedule a Session</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground leading-tight">
            Let&apos;s Meet
          </h1>
          <p className="text-base text-muted-foreground py-5">
            We are always excited to meet new students and discuss new projects.
            Please feel free to book a meeting with us.
          </p>

          <div className="mt-4 space-y-3">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.4 }}
                className="flex gap-x-4 py-4 px-5 rounded-card bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <CheckCircle2 className="text-brand-700 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="text-sm font-display font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-muted-foreground text-xs mb-4 uppercase tracking-widest font-medium">Trusted by</p>
            <div className="flex flex-wrap gap-2">
              {["The Doon School", "St George's College", "Welham Girls'", "Oxford International"].map((school) => (
                <span
                  key={school}
                  className="px-3 py-1.5 rounded-pill bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium"
                >
                  {school}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Calendly */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="rounded-card border border-border overflow-hidden shadow-card">
            <Calendly />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Meeting;
