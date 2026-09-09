const Stats11 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="bg-linear-to-b from-primary/10 md:border-border relative isolate overflow-hidden to-transparent md:border-x">
          <div className="absolute -left-px right-0 -z-20 h-full w-full bg-[linear-gradient(90deg,var(--muted-foreground)_1px,transparent_1px)] opacity-20 [-webkit-mask-image:linear-gradient(transparent_25%,black_25%,black_75%,transparent_75%)] [-webkit-mask-size:100%_16px] [background-size:calc(100%/16)_100%] [mask-image:linear-gradient(transparent_25%,black_25%,black_75%,transparent_75%)] [mask-size:100%_16px]" />

          <div>
            <h2 className="mb-16 max-w-3xl text-3xl font-semibold leading-10 sm:mb-24 md:mx-10">
              Revolutionizing healthcare with AI technology.
              <span className="text-primary/50 font-medium">
                {" "}
                Our advanced diagnostic platform helps doctors make accurate
                diagnoses in seconds.
              </span>
            </h2>
            <div className="border-border relative grid max-w-2xl gap-4 border-x pb-32 sm:grid-cols-2 sm:gap-10 sm:pb-44 md:ml-10 md:border-0">
              <div className="border-primary bg-background absolute inset-0 -left-[calc(1000px-22vw)] -top-[1100px] -z-10 size-[1500px] rounded-full border sm:-left-[185%] sm:-top-[480%] sm:size-[2000px] md:-left-[294%] md:-top-[906%] md:size-[3500px] lg:-left-[380%] lg:-top-[1186%] lg:size-[4500px] xl:-left-[350%] xl:-top-[1200%] 2xl:-left-[345%] 2xl:-top-[1196%]"></div>
              <div className="flex flex-col gap-2">
                <span className="flex gap-5 text-3xl font-semibold">
                  <span className="bg-primary/50 relative -left-px w-px"></span>
                  1,000,000+
                </span>
                <p className="text-muted-foreground/80 pl-5 font-medium">
                  Diagnoses Made
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex gap-5 text-3xl font-semibold">
                  <span className="bg-primary/50 relative -left-px w-px"></span>
                  95%
                </span>
                <p className="text-muted-foreground/80 pl-5 font-medium">
                  Diagnostic Accuracy
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex gap-5 text-3xl font-semibold">
                  <span className="bg-primary/50 relative -left-px w-px"></span>
                  3,000+
                </span>
                <p className="text-muted-foreground/80 pl-5 font-medium">
                  Healthcare Providers
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex gap-5 text-3xl font-semibold">
                  <span className="bg-primary/50 relative -left-px w-px"></span>
                  2.5s
                </span>
                <p className="text-muted-foreground/80 pl-5 font-medium">
                  Latency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats11 };
