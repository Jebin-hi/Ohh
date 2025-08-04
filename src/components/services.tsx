import BentoGridFeatures from "@/components/ui/BentoGridFeatures";
import { BentoGridFeature } from "@/types";

export function Services() {
  const services: BentoGridFeature[] = [
    {
      title: "Blog Writing",
      description: "Engaging, SEO-optimized blog posts that drive traffic and convert readers into customers.",
      icon: "FileText",
      className: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Copy Writing",
      description: "Compelling copy that sells. From landing pages to ads, I craft words that convert.",
      icon: "PenTool", 
      className: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Social Media Content",
      description: "Viral-worthy posts that build your brand and engage your audience across all platforms.",
      icon: "MessageSquare",
      className: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Email Marketing",
      description: "Email sequences that nurture leads and drive sales with compelling storytelling.",
      icon: "Mail",
      className: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Content Strategy",
      description: "Strategic content planning that aligns with your business goals and audience needs.",
      icon: "Target",
      className: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Technical Writing",
      description: "Clear, concise technical documentation that makes complex topics accessible to all.",
      icon: "Code",
      className: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20"
    }
  ];

  return (
    <section id="services" className="relative min-h-screen flex items-center justify-center container mx-auto container-spacing section-padding overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Glow Orbs - Perfectly Positioned */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/6 to-blue-600/6 rounded-full blur-3xl" 
             style={{
               animation: 'float-12 12s ease-in-out infinite',
             }} />
        <div className="absolute bottom-32 right-24 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" 
             style={{
               animation: 'spotlight-16 16s ease-in-out infinite reverse',
             }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/4 to-cyan-400/4 rounded-full blur-3xl" 
             style={{
               animation: 'spotlight-20 20s ease-in-out infinite',
             }} />
        
        {/* Additional Spotlight Effects - Strategic Positioning */}
        <div className="absolute top-1/3 right-1/4 w-88 h-88 bg-gradient-to-r from-blue-400/7 to-purple-500/7 rounded-full blur-3xl" 
             style={{
               animation: 'spotlight-15 15s ease-in-out infinite',
             }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-blue-500/5 rounded-full blur-3xl" 
             style={{
               animation: 'spotlight-18 18s ease-in-out infinite reverse',
             }} />
        <div className="absolute top-2/3 right-1/3 w-56 h-56 bg-gradient-to-r from-blue-500/6 to-cyan-400/6 rounded-full blur-3xl" 
             style={{
               animation: 'spotlight-20 20s ease-in-out infinite',
             }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Services I Offer
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From blog posts to technical docs, I craft content that connects, converts, and inspires.
          </p>
        </div>

        {/* Services Grid */}
        <BentoGridFeatures features={services} />
      </div>
    </section>
  );
} 