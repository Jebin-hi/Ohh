import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { PointerHighlight } from "./ui/pointer-highlight";

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center container mx-auto container-spacing section-padding overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Section Header */}
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  A bit about me
                </span>
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <div className="text-lg md:text-xl text-slate-300 leading-relaxed tracking-wide">
                Hey there! I&apos;m Jebin (but everyone calls me Jebs). I&apos;ve been crafting words
                that actually matter <PointerHighlight rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
            pointerClassName="text-blue-500 h-3 w-3"
            containerClassName="inline-block mx-1"> <span className="z-10 relative px-1"> for the past  5+ years. </span></PointerHighlight>
              </div>
              <div className="text-lg md:text-xl text-slate-300 leading-relaxed tracking-wide">My superpower? Making complex ideas sound simple and boring topics sound exciting.</div>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed tracking-wide"> 
                I believe great content should feel like a conversation with a friend -
                helpful, honest, and maybe a little bit fun. Whether it&apos;s a blog post,
                website copy, or a social media caption, I make sure it connects with real people.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-lg text-slate-300 font-medium tracking-wide">I write for humans, not algorithms</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-lg text-slate-300 font-medium tracking-wide">I make boring topics exciting</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-lg text-slate-300 font-medium tracking-wide">I believe in the power of storytelling</span>
              </div>
            </div>
          </div>

          {/* Right Column - Clean 3D Stats Card */}
          <div className="relative">
            <CardContainer className="py-0">
              <CardBody className="w-full h-auto">
                <CardItem className="w-full">
                  {/* Clean Stats Container */}
                  <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 w-full">

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">

                      {/* Top Row */}
                      <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-slate-800/30 rounded-xl p-4">
                        <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 group-hover:scale-125 transition-all duration-300">
                          500+
                        </div>
                        <div className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors duration-300">
                          Articles written
                        </div>
                      </div>

                      <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-slate-800/30 rounded-xl p-4">
                        <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 group-hover:scale-125 transition-all duration-300">
                          50+
                        </div>
                        <div className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors duration-300">
                          Happy clients
                        </div>
                      </div>

                      {/* Bottom Row */}
                      <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-slate-800/30 rounded-xl p-4">
                        <div className="text-4xl font-bold text-white mb-2 group-hover:text-green-400 group-hover:scale-125 transition-all duration-300">
                          40%
                        </div>
                        <div className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors duration-300">
                          Conversion boost
                        </div>
                      </div>

                      <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-slate-800/30 rounded-xl p-4">
                        <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-400 group-hover:scale-125 transition-all duration-300">
                          100%
                        </div>
                        <div className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors duration-300">
                          Satisfaction
                        </div>
                      </div>
                    </div>

                    {/* Simple Divider */}
                    <div className="w-full h-px bg-slate-700 my-6"></div>

                    {/* Clean Quote */}
                    <div className="text-center">
                      <p className="text-slate-300 text-sm italic">
                        &ldquo;I don&apos;t just write content. I create experiences that connect, convert, and inspire.&rdquo;
                      </p>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
} 