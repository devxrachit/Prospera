import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

const works = [
  {
    imageUrl: "/images/oxford_international.png",
    title: "Oxford International School, Hoshiarpur",
  },
  {
    imageUrl: "/images/St. George's college_new.png",
    title: "St George's College, Mussoorie",
  },
  {
    imageUrl: "/images/The_Doon_School,_Dehradun_-_logo_new.png",
    title: "The Doon School, Dehradun",
  },
  {
    imageUrl: "/images/Welham_Girls'_School_logo.png",
    title: "Welham Girls' School, Dehradun",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-6 mt-10 justify-items-center">
        {works.map(({ imageUrl, title }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className="rounded-card bg-white border border-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5 p-4 transition-all duration-300 w-full"
          >
            <Image
              height={400}
              width={600}
              className="h-5/6 w-full object-cover rounded-md"
              src={imageUrl}
              alt={title}
            />
            <h3 className="text-base font-display font-semibold p-3 text-foreground">{title}</h3>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
