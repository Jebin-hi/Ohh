import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto container-spacing section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl">Let's work together!</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to create something amazing? I&apos;m always excited to work with new people 
              and bring ideas to life. Let&apos;s chat about your project!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center btn-group">
            <Button size="lg" className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Send me a message
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 px-8 py-6 text-lg font-semibold">
              <MessageCircle className="mr-3 h-5 w-5" />
              Schedule a call
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="mailto:hello@jebs.com" className="flex items-center space-x-3 text-muted-foreground hover:text-blue-400 transition-colors duration-300 group">
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg">hello@jebs.com</span>
            </a>
            <a href="https://twitter.com/jebs" className="flex items-center space-x-3 text-muted-foreground hover:text-blue-400 transition-colors duration-300 group">
              <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg">@jebs</span>
            </a>
          </div>
          
          <div className="pt-8 border-t border-border/40">
            <p className="text-muted-foreground">
              Thanks for stopping by! Looking forward to creating something awesome together. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 