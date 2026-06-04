interface PlaceholderAvatarProps {
  name: string;
  className?: string;
}

const colors = [
  "bg-brand-100 text-brand-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-purple-100 text-purple-700",
  "bg-rose-100 text-rose-700",
  "bg-teal-100 text-teal-700",
];

const PlaceholderAvatar = ({ name, className = "" }: PlaceholderAvatarProps) => {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const colorIndex =
    name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % colors.length;

  return (
    <div
      className={`flex items-center justify-center rounded-full font-display font-semibold select-none ${colors[colorIndex]} ${className}`}
      aria-label={name}
    >
      {initials}
    </div>
  );
};

export default PlaceholderAvatar;
