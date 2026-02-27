import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import PopularMenu from '@/components/popular-menu'
import FullMenu from '@/components/full-menu'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PopularMenu />
      <FullMenu />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
