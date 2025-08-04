"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, Users, TrendingUp } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Hero() {
  // Smooth scroll function
  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const handleContactClick = () => {
    smoothScrollTo("#contact");
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center container mx-auto container-spacing section-padding overflow-hidden" role="banner">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Moving Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float-8 8s ease-in-out infinite',
          }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-blue-700/15 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float-10 10s ease-in-out infinite reverse',
          }} />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float-12 12s ease-in-out infinite',
          }} />

        {/* Enhanced Moving Spotlight Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-500/15 rounded-full blur-3xl"
          style={{
            animation: 'spotlight-15 15s ease-in-out infinite',
          }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/12 to-blue-500/12 rounded-full blur-3xl"
          style={{
            animation: 'spotlight-18 18s ease-in-out infinite reverse',
          }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl"
          style={{
            animation: 'spotlight-20 20s ease-in-out infinite',
          }} />

        {/* Additional Glowing Effects */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-300/8 to-indigo-400/8 rounded-full blur-3xl"
          style={{
            animation: 'spotlight-12 12s ease-in-out infinite reverse',
          }} />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-r from-indigo-400/6 to-blue-300/6 rounded-full blur-3xl"
          style={{
            animation: 'spotlight-16 16s ease-in-out infinite',
          }} />
        <div className="absolute top-2/3 right-1/2 w-48 h-48 bg-gradient-to-r from-cyan-400/8 to-blue-400/8 rounded-full blur-3xl"
          style={{
            animation: 'spotlight-14 14s ease-in-out infinite reverse',
          }} />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="space-y-16">
          {/* Main Headline */}
          <header className="space-y-8">
            <h1 className="space-y-4">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  I write words that
                </span>
                <br />
                <span className="text-slate-200">
                  actually work
                </span>
              </span>

              <TextGenerateEffect
                words="No fluff. No jargon. Just content that converts and stories that stick. If you're tired of generic copy that sounds like everyone else, you're in the right place."
                className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed tracking-wide"
                duration={1}
              />
            </h1>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-slate-400" role="list" aria-label="Social proof">
              <div className="flex items-center space-x-2" role="listitem">
                <Users className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <span className="font-medium">50+ brands trust me</span>
              </div>
              <div className="flex items-center space-x-2" role="listitem">
                <TrendingUp className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <span className="font-medium">Average 40% conversion boost</span>
              </div>
              <div className="flex items-center space-x-2" role="listitem">
                <Target className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <span className="font-medium">Results-driven approach</span>
              </div>
            </div>
          </header>

          {/* CTA Buttons */}
          <nav className="flex flex-col sm:flex-row gap-6 justify-center btn-group" aria-label="Call to action">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              aria-label="Start a conversation about your project"
              onClick={handleContactClick}
            >
              Let&apos;s Talk About Your Project
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer backdrop-blur-sm"
              aria-label="View portfolio and case studies"
              onClick={handleContactClick}
            >
              <BookOpen className="mr-3 h-5 w-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" aria-hidden="true" />
              See My Work
            </Button>
          </nav>
        </div>
      </div>
    </section>
  );
} 