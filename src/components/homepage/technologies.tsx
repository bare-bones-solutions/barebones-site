import { Badge } from "@/components/ui/badge";

const badges = [
    {
        title: "React"
    },
    {
        title: "Node.js"
    },
    {
        title: "TypeScript"
    },
    {
        title: "Python"
    },
    {
        title: "PostgresSQL"
    },
    {
        title: "Azure"
    },
    {
        title: "Docker"
    },
    {
        title: "GraphQL"
    },
]

export default function Technologies() {
    return (
        <div className="mt-[82px] flex flex-col px-5 text-center">
            <div className="mb-[24px]">
                <h2 className="text-2xl font-bold">Technologies We Love</h2>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-[16px] container">
            {
                badges.map((b) => (
                    <Badge key={b.title} variant="secondary">
                        <span className="py-2 px-3 text-[16px]">
                            {b.title}
                        </span>
                    </Badge>
                ))
            }
            </div>
        </div >
    );
}