
import HeroCarousel from "@/components/hero-carousel"
import TestimonialSection from "@/components/testimonial-section"
import { Logo } from "@/components/logo"
import { Features } from "@/components/features"
import { CaseStudies } from "@/components/case-studies"
import { Footer } from "@/components/footer"
import { Cta3 } from "@/shadcnblocks-Blocks/cta/cta3"

export default function Page() {
  return (
    <>
      <HeroCarousel />
      <div className="py-10 md:py-12">
        <Logo />
      </div>
      <div>
        <Features />
        <CaseStudies />
        <TestimonialSection />
        <Cta3 />
        <Footer />
   
      </div>
    </>
  )
}
