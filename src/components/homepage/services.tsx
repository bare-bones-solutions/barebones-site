import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader
} from "@/components/ui/card"

const services = [
    { title: "Custom Software Development", description: "Tailored solutions built from the ground up to meet your specific business needs." },
    { title: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android." },
    { title: "Web Development", description: "Modern, responsive web applications using cutting-edge technologies." },
    { title: "Backend Systems", description: "Scalable server architectures and database solutions for your applications." },
    { title: "Performance Optimizations", description: "Speed up your existing applications and improve user experience." },
    { title: "Technical Consulting", description: "Expert guidance on technology decisions and architecture planning." },
];

export default function Services() {

    return (
        <div className="text-white px-5 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center text-center mt-[82px] mb-[56px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-[16px] font-bold">Our Services</h2>
                <p>Comprehensive software development services tailored to your needs</p>
            </div>
            <div className="w-full flex flex-wrap gap-6 items-stretch  container mx-auto">
                {

                    //mapping across all entries and producing elements
                    services.map((s) => (
                        <div
                            key={s.title}
                            className="
                                flex flex-col
                                basis-full                        /* 1 col on mobile */
                                sm:basis-[calc(50%-0.75rem)]      /* 2 cols */
                                lg:basis-[calc(33.333%-1rem)]     /* 3 cols */
                            "
                        >
                            <Card className="h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle>
                                        <h3>
                                            {s.title}
                                        </h3>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <p>
                                        {s.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))
                }
                {/* <div>
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
                </div> */}

            </div>
        </div>
    )
}