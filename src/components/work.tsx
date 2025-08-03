import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, PenTool, TrendingUp, Users } from "lucide-react";

const workProjects = [
  {
    title: "Tech Startup Blog",
    category: "Tech",
    description: "Wrote a 10-part series that actually made AI sound interesting (and understandable).",
    result: "Result: 150% more traffic and 25 new leads in 3 months. Not bad, right?",
    icon: FileText,
    tags: ["Blog Writing", "Tech", "SEO"]
  },
  {
    title: "Skincare Brand Copy",
    category: "E-commerce",
    description: "Made product descriptions that actually made people want to buy stuff.",
    result: "Result: 40% more sales and 25% bigger orders. The power of good copy!",
    icon: TrendingUp,
    tags: ["Copywriting", "E-commerce", "Conversion"]
  },
  {
    title: "Healthcare Content",
    category: "Healthcare",
    description: "Wrote content that actually helped people understand their health better.",
    result: "Result: 60% more patient engagement and became the go-to resource in the industry.",
    icon: Users,
    tags: ["Healthcare", "Educational", "Patient Care"]
  },
  {
    title: "Finance Firm Content",
    category: "Finance",
    description: "Made complex financial stuff sound approachable and trustworthy.",
    result: "Result: 15 high-value leads and 35% more trust in the brand. Money talks!",
    icon: PenTool,
    tags: ["Finance", "Trust Building", "B2B"]
  }
];

export function Work() {
  return (
    <section id="work" className="container mx-auto container-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-12 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl">Stuff I've worked on</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some projects I'm pretty proud of. Each one taught me something new 
            and helped me grow as a writer.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {workProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group">
              <div className="h-56 bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
                <project.icon className="h-20 w-20 text-blue-400/60" />
              </div>
              <CardHeader className="card-content">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 px-4 py-2 text-sm">{project.category}</Badge>
                </div>
                <CardDescription className="text-lg leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="card-content pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.result}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-blue-500/30 text-blue-400 px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 