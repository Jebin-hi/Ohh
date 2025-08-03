import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Coffee, Heart, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto container-spacing section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-blue-500/20 text-blue-400 px-6 py-3 rounded-full text-sm font-medium">
              <Sparkles className="h-5 w-5" />
              <span>Available for new projects</span>
            </div>
            
            <div className="space-y-6">
              <h1>
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Hi, I'm Jebs
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-normal">
                  👋 Nice to meet you!
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I turn coffee into content and ideas into stories that actually work. 
                When I&apos;m not writing, you&apos;ll find me exploring new coffee shops or 
                brainstorming my next big idea.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center btn-group">
              <Button size="lg" className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Let's Work Together
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 px-8 py-6 text-lg font-semibold">
                <BookOpen className="mr-3 h-5 w-5" />
                Read My Guides
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Coffee className="h-5 w-5 text-blue-400" />
                <span className="font-medium">Coffee enthusiast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-blue-400" />
                <span className="font-medium">Story lover</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-blue-400" />
                <span className="font-medium">Creative mind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 