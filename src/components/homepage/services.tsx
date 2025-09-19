"use client";
import { motion } from "framer-motion";

import {
    Card,
    CardContent,
    CardTitle,
    CardHeader
} from "@/components/ui/card"

const services = [
    { title: "Custom Software Development", description: "Tailored solutions built from the ground up to meet your specific business needs." },
    { title: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android." },
    { title: "Web Development", description: "Modern, responsive web applications using cutting-edge technologies." },
    { title: "Backend Systems", description: "Scalable server architectures and database solutions for your applications." },
    { title: "Performance Optimizations", description: "Speed up your existing applications and improve user experience." },
    { title: "Technical Consulting", description: "Expert guidance on technology decisions and architecture planning." },
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
                    services.map((s) => (
                        <div
                            key={s.title}
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
                                <Card className="h-full flex flex-col relative overflow-hidden pixelated-texture">
                                {/* Pixelated overlay handled by .pixelated-texture::before in CSS */}
                                    <CardHeader>
                                        <CardTitle>
                                            <h3>
                                                {s.title}
                                            </h3>
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
                    ))
                }
            </div>
        </div>
    )
}