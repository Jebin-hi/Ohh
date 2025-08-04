import { LogoIcon } from "@/components/ui/logo-icon";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const socialMediaAccounts = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/jebinsultanaa",
    icon: Facebook
  },
  {
    id: 2,
    name: "Twitter", 
    url: "https://twitter.com/",
    icon: Twitter
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://instagram.com/", 
    icon: Instagram
  },
  {
    id: 4,
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin
  }
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-500/5 rounded-full blur-3xl"
          style={{
            animation: 'spotlight-16 16s ease-in-out infinite',
          }} />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/4 to-cyan-400/4 rounded-full blur-3xl"
          style={{
            animation: 'spotlight-18 18s ease-in-out infinite reverse',
          }} />
      </div>

      <div className="container mx-auto container-spacing py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo Section - Left Side */}
          <div className="flex items-center space-x-3 flex-col">
            <LogoIcon />
            <div className="hidden sm:block">
              <p className="text-sm text-muted-foreground/80">Content Writer & Developer</p>
            </div>
          </div>
          
          {/* Copyright Section - Center */}
          <div className="text-muted-foreground/70 text-center order-3 md:order-2">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Jebin Sultana. Made with ☕ and lots of creativity.
            </p>
          </div>

          {/* Social Media Section - Right Side */}
          <div className="flex items-center space-x-3 order-2 md:order-3">
            {socialMediaAccounts.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/20 hover:border-border/40 transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-blue-500/10"
                aria-label={`Visit ${social.name} profile`}
              >
                <social.icon className="w-5 h-5 text-muted-foreground/70 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-card border border-border/50 text-card-foreground text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg backdrop-blur-sm z-50 group-hover:rotate-3">
                  {social.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 