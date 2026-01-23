import mobileIllustration from "../assets/mobile-application.png";
import webIllustration from "../assets/web-development.png";
import designIllustration from "../assets/design.png";
import scaleIllustration from "../assets/scale.png";

export default function Services() {
    const services = [
        {
            title: "Mobile App Development",
            description: "iOS & Android apps built with Flutter, React Native or native Swift/Kotlin.",
            image: mobileIllustration
        },
        {
            title: "Web Applications",
            description: "Fast, responsive web apps using React, Vue, or Next.js.",
            image: webIllustration
        },
        {
            title: "UI/UX Design",
            description: "Beautiful, user-centered designs that your customers will love.",
            image: designIllustration
        },
        {
            title: "App Maintenance & Scale",
            description: "Ongoing support, updates, and scaling as your user base grows.",
            image: scaleIllustration
        }
    ];

    return (
        <section id="services" className="py-32 bg-gray-950 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-5">
                <p className="text-center text-primary font-medium text-sm tracking-wide uppercase mb-4">What We Do</p>
                <h2 className="section-title text-center mb-6">
                    We Create & Launch Our Own Apps
                </h2>
                <p className="section-subtitle text-center mb-16">
                    Cutting-edge solutions built with the latest technologies
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card p-8 text-center group hover:-translate-y-2 cursor-pointer border-b-4 border-transparent hover:border-primary relative overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col items-center h-full">
                                <div className="mb-6 h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-auto object-contain rounded-xl"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
