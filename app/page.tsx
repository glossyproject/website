
import HeroCarousel from "@/components/hero-carousel"
import TestimonialSection from "@/components/testimonial-section"
import { Logo } from "@/components/logo"
import { Features } from "@/components/features"
import { CaseStudies } from "@/components/case-studies"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"

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
        <Cta
          heading="Rawat Mobil Anda dengan Standar Terbaik"
          description="Percayakan perawatan, perbaikan, dan penyempurnaan kendaraan Anda kepada Glossy Auto Group."
        />
        <Footer />
   
      </div>
    </>
  )
}
