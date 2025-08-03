import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, FileText, Heart, Sparkles } from "lucide-react";

const articles = [
  {
    title: "Why Your Content Sucks (And How to Fix It)",
    category: "Writing Tips",
    description: "The brutal truth about why most content fails and what you can do about it.",
    readTime: "6 min read",
    date: "2 days ago",
    icon: FileText
  },
  {
    title: "My Morning Routine (And Why It Matters)",
    category: "Life & Writing",
    description: "How I start my day to maximize creativity and productivity as a writer.",
    readTime: "4 min read",
    date: "1 week ago",
    icon: Coffee
  },
  {
    title: "The Future of Content Writing",
    category: "Industry",
    description: "My predictions for where content writing is headed and how to stay ahead.",
    readTime: "8 min read",
    date: "2 weeks ago",
    icon: Sparkles
  },
  {
    title: "Why I Love Being a Writer",
    category: "Personal",
    description: "The real reasons I chose this career and why I still love it every day.",
    readTime: "5 min read",
    date: "3 weeks ago",
    icon: Heart
  }
];

export function Articles() {
  return (
    <section id="articles" className="container mx-auto container-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-12 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl">Latest Articles</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My thoughts on writing, creativity, and the content world. 
            Sometimes serious, sometimes not so much.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {articles.map((article, index) => (
            <Card key={index} className="border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group">
              <div className="h-56 bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
                <article.icon className="h-20 w-20 text-blue-400/60" />
              </div>
              <CardHeader className="card-content">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 px-4 py-2 text-sm">{article.category}</Badge>
                  <span className="text-muted-foreground">{article.date}</span>
                </div>
                <CardTitle className="text-2xl">{article.title}</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="card-content pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{article.readTime}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-blue-400 text-lg">
                    Read Article
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