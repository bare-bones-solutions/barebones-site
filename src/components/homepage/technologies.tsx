"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const MotionBadge = motion(Badge);

const badges = [
    { title: "React" },
    { title: "Node.js" },
    { title: "TypeScript" },
    { title: "Python" },
    { title: "PostgresSQL" },
    { title: "Azure" },
    { title: "Docker" },
    { title: "GraphQL" },
];

export default function Technologies() {
    const headingRef = useRef(null);
    const inView = useInView(headingRef, { once: true, margin: "-100px" });

    return (
        <div className="mt-[82px] flex flex-col px-5 text-center">
            <motion.div
                ref={headingRef}
                initial={{ opacity: 0, x: -60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-[24px]"
            >
                <h2>Technologies We Love</h2>
            </motion.div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-[16px] container">
                {badges.map((b) => (
                    <MotionBadge
                        key={b.title}
                        variant="secondary"
                        whileHover={{ scale: 1.08, boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <span className="py-2 px-3 text-[16px]">
                            {b.title}
                        </span>
                    </MotionBadge>
                ))}
            </div>
        </div>
    );
}