import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader
} from "@/components/ui/card"

export default function Services() {

    return (
        <div className="text-white px-5 flex flex-col">
            <div className="w-full flex flex-col items-center text-center mt-[82px] mb-[56px]">
                <h2>Our Services</h2>
                <p>Comprehensive software development services tailored to your needs</p>
            </div>
            <div className="w-full flex flex-col gap-[24px]">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h3>
                                    Custom Software Development
                                </h3>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Tailored solutions built from the ground up to meet your specific business needs.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h3>
                                    Mobile App Development
                                </h3>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Native and cross-platform mobile applications for iOS and Android.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h3>
                                    Web Development
                                </h3>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Modern, responsive web applications using cutting-edge technologies.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h3>
                                    Backend Systems
                                </h3>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Scalable server architectures and database solutions for your applications.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h3>
                                    Performance Optimizations
                                </h3>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Speed up your existing applications and improve user experience.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h3>
                                    Technical Consulting
                                </h3>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Expert guidance on technology decisions and architecture planning.
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}