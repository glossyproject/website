const Feature77 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center">
        <div className="text-center">
          <h3 className="text-pretty text-4xl font-semibold md:mb-4 lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Key Platform Features
          </h3>
        </div>
      </div>
      <div className="container mt-16">
        <div className="relative">
          <div className="grid border md:grid-cols-2 md:divide-x">
            <a
              href="#"
              className="border-border group relative flex flex-col items-center pb-8 pt-8 text-center transition-all duration-200 md:border-t md:px-8 md:pb-12 md:pt-12 lg:px-12 lg:pb-20 lg:pt-16"
            >
              <div className="bg-border absolute top-0 h-px w-full md:hidden" />
              <div className="aspect-1/1 mb-8 flex w-16 items-center justify-center md:w-[6.25rem] lg:mb-[3.25rem]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
                  alt="Real-time Analytics"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h2 className="mb-4 text-2xl font-semibold md:mb-5">
                Real-time Analytics
              </h2>
              <p className="text-muted-foreground mb-auto">
                Track your performance with instant insights. Our powerful
                analytics engine processes data in real-time, providing
                actionable metrics and customizable dashboards for informed
                decision-making.
              </p>
            </a>
            <a
              href="#"
              className="border-border group relative flex flex-col items-center pb-8 pt-8 text-center transition-all duration-200 md:border-t md:px-8 md:pb-12 md:pt-12 lg:px-12 lg:pb-20 lg:pt-16"
            >
              <div className="bg-border absolute top-0 h-px w-full md:hidden" />
              <div className="aspect-1/1 mb-8 flex w-16 items-center justify-center md:w-[6.25rem] lg:mb-[3.25rem]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
                  alt="AI-Powered Automation"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h2 className="mb-4 text-2xl font-semibold md:mb-5">
                AI-Powered Automation
              </h2>
              <p className="text-muted-foreground mb-auto">
                Streamline your workflow with intelligent automation. Our AI
                system learns from your patterns to automate repetitive tasks
                and suggest optimizations for improved efficiency.
              </p>
            </a>
          </div>
          <div className="absolute -left-[5px] -top-[5px]">
            <div className="bg-primary size-[12px] rounded-full"></div>
          </div>
          <div className="absolute -right-[5px] -top-[5px]">
            <div className="bg-primary size-[12px] rounded-full"></div>
          </div>
          <div className="absolute -bottom-[5px] -left-[5px]">
            <div className="bg-primary size-[12px] rounded-full"></div>
          </div>
          <div className="absolute -bottom-[5px] -right-[5px]">
            <div className="bg-primary size-[12px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature77 };
