"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Contact() {
    const emailSubject = encodeURIComponent("Content Writing Project - Let's create something amazing! ✍️");
    const emailBody = encodeURIComponent(`Hi Jebin,

I came across your portfolio and was impressed by your content writing work. I love how you focus on creating content that actually converts and tells stories that stick.

I have a project that could really benefit from your expertise in:
- Content strategy and copywriting
- Brand voice development
- SEO-optimized content
- Conversion-focused writing

I'd love to discuss how we could work together to create content that drives results.

Looking forward to hearing from you!

Best regards,
[Your name]`);
    
    const emailLink = `mailto:hello.jebin2025@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  

    const scheduleCallSubject = encodeURIComponent("Schedule a Call - Content Writing Consultation 📞");
    const scheduleCallBody = encodeURIComponent(`Hi Jebin,

I found your portfolio and would love to schedule a call to discuss a potential content writing project. Your approach to creating content that converts really resonates with what I'm looking for.

I'd like to discuss:
- My project requirements and goals
- Your content writing process
- Timeline and deliverables
- How we can work together effectively

When would be a good time for a 15-20 minute call?

Looking forward to connecting!

Best regards,
[Your name]`);
    
   const scheduleCallLink = `mailto:hello.jebin2025@gmail.com?subject=${scheduleCallSubject}&body=${scheduleCallBody}`;

  const handleEmailClick = () => {
    window.open(emailLink, '_blank');
  };

  const handleScheduleCallClick = () => {
    window.open(scheduleCallLink, '_blank');
  };

  return (
    <section id="contact" className="container mx-auto container-spacing section-padding ">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl">Let&apos;s work together!</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to create something amazing? I&apos;m always excited to work with new people 
              and bring ideas to life. Let&apos;s chat about your project!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center btn-group">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 cursor-pointer"
              onClick={handleEmailClick}
            >
              Send me a message
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              onClick={handleScheduleCallClick}
            >
              <MessageCircle className="mr-3 h-5 w-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              Schedule a call
            </Button>
          </div>
          
          {/* <div className="flex justify-center space-x-8">
            <a href="mailto:hello@jebs.com" className="flex items-center space-x-3 text-muted-foreground hover:text-blue-400 transition-colors duration-300 group">
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg">hello@jebs.com</span>
            </a>
          </div> */}
          
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