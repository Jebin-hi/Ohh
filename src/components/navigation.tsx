"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Navigation() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Guides",
      link: "#guides",
      hasSubmenu: true,
      submenu: [
        { name: "Content Strategy", link: "#content-strategy" },
        { name: "Writing Tips", link: "#writing-tips" },
        { name: "SEO Best Practices", link: "#seo-guides" },
        { name: "Brand Voice", link: "#brand-voice" },
      ],
    },
    {
      name: "Articles",
      link: "#articles",
      hasSubmenu: true,
      submenu: [
        { name: "Latest Posts", link: "#latest-posts" },
        { name: "Case Studies", link: "#case-studies" },
        { name: "Industry Insights", link: "#insights" },
        { name: "Tutorials", link: "#tutorials" },
      ],
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 dark:bg-neutral-950/95 dark:border-neutral-800/50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <NavbarButton variant="primary">Say Hi</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex flex-col space-y-1 w-full">
              {navItems.map((item, idx) => (
                <div key={`mobile-link-${idx}`} className="w-full">
                  {item.hasSubmenu ? (
                    <div className="w-full">
                      <button
                        onClick={() => handleSubmenuToggle(item.name)}
                        className="w-full text-left text-slate-300 hover:text-slate-100 font-medium transition-all duration-300 ease-out group"
                      >
                        <span className="flex items-center justify-between w-full py-2.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-blue-700/10 hover:border hover:border-blue-500/20 transition-all duration-300 ease-out">
                          {item.name}
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform duration-300 ${
                              openSubmenu === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </span>
                      </button>
                      {openSubmenu === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.submenu?.map((subItem, subIdx) => (
                            <a
                              key={`mobile-sub-${idx}-${subIdx}`}
                              href={subItem.link}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-slate-400 hover:text-slate-200 text-sm py-2 px-3 rounded-md hover:bg-gradient-to-r hover:from-blue-600/5 hover:to-blue-700/5 hover:border hover:border-blue-500/10 transition-all duration-300 ease-out"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative text-slate-300 hover:text-slate-100 font-medium transition-all duration-300 ease-out group"
                    >
                      <span className="block py-2.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-blue-700/10 hover:border hover:border-blue-500/20 transition-all duration-300 ease-out">
                        {item.name}
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-2 pt-3 border-t border-slate-700/50 mt-2">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Say Hi
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}


