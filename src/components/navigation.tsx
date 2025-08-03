import { Button } from "@/components/ui/button";
import { Mail, Menu } from "lucide-react";

export function Navigation() {
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto container-spacing py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">JS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Jebs
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Content Writer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-blue-400 transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#work" className="text-muted-foreground hover:text-blue-400 transition-all duration-300 font-medium relative group">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#guides" className="text-muted-foreground hover:text-blue-400 transition-all duration-300 font-medium relative group">
              Guides
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#articles" className="text-muted-foreground hover:text-blue-400 transition-all duration-300 font-medium relative group">
              Articles
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-blue-400 transition-all duration-300 font-medium relative group">
              Say Hi
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-blue-500/10 transition-colors duration-300">
            <Menu className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mt-4 pb-4 border-t border-border/40 pt-4">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-muted-foreground hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-500/10">
              About
            </a>
            <a href="#work" className="text-muted-foreground hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-500/10">
              Work
            </a>
            <a href="#guides" className="text-muted-foreground hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-500/10">
              Guides
            </a>
            <a href="#articles" className="text-muted-foreground hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-500/10">
              Articles
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-blue-500/10">
              Say Hi
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 