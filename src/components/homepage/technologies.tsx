import { Badge } from "@/components/ui/badge";

export default function Technologies() {
    return (
        <div className="mt-[82px] flex flex-col px-5 text-center">
            <div className="mb-[24px]">
                <h2 className="text-2xl font-bold">Technologies We Love</h2>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-[16px]">
                <Badge variant="secondary">
                    <span className="py-2 px-3 text-[16px]">
                        React
                    </span>
                </Badge>
                <Badge variant="secondary">
                    <span className="py-2 px-3 text-[16px]">
                        Node.js
                    </span>
                </Badge>
                <Badge variant="secondary">
                    <span className="py-2 px-3 text-[16px]">
                        TypeScript
                    </span>
                </Badge>
                <Badge variant="secondary" >
                    <span className="py-2 px-3 text-[16px]">
                        Python
                    </span>
                </Badge>
                <Badge variant="secondary" >
                    <span className="py-2 px-3 text-[16px]">
                        PostgresSQL
                    </span>
                </Badge>
                <Badge variant="secondary" >
                    <span className="py-2 px-3 text-[16px]">
                        Azure
                    </span>
                </Badge>
                <Badge variant="secondary" >
                    <span className="py-2 px-3 text-[16px]">
                        Docker
                    </span>
                </Badge>
                <Badge variant="secondary" >
                    <span className="py-2 px-3 text-[16px]">
                        GraphQL
                    </span>
                </Badge>
            </div>
        </div >
    );
}