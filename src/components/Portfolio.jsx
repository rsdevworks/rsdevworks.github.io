import { useState, useEffect } from "react";
import myVirtualCards from "../assets/myvirtualcards.png";

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                    <div className="card text-left overflow-hidden border-2 border-primary relative group hover:-translate-y-4 shadow-2xl lg:col-span-2">
                        <div className="relative overflow-hidden h-96 bg-gradient-to-br from-gray-800 to-gray-900">
                            <img
                                src={myVirtualCards}
                                alt="MyVirtualCard"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            <div className="absolute top-6 right-6 bg-green-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2 animate-pulse">
                                <span>✨</span> LIVE NOW
                            </div>
                        </div>
                        <div className="p-10">
                            <h3
                                onClick={openModal}
                                className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors font-poppins cursor-pointer hover:underline"
                            >
                                MyVirtualCards
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed text-base">
                                One secure app that stores every barcoded card you own. Say goodbye to bulging wallets forever.
                            </p>
                            <div className="flex flex-wrap gap-4 items-center">
                                <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-5 py-2.5 rounded-lg border border-primary/30">
                                    Productivity • Available Now
                                </span>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.myvirtualcards"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Get on Google Play
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for additional apps */}
                    <div className="card overflow-hidden relative group hover:-translate-y-4 shadow-2xl bg-gray-800 flex flex-col items-center justify-center p-8 text-center">
                        <div className="text-6xl mb-4 opacity-50">📱</div>
                        <h3 className="text-lg font-bold text-gray-300 mb-2">More Apps Coming</h3>
                        <p className="text-sm text-gray-500">Check back soon for more innovative solutions</p>
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto py-4 px-4">
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={closeModal}
                            aria-hidden="true"
                        ></div>
                        <div className="relative max-w-4xl w-full bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden animate-[fadeIn_180ms_ease-out] mx-auto my-8">
                            <div className="flex justify-between items-start p-6 border-b border-gray-800">
                                <div>
                                    <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Product Spotlight</p>
                                    <h3 className="text-3xl font-bold text-white font-poppins">MyVirtualCards</h3>
                                    <p className="text-gray-400 text-sm">Productivity • Available Now</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="p-6 space-y-5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    One secure app that stores every barcoded card you own. Digitize loyalty, membership,
                                    and access cards so you can travel lighter without losing benefits.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-200">
                                    <div className="space-y-3">
                                        <div>
                                            <p className="font-semibold text-white">Card Management</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Add cards manually with numbers</li>
                                                <li>Scan barcodes to add instantly</li>
                                                <li>Custom card creation with metadata</li>
                                                <li>Rich descriptions for each card</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Store Integration</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Pre-loaded store directory with logos</li>
                                                <li>Category-based organization</li>
                                                <li>Supports multiple barcode types</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Search & Filtering</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Search by store name or card number</li>
                                                <li>Searchable store directory</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Favorites</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Dedicated favorites section on home</li>
                                                <li>One-tap access to frequent cards</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Card Details View</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Full details with barcode display</li>
                                                <li>Store info and branding visuals</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div>
                                            <p className="font-semibold text-white">Theme Support</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Dark and light modes</li>
                                                <li>Automatic detection or manual toggle</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Data Backup</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Backup and restore card data</li>
                                                <li>Cloud-ready via Supabase integration</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Authentication</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Firebase/Supabase auth</li>
                                                <li>Account-based data sync</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Subscription Model</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Premium features via in-app purchases</li>
                                                <li>Subscription management context</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Barcode Scanning</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Camera-based capture</li>
                                                <li>Detection and parsing</li>
                                                <li>Supports multiple formats</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.myvirtualcards"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl text-lg"
                                    >
                                        Download on Google Play
                                    </a>
                                </div>

                                <p className="text-gray-400 text-sm text-center">Tap anywhere outside to close</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
