import { Button } from "../ui/button";

export default function Contact() {
    return (
        <div className="px-5 mt-[82px] text-center">
            <div className="flex flex-col gap-[32px]">
                <h2 className="">Read to Get Started?</h2>
                <p>Let's discuss your project and build something amazing together.</p>
                <div>
                    <Button>Get in Touch</Button>
                </div>
            </div>
        </div>
    )
}