import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section id="home" className="bg-gray-950 text-white py-40 pb-24 text-center relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-5 relative z-10">
                {/* Subheading */}
                <div className="mb-8 animate-fade-in">
                    <p className="text-primary font-medium text-sm tracking-wide uppercase">Digital wallet for everyone</p>
                </div>

                {/* Main Headline */}
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight font-poppins">
                        The future of <span className="italic text-primary">cards.</span> <br />
                        <span className="text-gray-400">Powered by MyVirtualCards.</span>
                    </h1>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-gray-400 font-light">
                    Store every barcoded card securely on your phone. Never carry plastic again.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <Link
                        to="/#coming-soon"
                        className="btn-primary"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/#portfolio"
                        className="btn-secondary"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}
