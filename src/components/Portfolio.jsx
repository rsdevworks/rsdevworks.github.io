import myVirtualCards from "../assets/myvirtualcards.png";

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-32 bg-gray-950 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-5">
                <p className="text-center text-primary font-medium text-sm tracking-wide uppercase mb-4">Featured</p>
                <h2 className="section-title text-center mb-6">
                    Our Apps
                </h2>
                <p className="section-subtitle text-center mb-16">
                    Products we've built, launched, and continue to grow — used by millions across Africa and beyond.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Featured App Card */}
                    <div className="card overflow-hidden border-2 border-primary relative group hover:-translate-y-4 shadow-2xl lg:col-span-2">
                        <div className="relative overflow-hidden h-96 bg-gradient-to-br from-gray-800 to-gray-900">
                            <img
                                src={myVirtualCards}
                                alt="MyVirtualCard"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            <div className="absolute top-6 right-6 bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2">
                                <span>🚀</span> COMING SOON
                            </div>
                        </div>
                        <div className="p-10">
                            <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors font-poppins">
                                MyVirtualCards
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed text-base">
                                One secure app that stores every barcoded card you own. Say goodbye to bulging wallets forever.
                            </p>
                            <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-5 py-2.5 rounded-lg border border-primary/30">
                                Productivity • Launching 2026
                            </span>
                        </div>
                    </div>

                    {/* Placeholder for additional apps */}
                    <div className="card overflow-hidden relative group hover:-translate-y-4 shadow-2xl bg-gray-800 flex flex-col items-center justify-center p-8 text-center">
                        <div className="text-6xl mb-4 opacity-50">📱</div>
                        <h3 className="text-lg font-bold text-gray-300 mb-2">More Apps Coming</h3>
                        <p className="text-sm text-gray-500">Check back soon for more innovative solutions</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
