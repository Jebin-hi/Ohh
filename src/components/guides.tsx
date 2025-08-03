import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, PenTool, Search } from "lucide-react";

const guides = [
  {
    title: "Content Writing 101",
    description: "Everything I wish I knew when I started writing content professionally.",
    readTime: "5 min read",
    icon: BookOpen
  },
  {
    title: "SEO for Humans",
    description: "How to write content that ranks well without sounding like a robot.",
    readTime: "8 min read",
    icon: Search
  },
  {
    title: "Copywriting Secrets",
    description: "The psychology behind persuasive writing and how to use it ethically.",
    readTime: "12 min read",
    icon: PenTool
  }
];

export function Guides() {
  return (
    <section id="guides" className="container mx-auto container-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-12 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl">My Guides</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I love sharing what I've learned. Here are some guides I've written to help 
            other writers and businesses create better content.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {guides.map((guide, index) => (
            <Card key={index} className="border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group">
              <CardHeader className="card-content">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <guide.icon className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl">{guide.title}</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  {guide.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="card-content pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{guide.readTime}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-blue-400 text-lg">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 