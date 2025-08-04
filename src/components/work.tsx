import { Badge } from "@/components/ui/badge";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

const workProjects = [
  {
    title: "Best Physical Asset Management Software in Bangladesh",
    name: "Financfy",
    category: "Business",
    description: " Wrote trend-focused content that helped boost seasonal design sales.",
    image: "https://i.ibb.co/GQmbp8kn/image.png",
    href: "https://financfy.com/blog/physical-asset-management-software-in-bangladesh/"
  },
  {
    title: "Halloween T-Shirt Ideas",
    name: "Graphic Design Eye",
    category: "Design",
    description: "Wrote trend-focused content that helped boost seasonal design sales.",
    image: "https://i.ibb.co/9mpXKcNZ/image.png",
    href: "https://graphicdesigneye.com/halloween-t-shirt-ideas/"
  },
  {
    title: "Best Photo Editing Companies",
    name: "Graphic Design Eye",
    category: "Design",
    description: "Compared top services, turned a confusing market into an easy decision.",
    image: "https://i.ibb.co/4RywKvyL/image.png",
    href: "https://graphicdesigneye.com/best-photo-editing-companies/"
  },
  {
    title: "Book Cover Design Trends",
    name: "Graphic Design Eye",
    category: "Design",
    description: "Mapped design trends to help clients stay ahead of publishing curves.",
    image: "https://i.ibb.co/fVBWrbBr/image.png",
    href: "https://graphicdesigneye.com/top-10-book-cover-design-trends/"
  },
  {
    title: "Brochure Design Ideas",
    name: "Graphic Design Eye",
    category: "Design",
    description: "Curated brochure ideas with visual punch, designed to inspire action.",
    image: "https://i.postimg.cc/hGPLP5S2/148-fccf02fa81432b9d.png",
    href: "https://graphicdesigneye.com/brochure-design-ideas/"
  },
  {
    title: "Best Guru Alternatives",
    name: "Graphic Design Eye",
    category: "Freelancing",
    description: "Guided freelancers toward better platforms with honest, practical insight.",
    image: "https://i.postimg.cc/QxQ1g3C6/image.png",
    href: "https://graphicdesigneye.com/best-guru-alternatives/"
  },
  {
    title: "Best Fiverr Alternatives",
    name: "Graphic Design Eye",
    category: "Freelancing",
    description: "Helped readers explore better freelance gigs beyond the Fiverr bubble..",
    image: "https://i.postimg.cc/BnFyBtDr/image.png",
    href: "https://graphicdesigneye.com/best-fiverr-alternatives/"
  },
  {
    title: "App Development Services",
    name: "vivasoft",
    category: "Software",
    description: "Framed dev services in a way non-tech clients could finally trust.",
    image: "https://i.postimg.cc/tJLkstrY/image.png",
    href: "https://vivasoftltd.com/app-development/"
  },
  {
    title: "Mobile App Companies in Bangladesh",
    name: "vivasoft",
    category: "Software",
    description: "Wrote it like a local guide, helped global clients find real partners.",
    image: "https://i.postimg.cc/pXz4DpKg/image.png",
    href: "https://vivasoftltd.com/mobile-app-development-companies-in-bangladesh/"
  },
];

export function Work() {
  return (
    <section id="work" className="relative min-h-screen flex items-center justify-center container mx-auto container-spacing section-padding overflow-hidden" aria-labelledby="work-heading">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
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
        <header className="text-center mb-12">
          <h2 id="work-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Stuff I&apos;ve worked on
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Here are some projects I&apos;m pretty proud of. Each one taught me something new
            and helped me grow as a writer.
          </p>
        </header>

        {/* Work Projects Grid - Proper Flex Layout */}
        <div className="flex flex-wrap justify-center gap-6 " role="list" aria-label="Portfolio projects">
          {workProjects.map((project, index) => (
            <article key={index} className="w-full sm:w-[320px] md:w-[360px] lg:w-[380px] h-[420px]" role="listitem">
              <PinContainer
                title={project.name}
                href={project.href}
                className="w-full h-full"
              >
                <div className="flex flex-col tracking-tight text-slate-100/50 w-full h-full bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden">
                  {/* Project Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category} project`}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    {/* Project Header */}
                    <header className="mb-4">
                      <h3 className="text-xl font-bold text-white !m-0 mb-2">{project.title}</h3>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1">
                        {project.category}
                      </Badge>
                    </header>

                    {/* Project Description */}
                    <p className="text-slate-300 text-sm leading-relaxed !m-0 flex-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </PinContainer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 