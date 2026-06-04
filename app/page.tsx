"use client"

import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import NumberTicker from "@/components/magicui/number-ticker";
import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";
import PlaceholderAvatar from "@/components/ui/placeholder-avatar";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { IconStarFilled } from "@tabler/icons-react";
import { BookOpen, Users, Compass, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Data Based Research",
    description: "We assess your career with our data based researches and align them to configure the best advice for you.",
  },
  {
    icon: "/images/s_1.png",
    title: "Exploration of Different Emerging Fields",
    description: "Get yourself the right career for yourself among the thousands by our services.",
  },
  {
    icon: "/images/s_5.png",
    title: "Connect with Idols of Your Field",
    description: "We at Prospera will help you connect with the idol of your field by our connection network.",
  },
  {
    icon: "/images/s_3.png",
    title: "Happy and Satisfied Customers",
    description: "Our Customers are our asset and our goal is to make them satisfied and get them with their aligned career.",
  },
  {
    icon: "/images/s_4.png",
    title: "One to One Connection",
    description: "With our services, we help students by connecting them with Career Guidance Professionals.",
  },
  {
    icon: "/images/s_2.png",
    title: "Pay-Per-Meeting Service",
    description: "Don't waste money on ineffective programs. Let Our Experts personally guide you reach your target.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: <Users size={28} />,
    title: "Connect",
    description: "Book a session with one of our expert counsellors. We match you to the right advisor based on your stream and goals.",
  },
  {
    number: "02",
    icon: <BookOpen size={28} />,
    title: "Learn",
    description: "Receive personalised insights — psychometric assessments, industry deep-dives, and data-backed career maps.",
  },
  {
    number: "03",
    icon: <Compass size={28} />,
    title: "Explore",
    description: "Walk away with a clear action plan: colleges, entrance exams, and next steps tailored to your strengths.",
  },
];

const guarantees = [
  { icon: "/icons/fast.svg", title: "Fast Delivery", description: "1-2 days delivery of all of the pre-built career guidance modules" },
  { icon: "/icons/design.svg", title: "Interests Evaluation", description: "We evaluate your interests and then select the best for you" },
  { icon: "/icons/scalable.svg", title: "Larger Picture", description: "We look at the larger picture for your career by data analysis" },
  { icon: "/icons/team.svg", title: "Team of Experts", description: "A team of expert counsellors who are best in their fields are ready to help you, at all times." },
  { icon: "/icons/safe.svg", title: "Secure Data", description: "We ensure you that your personal data is safe with us from all colleges." },
  { icon: "/icons/analytics.svg", title: "Analytics Tracking", description: "Track your progress with our built in analytics" },
  { icon: "/icons/flexible.svg", title: "Dynamic Solutions", description: "We offer you dynamic solutions so that you never feel stuck in a career." },
  { icon: "/icons/support.svg", title: "24/7 Support", description: "We offer 24/7 support for all our clients. Call us for more information." },
  { icon: "/icons/money.svg", title: "Affordable Pricing", description: "Affordable pricing for all our clients." },
];

const experts = [
  { name: "Dr. Rajiv Mehra", credential: "Ph.D. in Educational Psychology", description: "Expert in student career assessments and personalized guidance. Specializes in behavioral patterns and interests to provide tailored career advice." },
  { name: "Ms. Ananya Sharma", credential: "M.A. in Career Counseling and Guidance", description: "Experienced in helping students navigate career choices with a focus on academic and professional planning." },
  { name: "Mr. Arjun Patel", credential: "MBA in Human Resources", description: "Brings a business perspective to career counselling, offering insights into industry trends and strategic career planning." },
  { name: "Dr. Priya Verma", credential: "M.Sc. in Applied Psychology", description: "Focuses on psychometric testing and career aptitude assessments. Provides comprehensive support for identifying strengths and career fit." },
  { name: "Ms. Neha Kapoor", credential: "B.A. in Sociology & Certified Career Coach", description: "Specializes in understanding societal and individual influences on career choices. Guides students through diverse career paths." },
  { name: "Mr. Siddharth Rao", credential: "M.Ed. in Guidance and Counseling", description: "Provides expert advice on educational and career planning. Experienced in setting realistic goals and creating actionable career plans." },
];

const heroTags = ["Strategy", "Guidance", "Engagement", "Exploration"];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">

      <ShowcaseNavbar />

      {/* Hero */}
      <main className="hero-gradient pb-16">
        <div className="container-page pt-14">
          <AnimatedShinyTextDemo />

          <CoverDemo />

          <p className="md:text-center text-lg md:text-xl my-6 md:my-8 md:w-4/5 mx-auto text-muted-foreground">
            Schedule a call with us to discuss the right path for yourself in minutes
          </p>

          <div className="flex md:justify-center items-center gap-x-3 flex-wrap gap-y-3">
            <Link
              href="/meeting"
              className="py-3 px-10 md:px-14 md:text-lg rounded-cta bg-cta text-white font-bold shadow-cta hover:bg-cta-hover hover:shadow-cta-hover transition-all duration-200"
            >
              Book a Call
            </Link>
            <Link
              href="/showcase"
              className="py-3 px-10 md:px-14 md:text-lg rounded-cta border border-border text-slate-700 hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 transition-all duration-200"
            >
              Showcase
            </Link>
            <Link
              href="/explore"
              className="py-3 px-10 md:px-14 md:text-lg rounded-cta border border-brand-200 text-brand-700 hover:bg-brand-50 transition-all duration-200"
            >
              Explore
            </Link>
          </div>

          {/* Animated pills */}
          <div className="flex md:justify-center flex-wrap gap-3 mt-8">
            {heroTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-x-1.5 px-3 py-1.5 rounded-pill bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Stats */}
          <div className="md:flex items-center justify-between gap-y-6 mt-14 gap-x-20 mx-auto">
            <div className="md:w-2/5">
              <h2 className="text-xl font-medium text-slate-700 w-4/5">
                Trusted by elite institutions across the country
              </h2>
              <div className="flex my-6 gap-x-8 w-full">
                <div>
                  <div className="text-brand-700 text-3xl md:text-5xl font-display font-bold">
                    <NumberTicker value={2000} />+
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">Happy Clients</p>
                </div>
                <div className="w-px bg-border self-stretch" />
                <div className="flex-1 min-w-0">
                  <div className="text-brand-700 text-3xl md:text-5xl font-display font-bold whitespace-nowrap overflow-hidden">
                    <NumberTicker value={5000} />+
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">Guidance Sessions</p>
                </div>
              </div>
            </div>
            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  { logo: "/logo/logo.webp", name: "logo" },
                  { logo: "/logo/logo.webp", name: "logo" },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      {/* Services */}
      <Element name="services" id="services">
        <section className="section-pad section-alt">
          <div className="container-page">
            <WordPullUpDemo />
            <p className="md:text-center py-4 md:w-1/2 mx-auto text-lg md:text-xl text-muted-foreground">
              All of our services are designed to help you get your right path
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col h-full space-y-4 bg-white border border-border p-6 rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-full h-40 bg-brand-50 rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src={service.icon}
                      width={200}
                      height={200}
                      className="object-contain p-4 w-full h-40 group-hover:scale-105 transition-transform duration-300"
                      alt={service.title}
                    />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Velocity scroll */}
      <section className="py-16 overflow-hidden">
        <ScrollBasedVelocityDemo />
      </section>

      {/* Career Buddy CTA */}
      <div className="container-page mb-20">
        <div className="flex flex-col items-center justify-center text-center px-6 py-14 bg-brand-50 rounded-card border border-brand-100">
          <h3 className="mb-2 text-2xl md:text-3xl font-display font-semibold text-foreground">
            Prospera Career Buddy
          </h3>
          <p className="text-muted-foreground mb-8 text-base md:text-lg">AI-powered career guidance at your fingertips</p>
          <a
            href="https://career-guide-delta.vercel.app/"
            className="inline-block px-10 py-3 font-bold rounded-cta bg-cta text-white shadow-cta hover:bg-cta-hover hover:shadow-cta-hover transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Career Buddy
          </a>
        </div>
      </div>

      {/* Process */}
      <Element name="process" id="process">
        <section className="section-pad section-alt">
          <div className="container-page">
            <h2 className="text-3xl md:text-5xl md:text-center font-display font-medium text-foreground">
              Our{" "}
              <span className="text-brand-700">Creative</span>{" "}
              Process
            </h2>
            <p className="md:text-center py-4 md:w-1/2 mx-auto text-lg md:text-xl text-muted-foreground">
              Three simple steps to your perfect career path
            </p>

            {/* 3-step timeline */}
            <div className="relative flex flex-col md:flex-row items-start gap-10 md:gap-0 mt-12">
              {processSteps.map((step, i) => (
                <div key={step.number} className="flex-1 flex flex-col items-center text-center relative px-4">
                  {/* Connector */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px border-t-2 border-dashed border-brand-200" />
                  )}
                  {/* Node */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-brand-700 text-white flex items-center justify-center shadow-card-hover mb-4">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-brand-400 tracking-widest uppercase mb-1">{step.number}</div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Testimonial */}
      <section className="section-pad bg-brand-950">
        <div className="container-page md:flex items-center gap-x-16 space-y-8 md:space-y-0">
          <Image
            src="/logo/review.png"
            width={600}
            height={600}
            className="md:w-1/3 rounded-card border border-white/10 shadow-card-dark"
            alt="review"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <div className="w-12 h-12 rounded-full bg-cta/10 border border-cta/20 flex items-center justify-center mb-2">
              <span className="text-cta text-3xl font-serif leading-none pb-1">&ldquo;</span>
            </div>
            <p className="text-lg md:text-xl text-slate-300 italic leading-relaxed">
              As the founder of The Doon School, Dehradun, I am genuinely impressed with Prospera&apos;s Career
              Counselling and Guidance App. Their student counselling program stands out for its exceptional
              interactiveness and expert-level insights. Prospera&apos;s profound expertise and innovative approach
              in guiding students through their career choices reflect a remarkable commitment to excellence.
              Their dedication to providing top-notch educational support truly sets them apart in shaping the
              future of young minds.
            </p>
            <div className="flex items-center gap-x-1">
              {[...Array(5)].map((_, i) => (
                <IconStarFilled key={i} className="text-2xl text-cta" />
              ))}
            </div>
            <span className="text-lg font-display font-semibold text-white">
              S.R. Das
              <br />
              <span className="text-cta text-sm font-normal">Founder, The Doon School, Dehradun</span>
            </span>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <Element name="guarentees" id="guarentees">
        <section className="section-pad section-alt">
          <div className="container-page">
            <h2 className="text-3xl md:text-5xl md:text-center font-display font-medium text-foreground">
              Our guarantees to you.
            </h2>
            <p className="md:text-center mt-3 md:w-1/2 mx-auto text-lg md:text-xl text-muted-foreground">
              We ensure the highest quality of work, with the fastest delivery times.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              {guarantees.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-white border border-border rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 p-2.5 bg-brand-50 border border-brand-100 rounded-md flex items-center justify-center mb-4">
                    <Image
                      src={feature.icon}
                      width={32}
                      height={32}
                      alt={feature.title}
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="text-base font-display font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Team */}
      <Element name="experts" id="experts">
        <section className="section-pad">
          <div className="container-page">
            <h2 className="text-3xl md:text-5xl md:text-center font-display font-medium text-foreground">
              Our{" "}
              <span className="text-brand-700">Team of</span>{" "}
              Experts
            </h2>
            <p className="md:text-center py-4 md:w-1/2 mx-auto text-lg md:text-xl text-muted-foreground">
              Here is a list of some expert members from our team
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {experts.map((expert) => (
                <div
                  key={expert.name}
                  className="flex flex-col items-center text-center space-y-3 bg-white border border-border p-6 rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <PlaceholderAvatar name={expert.name} className="w-20 h-20 text-2xl" />
                  <div>
                    <h3 className="text-base font-display font-semibold text-foreground">{expert.name}</h3>
                    <p className="text-brand-700 text-xs font-medium mt-0.5">{expert.credential}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{expert.description}</p>
                </div>
              ))}
            </div>

            {/* Join Counselor CTA */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-14 mt-14 bg-brand-50 rounded-card border border-brand-100">
              <CheckCircle2 size={36} className="text-brand-700 mb-3" />
              <h3 className="mb-2 text-2xl md:text-3xl font-display font-semibold text-foreground">
                Join us at Prospera as a Counsellor
              </h3>
              <p className="text-muted-foreground mb-8 text-base md:text-lg">Share your expertise and shape the next generation</p>
              <a
                href="https://forms.gle/ThL3GFeSujdEp6Pb7"
                className="inline-block px-10 py-3 font-bold rounded-cta bg-cta text-white shadow-cta hover:bg-cta-hover hover:shadow-cta-hover transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join as a Counsellor
              </a>
            </div>
          </div>
        </section>
      </Element>

      {/* Chatbot CTA */}
      <div className="container-page mb-20">
        <div className="flex flex-col items-center justify-center text-center px-6 py-14 bg-white rounded-card border border-border shadow-card">
          <h3 className="mb-2 text-2xl md:text-3xl font-display font-semibold text-foreground">
            Have any questions or need assistance?
          </h3>
          <p className="text-muted-foreground mb-8 text-base md:text-lg">Our AI chatbot is here to help you 24/7</p>
          <a
            href="https://ai-chatbot-one-ochre.vercel.app/"
            className="inline-block px-10 py-3 font-bold rounded-cta bg-cta text-white shadow-cta hover:bg-cta-hover hover:shadow-cta-hover transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with Us
          </a>
        </div>
      </div>

      {/* Let's make things happen */}
      <section className="mb-20 container-page">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}
