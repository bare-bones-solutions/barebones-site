"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
    const ref = useRef(null);



    const config = {
        amount: 0.2,
        once: false
    }

    const isInView = useInView(ref, config);

    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }}
            className="container mx-auto mt-[82px] px-5  text-center flex items-center justify-center"
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 50 }}
            transition={{ duration: 0.6 }}>

            <Card className="flex flex-col max-w-3xl mx-auto relative overflow-hidden pixelated-texture">
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-center">
                            About Bare Bone Solutions
                        </h2>
                    </CardTitle>
                </CardHeader>
                <CardContent style={{ marginTop: "20px" }}>
                    <div className="flex flex-col gap-[40px] px-3">
                        <p>
                            We belive in the power of simplicity. In a world of over-engineered solutions and bloated sofware, we strip back to the essentials. Our teamof experienced developers focuses on creating clean, efficient, and maintainable code that solves real problems.
                        </p>
                        <p>
                            Every project starts with understanding your core needs, then building exactly what you need - nothing more, nothing less. The result? Software that works, scales, and stands the test of time.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}