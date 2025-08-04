import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
  // import { Guides } from "@/components/guides";
  // import { Articles } from "@/components/articles";
  // import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      
      <main className="min-h-screen relative w-full">
        <section aria-label="Hero Section">
          <Hero />
        </section>
        
        <section aria-label="About Section">
          <About />
        </section>
        
        <section aria-label="Services Section">
          <Services />
        </section>
        
        <section aria-label="Portfolio Section">
          <Work />
        </section>
        
        {/* <section aria-label="Guides Section">
          <Guides />
        </section>
        
        <section aria-label="Articles Section">
          <Articles />
        </section>
        
        <section aria-label="Testimonials Section">
          <Testimonials />
        </section> */}
        
        <section aria-label="Contact Section">
          <Contact />
        </section>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </>
  );
}
