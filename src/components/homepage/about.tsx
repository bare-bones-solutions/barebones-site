"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimationControls, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

const MotionDiv = motion.div;
const MotionP = motion.p;

export default function About() {
    const ref = useRef<HTMLDivElement | null>(null);

    const viewport = useMemo(() => ({ amount: 0.2, once: false }), []);
    const isInView = useInView(ref, viewport);

    const controls = useAnimationControls();
    const prefersReducedMotion = useReducedMotion();

    const containerVariants: Variants = useMemo(
        () => (
            {
                hidden: { opacity: 0, y: 50, filter: "blur(2px)" },
                enter: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1] as const,
                        staggerChildren: .3,
                        delayChildren: 0.07,
                    },
                },
                alive: prefersReducedMotion
                    ? {}
                    : {
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        },
                    },
            }
        ),
        [prefersReducedMotion]
    );

    const childVariants: Variants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 8 },
            enter: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.35, ease: "easeOut" },
            },
        }),
        []
    );

    // hidden → enter (await) → alive; reset to hidden when out of view
    useEffect(() => {
        (async () => {
            if (isInView) {
                await controls.start("enter");
                controls.start("alive");
            } else {
                controls.start("hidden");
            }
        })();
    }, [isInView, controls]);

    return (
        <MotionDiv
            ref={ref}
            className="container mx-auto mt-[82px] px-5 text-center flex items-center justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <Card className="flex flex-col max-w-3xl mx-auto relative overflow-hidden">
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-center">About Bare Bone Solutions</h2>
                    </CardTitle>
                </CardHeader>

                <CardContent className="mt-5">
                    <div className="flex flex-col gap-10 px-3">
                        <MotionP variants={childVariants}>
                            We believe in the power of simplicity. In a world of over-engineered
                            solutions and bloated software, we strip back to the essentials. Our
                            team of experienced developers focuses on creating clean, efficient,
                            and maintainable code that solves real problems.
                        </MotionP>

                        <MotionP variants={childVariants}>
                            Every project starts with understanding your core needs, then building
                            exactly what you need—nothing more, nothing less. The result? Software
                            that works, scales, and stands the test of time.
                        </MotionP>
                    </div>
                </CardContent>
            </Card>
        </MotionDiv>
    );
}
