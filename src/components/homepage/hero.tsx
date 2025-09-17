"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mt-[204px] px-5 flex flex-col items-center justify-around h-[300px]"
        >
            <div className="flex flex-col items-center font-bold">
                <h1 className="text-3xl sm:text-4xl md:text-5xl">Software Solutions</h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl">Without the Bloat</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-center max-w-[700px] sm:text-lg">
                    We strip away the unnecessary to deliver clean, efficient, and powerful software solutions. From concept to deployment, we focus on what matters most - functionality that works.
                </p>
            </div>
            <div className="flex flex-col justify-center gap-[14px] mt-[24px] sm:flex-row">
                <Button>Start Your Project</Button>
                <Button>View Our Work</Button>
            </div>
        </motion.div>
    );
}