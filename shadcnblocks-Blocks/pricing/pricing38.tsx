import { Check, Info, TrendingUp, Users } from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const starterFeatures = [
  "Social Media Management",
  "Content Creation",
  "Basic Analytics",
  "Monthly Reports",
];

const professionalFeatures = [
  "Advanced SEO Optimization",
  "Google Ads Management",
  "Facebook & Instagram Ads",
  "Email Marketing Campaigns",
  "Content Strategy",
  "Competitor Analysis",
  "Conversion Optimization",
  "Landing Page Design",
  "Video Content Creation",
  "Influencer Partnerships",
  "500+ Marketing Templates",
  "All Starter features included",
];

const enterpriseFeatures = [
  "Unlimited Campaign Management",
  "Dedicated Account Manager",
  "Priority Support 24/7",
  "All Professional features included",
];

const Pricing38 = () => {
  return (
    <section className="py-32">
      <div className="container px-4">
        <div className="bg-muted/40 border-border rounded-lg border p-1">
          <div className="border-border grid gap-12 rounded-sm border p-4 md:p-6 lg:grid-cols-2">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground text-xs font-medium uppercase">
                  SERVICE PACKAGES
                </p>
                <h2 className="text-2xl font-medium tracking-tight">
                  Grow your business with proven strategies.
                </h2>
                <p className="text-muted-foreground">
                  Choose from our comprehensive marketing packages designed to
                  scale your business from startup to enterprise level success.
                </p>
                <Alert className="bg-muted/50 w-fit items-center has-[>svg]:gap-x-2 [&>svg]:translate-y-0">
                  <Info />
                  <AlertTitle className="line-clamp-none text-xs">
                    All packages include a free consultation and strategy
                    session.
                  </AlertTitle>
                </Alert>
              </div>
              <Separator className="data-[orientation=horizontal]:w-12" />
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground text-xs font-medium uppercase">
                  CUSTOM SOLUTIONS
                </p>
                <h2 className="text-2xl font-medium tracking-tight">
                  Need a tailored approach?
                </h2>
                <p className="text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact us
                  </a>{" "}
                  for custom marketing solutions or to discuss specific campaign
                  requirements that align with your business goals.
                </p>
              </div>
              <Separator className="data-[orientation=horizontal]:w-12" />
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground text-xs font-medium uppercase">
                  SUPPORT
                </p>
                <h2 className="text-2xl font-medium tracking-tight">
                  Ongoing optimization
                </h2>
                <p className="text-muted-foreground">
                  We continuously monitor and optimize your campaigns for
                  maximum ROI. Need adjustments? We're here to help.{" "}
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <RadioGroup defaultValue="starter">
                <label
                  htmlFor="starter"
                  className="border-border has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-background group relative flex cursor-pointer flex-col gap-4 rounded-lg border p-8"
                >
                  <RadioGroupItem
                    value="starter"
                    id="starter"
                    className="hidden"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">Starter</h3>
                      <p className="text-muted-foreground text-sm">
                        Perfect for small businesses
                      </p>
                    </div>
                    <span className="text-2xl font-bold">
                      $0
                      <span className="text-muted-foreground text-base font-normal">
                        /month
                      </span>
                    </span>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Users className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                      <p className="text-primary/80 text-sm">
                        3 social media platforms
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                      <p className="text-primary/80 text-sm">
                        Basic performance tracking
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {starterFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                        <p className="text-primary/80 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <span className="bg-primary absolute -right-2 -top-2 z-10 flex size-5 items-center justify-center rounded-full opacity-0 group-has-[[data-state=checked]]:opacity-100">
                    <Check className="text-background size-3" />
                  </span>
                  <div className="max-h-0 overflow-hidden transition-all duration-300 ease-out group-has-[[data-state=checked]]:max-h-20">
                    <Button className="mt-4 w-full opacity-0 transition-opacity duration-300 group-has-[[data-state=checked]]:opacity-100">
                      Get Started
                    </Button>
                  </div>
                </label>
                <label
                  htmlFor="pro"
                  className="border-border has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-background group relative flex cursor-pointer flex-col gap-4 rounded-lg border p-8"
                >
                  <RadioGroupItem value="pro" id="pro" className="hidden" />
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">Pro</h3>
                      <p className="text-muted-foreground text-sm">
                        Complete marketing solution
                      </p>
                    </div>
                    <span className="text-2xl font-bold">
                      $20
                      <span className="text-muted-foreground text-base font-normal">
                        /month
                      </span>
                    </span>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Users className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                      <p className="text-primary/80 text-sm">
                        All major platforms included
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                      <p className="text-primary/80 text-sm">
                        Advanced analytics & reporting
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {professionalFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                        <p className="text-primary/80 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <span className="bg-primary absolute -right-2 -top-2 z-10 flex size-5 items-center justify-center rounded-full opacity-0 group-has-[[data-state=checked]]:opacity-100">
                    <Check className="text-background size-3" />
                  </span>
                  <div className="max-h-0 overflow-hidden transition-all duration-300 ease-out group-has-[[data-state=checked]]:max-h-20">
                    <Button className="mt-4 w-full opacity-0 transition-opacity duration-300 group-has-[[data-state=checked]]:opacity-100">
                      Get Started
                    </Button>
                  </div>
                </label>
                <label
                  htmlFor="enterprise"
                  className="border-border has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-background group relative flex cursor-pointer flex-col gap-4 rounded-lg border p-8"
                >
                  <RadioGroupItem
                    value="enterprise"
                    id="enterprise"
                    className="hidden"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">Enterprise</h3>
                      <p className="text-muted-foreground text-sm">
                        Unlimited growth potential
                      </p>
                    </div>
                    <span className="text-2xl font-bold">
                      $99
                      <span className="text-muted-foreground text-base font-normal">
                        /month
                      </span>
                    </span>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Users className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                      <p className="text-primary/80 text-sm">
                        Unlimited platform management
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                      <p className="text-primary/80 text-sm">
                        Real-time performance monitoring
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {enterpriseFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                        <p className="text-primary/80 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <span className="bg-primary absolute -right-2 -top-2 z-10 flex size-5 items-center justify-center rounded-full opacity-0 group-has-[[data-state=checked]]:opacity-100">
                    <Check className="text-background size-3" />
                  </span>
                  <div className="max-h-0 overflow-hidden transition-all duration-300 ease-out group-has-[[data-state=checked]]:max-h-20">
                    <Button className="mt-4 w-full opacity-0 transition-opacity duration-300 group-has-[[data-state=checked]]:opacity-100">
                      Get Started
                    </Button>
                  </div>
                </label>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing38 };
