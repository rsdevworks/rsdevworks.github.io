export default function ComingSoon() {
    return (
        <section id="coming-soon" className="py-32 bg-gray-900 relative overflow-hidden border-t border-gray-800">
            <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
                <p className="text-green-500 font-medium text-sm tracking-wide uppercase mb-4 flex items-center justify-center gap-2">
                    <span className="animate-pulse">✨</span> Now Available
                </p>
                <h2 className="section-title mb-6">
                    MyVirtualCards – Download Now!
                </h2>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 md:p-10 mb-10 border border-gray-700">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                        The ultimate digital wallet for every barcoded card in your life
                    </p>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        🛒 Supermarket loyalty • 💪 Gym & student cards • 🚪 Access cards • 🏥 Medical aid • 📚 Library cards • ⛽ Fuel rewards • ☕ Coffee punch cards
                    </p>
                </div>

                <div className="flex justify-center">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.myvirtualcards"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold px-10 py-5 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg hover:scale-105 transform"
                    >
                        Download on Google Play
                    </a>
                </div>

                <p className="mt-8 text-gray-400 text-sm font-medium">
                    ✓ 100% free to download. Ditch the plastic wallet today!
                </p>
            </div>
        </section>
    );
}
