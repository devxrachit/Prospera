import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Prospera Career Counselling Portal"
      default_velocity={4}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-brand-700 drop-shadow-sm md:text-7xl md:leading-[5rem]"
    />
  );
}
