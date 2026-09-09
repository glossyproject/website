import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Cta20 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div>
          <p className="text-center text-sm">Transform your business today.</p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <Separator className="shrink" />
            <Button size="lg">Get Started</Button>
            <Separator className="shrink" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta20 };
