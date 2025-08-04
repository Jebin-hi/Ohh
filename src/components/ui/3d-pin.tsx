"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "rotateX(0deg) rotateY(0deg) scale(1)"
  );

  const onMouseEnter = () => {
    setTransform("rotateX(45deg) rotateY(0deg) scale(0.95)");
  };
  const onMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
  };

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={cn(
        "relative group/pin cursor-pointer w-full h-full",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      <div
        style={{
          perspective: "1200px",
        }}
        className="w-full h-full"
      >
        <motion.div
          style={{
            transform: transform,
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full p-4 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black/20 border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden backdrop-blur-sm"
        >
          <div className={cn("w-full h-full", className)}>{children}</div>
        </motion.div>
      </div>
      
      {/* Hover Effects - Following Card's 3D Transform */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/pin:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="relative flex items-center rounded-full bg-zinc-950/80 py-1 px-3 ring-1 ring-white/10 backdrop-blur-sm">
            <span className="text-white text-xs font-bold">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0"></span>
          </div>
        </div>
        
        {/* Animated Rings - Following Card's 3D Transform */}
        <div 
          style={{
            transform: "rotateX(45deg) scale(0.95)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 transition-opacity duration-500"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0,
            }}
            className="absolute h-32 w-32 rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 2,
            }}
            className="absolute h-32 w-32 rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 4,
            }}
            className="absolute h-32 w-32 rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
        </div>

        {/* Pin Lines - Following Card's 3D Transform */}
        <div 
          style={{
            transform: "rotateX(45deg) scale(0.95)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-500"
        >
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </div>
      </div>
    </div>
  );
};

// Keep the old component for backward compatibility
export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
