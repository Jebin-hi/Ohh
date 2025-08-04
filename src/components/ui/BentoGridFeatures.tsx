"use client"

import { useRef, useState } from "react"
import { BentoGridFeature } from "@/types"
import { Video, Users, MessageSquare, Zap, Radio, Clock, FileText, PenTool, Mail, Target, Code } from 'lucide-react'

// Icon mapping object
const iconMap = {
    Video,
    Users,
    MessageSquare,
    Zap,
    Radio,
    Clock,
    FileText,
    PenTool,
    Mail,
    Target,
    Code
}

export default function BentoGridFeatures({ features }: { features: BentoGridFeature[] }) {
    // Track which card is hovered
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
    
    // Create refs for all cards upfront
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
        const card = cardRefs.current[idx]
        if (!card) return
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * 30 // max 30deg
        const rotateY = ((x - centerX) / centerX) * 30
        card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = (idx: number) => {
        const card = cardRefs.current[idx]
        if (!card) return
        card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)"
        setHoveredIdx(null)
    }

    const handleMouseEnter = (idx: number) => {
        setHoveredIdx(idx)
    }

    const scatterStyles = [
        "-rotate-2 -translate-y-1 -translate-x-0.5 md:-rotate-6 md:-translate-y-6 md:-translate-x-2",
        "rotate-2 translate-x-2 translate-y-1 md:rotate-6 md:translate-x-8 md:translate-y-2",
        "rotate-1 translate-y-2 translate-x-1 md:rotate-3 md:translate-y-8 md:translate-x-4",
        "-rotate-2 translate-x-3 -translate-y-1 md:-rotate-8 md:translate-x-12 md:-translate-y-4",
        "rotate-2 -translate-y-2 translate-x-2 md:rotate-9 md:-translate-y-8 md:translate-x-10",
        "-rotate-1 translate-x-1.5 translate-y-1 md:-rotate-4 md:translate-x-6 md:translate-y-6",
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature: BentoGridFeature, idx: number) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap]
                // Blur and dim all cards except the hovered one
                const blur = hoveredIdx !== null && hoveredIdx !== idx
                return (
                    <div
                        key={feature.title}
                        ref={(el) => { cardRefs.current[idx] = el }}
                        className={`relative rounded-3xl shadow-xl border border-gray-700/40 p-8 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 ${feature.className} ${scatterStyles[idx % scatterStyles.length]} ${blur ? "blur-sm brightness-75 scale-95" : ""}`}
                        onMouseMove={(e) => handleMouseMove(e, idx)}
                        onMouseLeave={() => handleMouseLeave(idx)}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        style={{ willChange: "transform" }}
                    >
                        <span className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30">
                            <Icon className="w-8 h-8 text-purple-300" />
                        </span>
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                            {feature.title}
                        </h3>
                        <p className="text-gray-300 text-base font-medium leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
} 