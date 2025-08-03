import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Jebs has this amazing ability to take our complex tech ideas and turn them into content that actually makes sense to normal people. She's a game-changer!",
    name: "Sarah Mitchell",
    role: "Marketing Director, TechFlow",
    initials: "SM"
  },
  {
    quote: "Working with Jebs is like having a friend who just gets your brand. She writes like she's part of our team, not just a contractor.",
    name: "David Johnson",
    role: "CEO, HealthFirst",
    initials: "DJ"
  },
  {
    quote: "Jebs doesn't just write content - she creates experiences. Our email open rates went up 45% after she started writing for us!",
    name: "Lisa Wang",
    role: "Founder, BeautyGlow",
    initials: "LW"
  }
];

export function Testimonials() {
  return (
    <section className="container mx-auto container-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-12 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl">What people say</h2>
                      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take my word for it. Here&apos;s what some awesome people I&apos;ve worked with have to say.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <CardContent className="card-content">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="text-lg">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 