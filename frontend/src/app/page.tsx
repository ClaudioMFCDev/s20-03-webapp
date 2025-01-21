import { FaqSection } from '@/components/landing-page/faq-section'
import { Footer } from '@/components/landing-page/footer'
import { HeaderLanding } from '@/components/landing-page/header-landing'
import { HeroSection } from '@/components/landing-page/hero-section'
import { ServicesSection } from '@/components/landing-page/services-section'

export default function HomePage() {
  return (
    <div>
      <HeaderLanding />
      <HeroSection />
      <ServicesSection />
      <FaqSection />
      <Footer />
    </div>
  )
}
