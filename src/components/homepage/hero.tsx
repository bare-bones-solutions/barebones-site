import { Button } from "@/components/ui/button"


export default function Hero() {
    return (
        <div className="max-w-3xl mt-[204px] flex flex-col items-center justify-around h-[300px]">
            <div className="flex flex-col items-center font-bold">
                <h1 className="text-3xl">Software Solutions</h1>
                <h1 className="text-3xl">Without the Bloat</h1>
            </div>
            <div className="max-w-[90%] flex flex-col items-center justify-center">
                <p className="text-center max-w-[600px]">We strip away the unnecessary to deliver clean, efficient, and powerful software solutions. From concept to deployment, we focus on what matters most - functionality that works.
                </p>
            </div>
            <div className="flex flex-col justify-center gap-[14px] mt-[24px]">
                <Button>Start Your Project</Button>
                <Button>View Our Work</Button>
            </div>
        </div>
    );
}