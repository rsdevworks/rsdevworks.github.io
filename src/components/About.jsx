export default function About() {
    const highlights = [
        {
            icon: "people-outline",
            title: "Local In-House Team",
            description: "100% South African team handling strategy, design, and engineering end-to-end.",
        },
        {
            icon: "layers-outline",
            title: "Full-Stack Delivery",
            description: "Web, mobile, and cloud software products built as one connected system.",
        },
        {
            icon: "git-network-outline",
            title: "Integrations & Automation",
            description: "API integrations and workflow automation that remove manual bottlenecks.",
        },
        {
            icon: "pulse-outline",
            title: "Continuous Improvement",
            description: "Ongoing support, performance tuning, and iterative feature delivery.",
        },
        {
            icon: "shield-checkmark-outline",
            title: "Independent Since Day One",
            description: "Bootstrapped and focused on durable software that creates long-term value.",
        },
    ];

    return (
        <section id="about" className="py-32 bg-gray-900 border-t border-gray-800">
            <div className="max-w-5xl mx-auto px-5">
                <p className="text-center text-primary font-medium text-sm tracking-wide uppercase mb-4">About Us</p>
                <h2 className="section-title text-center mb-8 leading-tight">
                    We Build Software That Solves<br />Real Business Problems
                </h2>

                <div className="space-y-8 text-gray-400 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
                    <p className="text-gray-300 text-base md:text-lg">
                        RSDevworks is a proudly South African software studio. We design and build end-to-end digital products, from mobile and web apps to internal tools, APIs, and cloud-backed platforms.
                    </p>
                    <p className="text-gray-300 text-base md:text-lg">
                        We focus on practical engineering that improves operations, customer experience, and growth. Every product we ship is maintained, measured, and continuously improved for long-term value.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="card p-7 hover:-translate-y-2 transition-all duration-300 group border border-gray-700/70 hover:border-primary/40"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                                <ion-icon
                                    name={item.icon}
                                    style={{ fontSize: '30px', color: 'var(--color-primary)' }}
                                ></ion-icon>
                            </div>
                            <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
