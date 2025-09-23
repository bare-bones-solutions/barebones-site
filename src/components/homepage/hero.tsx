"use client";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button"
import PixelCube from "@/components/ui/PixelCube"

import { useRef } from "react";


const MotionButton = motion(Button);

export default function Hero() {
    const ref = useRef(null);

    const config = {
        amount: 0.2,
        once: false
    }

    const isInView = useInView(ref, config);

    return (
        <div className="relative max-w-3xl mx-auto px-5 flex flex-col items-center justify-around h-[300px] mt-[124px]">
            {/* Pixel cube: half in margin, half behind hero */}
            <div className="absolute left-1/2 -top-24 -translate-x-1/2 z-0">
                {/* <PixelCube /> */}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: .2, y: 50 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center justify-around h-full w-full"
                ref={ref}
            >
                <div className="flex flex-col items-center font-bold">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl primary-header">The Bones of your</h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl accent-header">Next Breakthrough</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-center max-w-[700px] sm:text-lg">
                        From skeleton to scale, we deliver efficient, effective solutions. Crepitus is for bones; your business deserves harmony.
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-[14px] mt-[24px] sm:flex-row">
                    <MotionButton
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 2px 8px rgba(196, 184, 168, 0.2)",
                            backgroundColor: "var(--bone-warm)",
                            color: "var(--background)",
                            border: "2px solid var(--bone-warm)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        Start Your Breakthrough
                    </MotionButton>
                    <MotionButton
                        variant="secondary"
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "var(--bone-light)",
                            borderColor: "var(--bone-warm)",
                            borderWidth: "2px",
                            color: "var(--bone-warm)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="secondary-button"
                    >
                        Our Work
                    </MotionButton>
                </div>
            </motion.div>
        </div>
    );
}