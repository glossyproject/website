
import { Button } from "@/components/ui/button"
import { Feature3 } from "@/shadcnblocks-Blocks/feature/feature3"
import { Feature63 } from "@/shadcnblocks-Blocks/feature/feature63"
import { Hero111 } from "@/shadcnblocks-Blocks/hero/hero111"
import { Hero127 } from "@/shadcnblocks-Blocks/hero/hero127"
import { Hero163 } from "@/shadcnblocks-Blocks/hero/hero163"
import { Hero2 } from "@/shadcnblocks-Blocks/hero/hero2"
import { Hero226 } from "@/shadcnblocks-Blocks/hero/hero226"
import { Hero238 } from "@/shadcnblocks-Blocks/hero/hero238"
import { Hero246 } from "@/shadcnblocks-Blocks/hero/hero246"
import { Hero259 } from "@/shadcnblocks-Blocks/hero/hero259"
import { Hero4 } from "@/shadcnblocks-Blocks/hero/hero4"
import { Hero5 } from "@/shadcnblocks-Blocks/hero/hero5"
import { Hero70 } from "@/shadcnblocks-Blocks/hero/hero70"
import { Hero9 } from "@/shadcnblocks-Blocks/hero/hero9"
import { Logos17 } from "@/shadcnblocks-Blocks/logos/logos17"
import { Logos19 } from "@/shadcnblocks-Blocks/logos/logos19"
import HeroCarousel from "@/components/hero-carousel"
import { Logos26 } from "@/shadcnblocks-Blocks/logos/logos26"
import { Logos3 } from "@/shadcnblocks-Blocks/logos/logos3"
import { Logos4 } from "@/shadcnblocks-Blocks/logos/logos4"
import BeforeAfter from "@/components/before-after"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Page() {
  return (
    <>
      <HeroCarousel />
      <div className="py-10 md:py-12">
        <Logos4 />
      </div>
      <div className="pb-10 md:pb-12">
        <Feature63 />
        <BeforeAfter />
        <PortfolioSection />
        <TestimonialSection />
      </div>
    </>
  )
}
