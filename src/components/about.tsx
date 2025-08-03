import { Coffee, FileText, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="container mx-auto container-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl">A bit about me</h2>
            <div className="space-y-6">
                              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Hey there! I&apos;m Jebin (but everyone calls me Jebs). I&apos;ve been crafting words 
                  that actually matter for the past 5+ years. My superpower? Making complex ideas 
                  sound simple and boring topics sound exciting.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  I believe great content should feel like a conversation with a friend - 
                  helpful, honest, and maybe a little bit fun. Whether it&apos;s a blog post, 
                  website copy, or a social media caption, I make sure it connects with real people.
                </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-lg text-muted-foreground">I write for humans, not algorithms</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-lg text-muted-foreground">I make boring topics exciting</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-lg text-muted-foreground">I believe in the power of storytelling</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl p-10 border border-blue-500/20 shadow-xl">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-muted-foreground">Articles written</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">50+</p>
                    <p className="text-muted-foreground">Happy clients</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Coffee className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">∞</p>
                    <p className="text-muted-foreground">Cups of coffee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 