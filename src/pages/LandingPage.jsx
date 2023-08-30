import Navbar from '@/components/landing-page/Navbar'
import Hero from '@/components/landing-page/Hero'
import About from '@/components/landing-page/About'
import Newsletter from '@/components/landing-page/Newsletter'
import Footer from '@/components/landing-page/Footer'
import Service from '@/components/landing-page/Service'

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Newsletter />
      <Footer />
    </section>
  )
}
