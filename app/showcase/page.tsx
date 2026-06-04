import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/demos/hero-video-dialog-demo";
import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const Showcase = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <ShowcaseNavbar />

      <section className="container-page pb-16">

        {/* Hero heading */}
        <div className="flex items-center justify-center relative mt-16 mb-4">
          <h1 className="text-3xl lg:text-5xl font-display font-semibold max-w-3xl mx-auto md:text-center text-foreground">
            These are our Hall of Fame Clients
          </h1>
        </div>

        {/* Divider */}
        <div className="my-10 flex items-center gap-x-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-brand-700 text-xs tracking-widest uppercase font-semibold">Elite Partners</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <BlurFadeDemo />

        <div className="my-16 flex items-center gap-x-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-brand-700 text-xs tracking-widest uppercase font-semibold">In Action</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold md:text-center text-foreground mb-10">
            Sample Counselling Session
          </h2>
          <div className="flex justify-center items-center">
            <HeroVideoDialogDemoTopInBottomOut
              videoSrc="https://www.youtube.com/embed/cWzKBZasnOc?si=cTGDxTC9ZbF4RBtT"
              thumbnailSrc="images/thumbnail4.jpg"
            />
          </div>
        </div>

        <div className="my-16">
          <LetsMakeThingsHappenSection />
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Showcase;
