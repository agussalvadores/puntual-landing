import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { SocialProof } from '@/components/social-proof'
import { Features } from '@/components/features'
import { Industries } from '@/components/industries'
import { Pricing } from '@/components/pricing'
import { ContactForm } from '@/components/contact-form'
import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <Industries />
        <Pricing />
        <ContactForm />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
