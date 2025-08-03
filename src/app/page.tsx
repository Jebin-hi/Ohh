import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Guides } from "@/components/guides";
import { Articles } from "@/components/articles";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative w-full">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Guides />
      <Articles />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
