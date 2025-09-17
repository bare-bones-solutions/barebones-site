import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
    return (
        <div className="container mx-auto mt-[82px] px-5  text-center">
            <Card className="flex flex-col max-w-[700px] mx-auto">
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
        </div>
    )
}