import React from "react";
import Image from "next/image";
import Link from "next/link";

function LetsMakeThingsHappenSection() {
  return (
    <section className="my-10 md:py-20 md:mx-auto bg-brand-700 rounded-[45px] p-[50px] md:p-[60px] relative overflow-hidden shadow-card-hover">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-900 opacity-80" />
      <div className="relative z-10 md:pr-[22rem]">
        <p className="text-3xl font-display font-semibold text-white">
          Let&apos;s make things happen
        </p>

        <p className="my-10 text-xl text-brand-200">
          Contact us today to learn more about how our counselling
          services can help you grow and succeed in your desired path.
        </p>

        <Link
          href="/meeting"
          className="py-3 px-10 md:px-16 md:text-xl rounded-cta bg-cta text-white font-bold shadow-cta hover:bg-cta-hover hover:shadow-cta-hover transition-all duration-200 inline-block"
        >
          Book a Call
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;
