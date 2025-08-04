"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { LogoIcon } from "./logo-icon";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
    hasSubmenu?: boolean;
    submenu?: { name: string; link: string; }[];
  }[];
  className?: string;
  onItemClick?: () => void;
  openSubmenu?: string | null;
  onSubmenuToggle?: (itemName: string) => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(30, 58, 138, 0.25), 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(30, 58, 138, 0.2), 0 0 4px rgba(30, 58, 138, 0.15), 0 16px 68px rgba(30, 58, 138, 0.2), 0 1px 0 rgba(255, 255, 255, 0.05) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
        visible && "bg-gradient-to-r from-slate-900/95 via-blue-950/95 to-slate-900/95 border border-slate-700/50",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [submenuHovered, setSubmenuHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
        setSubmenuHovered(null);
      }}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-slate-300 transition duration-200 hover:text-slate-100 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div key={`nav-item-${idx}`} className="relative">
          {item.hasSubmenu ? (
            <div
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => {
                // Only clear hover if we're not hovering over the submenu
                if (submenuHovered !== idx) {
                  setHovered(null);
                }
              }}
              className="relative"
            >
              <button
                className="relative px-4 py-2 text-slate-300 hover:text-slate-100 transition-all duration-300 ease-out flex items-center space-x-1"
              >
                {hovered === idx && (
                  <motion.div
                    layoutId="hovered"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(30, 58, 138, 0.2) 100%)"
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      duration: 0.2
                    }}
                    className="absolute inset-0 h-full w-full rounded-full border border-blue-500/20 shadow-[0_0_12px_rgba(59,_130,_246,_0.15),_inset_0_1px_0_rgba(255,_255,_255,_0.1)]"
                  />
                )}
                <motion.span 
                  className="relative z-20 font-medium"
                  animate={{
                    color: hovered === idx ? "rgb(248, 250, 252)" : "rgb(203, 213, 225)",
                    textShadow: hovered === idx ? "0 0 8px rgba(59, 130, 246, 0.3)" : "none"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
                <ChevronDown 
                  className={`h-3 w-3 transition-transform duration-300 ${
                    (hovered === idx || submenuHovered === idx) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {/* Desktop Submenu */}
              {(hovered === idx || submenuHovered === idx) && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  onMouseEnter={() => setSubmenuHovered(idx)}
                  onMouseLeave={() => setSubmenuHovered(null)}
                  className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-b from-slate-900/98 via-blue-950/98 to-slate-900/98 rounded-lg border border-slate-700/50 shadow-[0_0_24px_rgba(30,_58,_138,_0.25),_0_1px_1px_rgba(0,_0,_0,_0.1),_0_0_0_1px_rgba(30,_58,_138,_0.2),_0_0_4px_rgba(30,_58,_138,_0.15),_0_16px_68px_rgba(30,_58,_138,_0.2),_0_1px_0_rgba(255,_255,_255,_0.05)_inset] py-2 z-50"
                >
                  {/* Invisible hover bridge to connect menu to submenu */}
                  <div 
                    className="absolute -top-2 left-0 right-0 h-2 bg-transparent"
                    onMouseEnter={() => setHovered(idx)}
                  />
                  {item.submenu?.map((subItem, subIdx) => (
                    <button
                      key={`submenu-${idx}-${subIdx}`}
                      onClick={() => {
                        if (onItemClick) onItemClick();
                        // Smooth scroll to the target
                        const targetElement = document.querySelector(subItem.link);
                        if (targetElement) {
                          targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                          });
                        }
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-blue-700/10 transition-all duration-200 bg-transparent border-none cursor-pointer"
                    >
                      {subItem.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          ) : (
            <button
              onMouseEnter={() => setHovered(idx)}
              onClick={() => {
                if (onItemClick) onItemClick();
                // Smooth scroll to the target
                const targetElement = document.querySelector(item.link);
                if (targetElement) {
                  targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                  });
                }
              }}
              className="relative px-4 py-2 text-slate-300 hover:text-slate-100 transition-all duration-300 ease-out bg-transparent border-none cursor-pointer"
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(30, 58, 138, 0.2) 100%)"
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: 0.2
                  }}
                  className="absolute inset-0 h-full w-full rounded-full border border-blue-500/20 shadow-[0_0_12px_rgba(59,_130,_246,_0.15),_inset_0_1px_0_rgba(255,_255,_255,_0.1)]"
                />
              )}
              <motion.span 
                className="relative z-20 font-medium"
                animate={{
                  color: hovered === idx ? "rgb(248, 250, 252)" : "rgb(203, 213, 225)",
                  textShadow: hovered === idx ? "0 0 8px rgba(59, 130, 246, 0.3)" : "none"
                }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>
            </button>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(30, 58, 138, 0.25), 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(30, 58, 138, 0.2), 0 0 4px rgba(30, 58, 138, 0.15), 0 16px 68px rgba(30, 58, 138, 0.2), 0 1px 0 rgba(255, 255, 255, 0.05) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
        visible && "bg-gradient-to-r from-slate-900/95 via-blue-950/95 to-slate-900/95 border border-slate-700/50",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-lg bg-gradient-to-b from-slate-900/98 via-blue-950/98 to-slate-900/98 px-3 py-4 shadow-[0_0_24px_rgba(30,_58,_138,_0.25),_0_1px_1px_rgba(0,_0,_0,_0.1),_0_0_0_1px_rgba(30,_58,_138,_0.2),_0_0_4px_rgba(30,_58,_138,_0.15),_0_16px_68px_rgba(30,_58,_138,_0.2),_0_1px_0_rgba(255,_255,_255,_0.05)_inset] border border-slate-700/50",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-slate-300 hover:text-slate-100" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-slate-300 hover:text-slate-100" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center px-2 py-1 text-sm font-normal text-slate-300 hover:text-slate-100 transition-colors duration-200"
    >
      <LogoIcon />
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-[0_0_24px_rgba(30,_58,_138,_0.25),_0_1px_1px_rgba(0,_0,_0,_0.1),_0_0_0_1px_rgba(30,_58,_138,_0.2),_0_0_4px_rgba(30,_58,_138,_0.15),_0_16px_68px_rgba(30,_58,_138,_0.2),_0_1px_0_rgba(255,_255,_255,_0.05)_inset]",
    secondary: "bg-transparent text-slate-300 hover:text-slate-100 shadow-none border border-slate-600/50 hover:border-slate-500/70",
    dark: "bg-slate-800 text-slate-200 shadow-[0_0_24px_rgba(30,_58,_138,_0.25),_0_1px_1px_rgba(0,_0,_0,_0.1),_0_0_0_1px_rgba(30,_58,_138,_0.2),_0_0_4px_rgba(30,_58,_138,_0.15),_0_16px_68px_rgba(30,_58,_138,_0.2),_0_1px_0_rgba(255,_255,_255,_0.05)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
