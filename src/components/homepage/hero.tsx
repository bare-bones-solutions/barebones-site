import { Button } from "@/components/ui/button"


export default function Hero() {
    return (
        <div className="max-w-3xl mt-[204px] flex flex-col justify-around h-[300px]">
            <div className="flex flex-col items-center font-bold">
                <h1 className="text-4xl">Software Solutions</h1>
                <h1 className="text-4xl">Without the Bloat</h1>
            </div>
            <div>
                <p className="text-center max-w-[600px]">We strip away the unnecessary to deliver clean, efficient, and powerful software solutions. From concept to deployment, we focus on what matters most - functionality that works.
                </p>
            </div>
            <div className="flex flex-row justify-center gap-[32px] w-full">
                <Button>Start Your Project</Button>
                <Button>View Our Work</Button>
            </div>
        </div>
    );
}