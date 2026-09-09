import { PatternPlaceholder } from "@/components/shadcnblocks/pattern-placeholder";
import { cn } from "@/lib/utils";

interface BackgroundPattern115Props {
  className?: string;
}

const BackgroundPattern115 = ({ className }: BackgroundPattern115Props) => {
  return (
    <section
      className={cn(
        "relative flex h-svh max-h-[1200px] min-h-[600px] w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* radial gradient with Center fade dot Pattern */}

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(oklch(from var(--primary) calc(l * 0.8) calc(c * 1.5) h / 1) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1), transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1), transparent 60%)",
        }}
      />
      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern115 };
