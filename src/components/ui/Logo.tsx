import Image from "next/image";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const textSize =
    size === "sm"
      ? "text-lg"
      : size === "lg"
        ? "text-3xl"
        : "text-2xl";
  const imgSize =
    size === "sm"
      ? 28
      : size === "lg"
        ? 44
        : 36;

  return (
    <div className="flex items-center gap-2.5 ">
      <Image
        src="/logo.png"
        alt="SwipeAce logo"
        width={imgSize}
        height={imgSize}
        className="flex-shrink-0 rounded-xl"
      />
      <span className={`${textSize} font-black text-text-primary tracking-tight`}>
        SwipeAce
      </span>
    </div>
  );
}
