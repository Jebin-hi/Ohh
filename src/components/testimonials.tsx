import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Jebs has this amazing ability to take our complex tech ideas and turn them into content that actually makes sense to normal people. She's a game-changer!",
    name: "Sarah Mitchell",
    designation: "Marketing Director, TechFlow",
    src: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Working with Jebs is like having a friend who just gets your brand. She writes like she's part of our team, not just a contractor.",
    name: "David Johnson",
    designation: "CEO, HealthFirst",
    src: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Jebs doesn't just write content - she creates experiences. Our email open rates went up 45% after she started writing for us!",
    name: "Lisa Wang",
    designation: "Founder, BeautyGlow",
    src: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="container mx-auto container-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl">What people say</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take my word for it. Here&apos;s what some awesome people I&apos;ve worked with have to say.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
} 