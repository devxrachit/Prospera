import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";

const sections = [
  {
    stream: "Science",
    badge: "Science Section",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
    headingColor: "text-blue-700",
    accent: "text-brand-700",
    opportunities: [
      "Engineering: Careers in fields such as Civil, Mechanical, Electrical, Computer, and Chemical Engineering.",
      "Medicine: Roles as doctors, surgeons, pharmacists, nurses, or medical researchers.",
      "Research: Opportunities in academic, industrial, or government research institutions in areas like physics, chemistry, biology, and environmental science.",
      "Technology: Positions in software development, data science, artificial intelligence, and IT consulting.",
      "Biotechnology: Careers in genetic engineering, bioinformatics, and pharmaceutical development.",
      "Environmental Science: Roles in environmental consultancy, conservation, and sustainability management.",
      "Astronomy and Space Science: Opportunities as astronomers, astrophysicists, or space mission specialists.",
      "Forensic Science: Careers in crime labs, forensic analysis, and criminal investigations.",
      "Healthcare Technology: Roles in developing medical devices, health informatics, and biomedical engineering.",
      "Academia: Teaching and research positions at universities and colleges.",
    ],
    degrees: [
      "Bachelor of Science (B.Sc.)",
      "Bachelor of Technology (B.Tech.)",
      "Bachelor of Engineering (B.E.)",
      "Master of Science (M.Sc.)",
      "Master of Technology (M.Tech.)",
      "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
      "Bachelor of Science in Nursing (B.Sc. Nursing)",
    ],
    colleges: [
      "Meerut Institute of Engineering and Technology (MIET) Meerut",
      "Indian Institute of Technology (IIT) Bombay",
      "Indian Institute of Technology (IIT) Delhi",
      "Indian Institute of Science (IISc) Bangalore",
      "All India Institute of Medical Sciences (AIIMS) Delhi",
      "National Institute of Technology (NIT) Trichy",
    ],
    exams: ["JEE Main", "JEE Advance", "NEET", "COMEDK", "BITSAT"],
  },
  {
    stream: "Commerce",
    badge: "Commerce Section",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    headingColor: "text-emerald-700",
    accent: "text-brand-700",
    opportunities: [
      "Chartered Accountant (CA): Provides financial services including auditing, taxation, and accounting.",
      "Financial Analyst: Analyzes financial data to provide investment recommendations and insights.",
      "Business Consultant: Advises companies on how to improve their operations, efficiency, and profitability.",
      "Marketing Manager: Develops and implements marketing strategies to promote products or services.",
      "Investment Banker: Specializes in financial services related to raising capital, mergers, and acquisitions.",
      "Tax Consultant: Provides expertise on tax laws and regulations to help individuals and businesses.",
    ],
    degrees: [
      "Bachelor of Commerce (B.Com)",
      "Master of Commerce (M.Com)",
      "Chartered Accountancy (CA)",
      "Company Secretary (CS)",
      "Cost and Management Accounting (CMA)",
      "Bachelor of Business Administration (BBA)",
    ],
    colleges: [
      "Shri Ram College of Commerce (SRCC), Delhi",
      "Lady Shri Ram College for Women (LSR), Delhi",
      "St. Xavier College, Mumbai",
      "Narsee Monjee College of Commerce and Economics, Mumbai",
      "Jai Hind College, Mumbai",
      "H.R. College of Commerce and Economics, Mumbai",
    ],
    exams: ["CA CPT (now Foundation)", "CS Foundation", "CMA Foundation", "BBA Entrance Exams (like DU JAT)"],
  },
  {
    stream: "Humanities",
    badge: "Humanities Section",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
    headingColor: "text-purple-700",
    accent: "text-brand-700",
    opportunities: [
      "Graphic Designer: Creates visual content for print and digital media, including branding, advertising, and web design.",
      "Art Director: Oversees the visual aspects of projects, including advertising campaigns, magazines, and films.",
      "Content Writer: Produces written content for various platforms such as websites, blogs, and social media.",
      "Journalist: Reports news, writes articles, and conducts interviews for newspapers, magazines, and broadcast media.",
      "Museum Curator: Manages museum collections and organizes exhibitions to educate the public.",
      "Theater Actor: Performs in stage productions, bringing characters and stories to life through acting.",
      "Film Director: Oversees the creative aspects of film production and guides the overall vision of the film.",
    ],
    degrees: [
      "Bachelor of Arts (B.A.)",
      "Master of Arts (M.A.)",
      "Bachelor of Fine Arts (BFA)",
      "Master of Fine Arts (MFA)",
      "Diploma in Journalism and Mass Communication",
      "Bachelor of Design (B.Des)",
    ],
    colleges: [
      "Shri Ram College of Commerce (SRCC), Delhi",
      "Lady Shri Ram College for Women (LSR), Delhi",
      "St. Xavier's College, Mumbai",
      "Jadavpur University, Kolkata",
      "Jamia Millia Islamia, Delhi",
      "University of Delhi, Delhi",
    ],
    exams: ["UGC NET", "CSI RNET", "CUCUET", "NID (Design Entrance Exam)"],
  },
];

const Resource = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <ShowcaseNavbar />

      <section className="container-page pb-20">

        {/* Hero */}
        <div className="flex flex-col items-center justify-center pt-16 mb-4">
          <h1 className="text-3xl lg:text-5xl font-display font-semibold text-foreground md:text-center">
            Resource Portal
          </h1>
          <p className="md:text-center py-5 md:w-3/5 mx-auto text-muted-foreground text-base md:text-lg">
            Explore career opportunities, degrees, top colleges, and key entrance exams for every stream.
          </p>
        </div>

        {/* Stream sections */}
        {sections.map((section, idx) => (
          <div key={section.stream} className={`mt-14 rounded-card border border-border p-8 md:p-10 shadow-card ${idx % 2 === 1 ? "bg-slate-50/60" : "bg-white"}`}>

            {/* Stream heading */}
            <div className={`inline-block mb-3 px-3 py-1 rounded-pill border text-xs font-semibold tracking-wide ${section.badgeColor}`}>
              {section.badge}
            </div>
            <h2 className={`text-3xl md:text-4xl font-display font-semibold mb-6 ${section.headingColor}`}>
              {section.stream} Section
            </h2>

            {/* Sub-sections */}
            {[
              { label: "Opportunities Available", items: section.opportunities },
              { label: "Degrees Available", items: section.degrees },
              { label: "Premium Colleges", items: section.colleges },
              { label: "Famous Exams", items: section.exams },
            ].map(({ label, items }) => (
              <div key={label} className="mt-8">
                <h3 className={`text-xl md:text-2xl font-display font-semibold md:text-left mb-4 ${section.accent}`}>
                  {label}
                </h3>
                <ul className="space-y-2.5 md:w-4/5">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-x-3 items-start text-slate-700 text-sm md:text-base">
                      <span className="text-brand-500 mt-1 flex-shrink-0">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <div className="my-16" />
      </section>

      <Footer />
    </div>
  );
};

export default Resource;
