"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion"
import {
    Card,
    CardContent,
    CardTitle,
    CardHeader
} from "@/components/ui/card"

import {
    Code,
    Database,
    Server,
    ChartNoAxesCombined,
    Target,
    Store
} from "lucide-react"

const MotionBadge = motion(Badge)

const services = [
    { title: "Full Stack Web Development", description: "From skeleton to scale — modern, responsive websites engineered for speed, security, and seamless user experience.", icon: Code },
    { title: "E-commerce Solutions", description: "Friction-free online storefronts — optimized for performance, built to handle scale, and designed to convert.", icon: Store },
    { title: "Web Services", description: "Scalable server architectures and database systems — the structural framework your business can rely on.", icon: Server },
    { title: "Marketing Solutions", description: "Build campaigns with backbone — from strategy to execution, we craft digital marketing that cuts through noise and drives growth.", icon: Target },
    { title: "Digital Reporting", description: "Clear insights with structure — transform raw data into reports that inform, align, and drive decisions.", icon: ChartNoAxesCombined },
    {
        title: "Technical Consulting",
        description: "Guidance with backbone — expert advice to simplify complexity, align strategy, and ensure lasting impact.",
        icon: Database
    },
];

export default function Services() {

    return (
        <div className="text-white px-5 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center text-center mt-[82px] mb-[56px]">
                <h2 className="sm:text-3xl md:text-4xl mb-[16px] font-bold ">Our Services</h2>
                <p>Comprehensive software development services tailored to your needs</p>
            </div>
            <div className="w-full flex flex-wrap gap-6 items-stretch  container mx-auto">
                {
                    services.map((s, index) => {
                        const Icon = s.icon
                        return (
                            <div
                                key={index}
                                className="
                            flex flex-col
                                basis-full                        /* 1 col on mobile */
                                sm:basis-[calc(50%-0.75rem)]      /* 2 cols */
                                lg:basis-[calc(33.333%-1rem)]     /* 3 cols */
                            "
                            >
                                <motion.div
                                    whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}

                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="h-full flex flex-col"
                                >
                                    <Card className="h-full flex flex-col relative overflow-hidden pixelated-texture  group hover:border-primary
                                    ">
                                        {/* Pixelated overlay handled by .pixelated-texture::before in CSS */}
                                        <CardHeader>
                                            <CardTitle>
                                                <div className="flex flex-col w-full">

                                                    <div className="   p-4 border w-fit h-fit rounded-xl mb-4
                                                            bg-background z-10
                                                            text-border
                                                            transition-colors
                                                            group-hover:text-primary
                                                            group-hover:border-primary">
                                                        <Icon />
                                                    </div>

                                                    <h3 className="text-earth group-hover:text-primary">
                                                        {s.title}
                                                    </h3>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="mt-auto text-[14px]">
                                            <p>
                                                {s.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}