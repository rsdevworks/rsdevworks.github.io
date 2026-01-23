export default function About() {
    const highlights = [
        "100% in-house team in South Africa",
        "Apps live in 100+ countries",
        "Millions of downloads & active users",
        "New features shipped every week",
        "Bootstrapped & independent since day one"
    ];

    return (
        <section id="about" className="py-32 bg-gray-900 border-t border-gray-800">
            <div className="max-w-5xl mx-auto px-5">
                <p className="text-center text-primary font-medium text-sm tracking-wide uppercase mb-4">About Us</p>
                <h2 className="section-title text-center mb-8 leading-tight">
                    We Don't Build Apps for Clients —<br />We Build Apps for Users
                </h2>

                <div className="space-y-8 text-gray-400 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
                    <p className="text-gray-300 text-base md:text-lg">
                        CreativeDevs is a proudly South African product studio. We dream up original app ideas, design beautiful experiences, write clean code, and launch them directly to the App Store, Play Store, and the web.
                    </p>
                    <p className="text-gray-300 text-base md:text-lg">
                        Every app we make is owned, operated, and continuously improved by us — which means we're obsessed with making products that real people actually use and love every day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="card p-6 hover:-translate-y-2 transition-all flex items-start gap-3 group">
                            <span className="text-primary text-2xl flex-shrink-0 group-hover:scale-125 transition-transform">★</span>
                            <span className="text-gray-300 font-medium text-sm leading-snug">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
