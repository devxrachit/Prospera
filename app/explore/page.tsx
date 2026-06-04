import Footer from "@/components/footer";
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/demos/hero-video-dialog-demo";
import ShowcaseNavbar from "@/components/showcase-navbar";
import Link from "next/link";

const streams = [
  {
    title: "The Science Stream",
    description: "These are some points one should consider before choosing science stream",
    points: [
      "Diverse Career Options: Science opens doors to numerous careers in engineering, medicine, research, and technology.",
      "Problem-Solving Skills: It enhances analytical and problem-solving skills through logical and systematic approaches.",
      "Innovation Opportunities: Science drives innovation and technological advancements, allowing you to contribute to groundbreaking discoveries.",
      "Strong Foundation for Further Studies: It provides a solid foundation for advanced studies in specialized fields like astrophysics, biotechnology, or environmental science.",
      "High Demand: Science professionals are often in high demand, leading to competitive salaries and job security.",
      "Interdisciplinary Learning: It fosters interdisciplinary learning, combining knowledge from physics, chemistry, biology, and mathematics.",
      "Global Impact: Science has a profound impact on global issues such as health, climate change, and sustainability, enabling you to make a difference.",
    ],
    videoSrc: "https://www.youtube.com/embed/2CTv5JRMBvM?si=2Vm8V97wwcC-mZyL",
    thumbnailSrc: "images/thumbnail1.jpg",
    gameHref: "https://kunj2124.github.io/HangmanScience/",
    badge: "Science",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
    accent: "text-blue-700",
  },
  {
    title: "The Commerce Stream",
    description: "These are some points one should consider before choosing commerce stream",
    points: [
      "Business Skills: Commerce equips you with essential business and financial skills, useful for various careers in business and finance.",
      "Career Opportunities: It opens pathways to careers in accounting, finance, marketing, and management.",
      "Entrepreneurial Skills: It provides a foundation for starting and managing your own business.",
      "Understanding of Economics: You gain a strong grasp of economic principles and market dynamics.",
      "Versatile Education: Commerce knowledge is applicable in diverse industries and sectors.",
      "Higher Earning Potential: Careers in commerce often have competitive salary prospects.",
      "Global Applicability: Business and financial skills are in demand worldwide, offering opportunities in international markets.",
    ],
    videoSrc: "https://www.youtube.com/embed/IuZC-kOzn8o?si=76SV_CW-sBp-u2q9",
    thumbnailSrc: "images/thumbnail2.jpg",
    gameHref: "https://kunj2124.github.io/HangmanCommerce/",
    badge: "Commerce",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    accent: "text-emerald-700",
  },
  {
    title: "The Arts Stream",
    description: "These are some points one should consider before choosing arts stream",
    points: [
      "Creativity and Expression: Arts allows for personal expression and the development of creative skills.",
      "Critical Thinking: It fosters critical thinking and analytical skills through the study of literature, history, and philosophy.",
      "Cultural Awareness: You gain a deep understanding of different cultures and historical contexts.",
      "Versatile Careers: Arts graduates can pursue diverse careers in education, media, design, and public relations.",
      "Flexibility: The arts provide a broad knowledge base, allowing for career flexibility and adaptability.",
      "Personal Growth: Studying arts often enhances emotional intelligence and empathy.",
      "Contribution to Society: Arts play a crucial role in societal development and cultural enrichment.",
    ],
    videoSrc: "https://www.youtube.com/embed/qh1LiVAsOtI?si=RGKGb3M4ymhFbvXv",
    thumbnailSrc: "images/thumbnail3.jpg",
    gameHref: "https://kunj2124.github.io/HangmanHumanities/",
    badge: "Arts",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
    accent: "text-purple-700",
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <ShowcaseNavbar />

      {/* Resource Portal CTA */}
      <div className="flex items-center justify-center p-6 mt-10">
        <Link
          href="/explore/resource"
          className="py-3 px-10 md:px-16 md:text-lg rounded-cta bg-cta text-white font-bold shadow-cta hover:bg-cta-hover hover:shadow-cta-hover transition-all duration-200"
        >
          Visit our Resource Portal
        </Link>
      </div>

      <section className="container-page pb-20">

        {/* Hero heading */}
        <div className="flex items-center justify-center relative mt-10">
          <h1 className="text-3xl lg:text-5xl font-display font-semibold max-w-3xl mx-auto md:text-center text-foreground">
            Choose the right career that aligns with your personality
          </h1>
        </div>

        {/* Stream divider */}
        <div className="my-14 flex items-center gap-x-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-brand-700 text-xs tracking-widest uppercase font-semibold">Streams</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Stream sections */}
        {streams.map((stream, idx) => (
          <div
            key={stream.title}
            className={`mb-20 rounded-card border border-border shadow-card p-8 md:p-10 ${idx % 2 === 1 ? "bg-slate-50/60" : "bg-white"}`}
          >
            <div className={`inline-block mb-3 px-3 py-1 rounded-pill border text-xs font-semibold tracking-wide ${stream.badgeColor}`}>
              {stream.badge}
            </div>
            <h2 className={`text-3xl md:text-4xl font-display font-semibold mb-2 ${stream.accent}`}>
              {stream.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              {stream.description}
            </p>

            {/* Points */}
            <div className="md:w-4/5 mb-8">
              <ul className="space-y-2.5">
                {stream.points.map((point, i) => (
                  <li key={i} className="flex gap-x-3 items-start text-slate-700 text-sm md:text-base">
                    <span className="text-brand-500 mt-1 flex-shrink-0">◆</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Video */}
            <div className="flex justify-center items-center mb-6">
              <HeroVideoDialogDemoTopInBottomOut
                videoSrc={stream.videoSrc}
                thumbnailSrc={stream.thumbnailSrc}
              />
            </div>

            {/* Game CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                Test your knowledge with our interactive game
              </p>
              <a
                href={stream.gameHref}
                className="inline-block px-8 py-2.5 font-semibold rounded-cta bg-cta text-white shadow-cta hover:bg-cta-hover hover:shadow-cta-hover transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play Game
              </a>
            </div>
          </div>
        ))}

        {/* NEP section */}
        <div className="mb-16 bg-brand-50 rounded-card border border-brand-100 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground md:text-center mb-4">
            The NEP
          </h2>
          <p className="md:text-center md:w-3/4 mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
            The National Education Policy (NEP) aims to transform the Indian education system by fostering holistic
            development, promoting multidisciplinary learning, and enhancing employability. It emphasizes the need
            for career guidance and counseling to help students make informed decisions about their future paths.
            <br /><br />
            Prospera aligns with the NEP by offering comprehensive career counseling services. We provide personalized
            assessments to understand each student&apos;s strengths and interests. Our expert counselors use this data to
            suggest career options that fit individual profiles. Prospera also integrates multidisciplinary approaches,
            helping students explore various fields and make well-rounded career choices.
          </p>
        </div>

        {/* Divider */}
        <div className="my-12 flex items-center gap-x-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-brand-700 text-xs tracking-widest uppercase font-semibold">Special Gift</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Free guide CTA */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-14 bg-white rounded-card border border-border shadow-card mb-10">
          <h3 className="mb-2 text-2xl md:text-3xl font-display font-semibold text-foreground">
            Since you came this far...
          </h3>
          <p className="text-muted-foreground mb-8 text-base md:text-lg max-w-md mx-auto">
            Here is a Special Gift — a Career Choice Analysis guide, completely free from our side!
          </p>
          <a
            href="https://drive.google.com/file/d/15ptMCzrw2rFjmlum5UcUGm5zLdYSY9Gl/view?usp=drivesdk"
            className="inline-block px-10 py-3 font-bold rounded-cta bg-cta text-white shadow-cta hover:bg-cta-hover hover:shadow-cta-hover transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Free Guide
          </a>
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Explore;
