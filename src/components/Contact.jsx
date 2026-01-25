export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-gray-900 border-t border-gray-800 text-white text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-5 relative z-10">
                <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Get in Touch</p>
                <h2 className="section-title text-center mb-8">
                    Let's Build Something Great
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light mb-12">
                    Have a project in mind? Get in touch with our team.
                </p>

                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg">
                        <span>📧</span>
                        <span className="text-gray-300">Email us at</span>
                        <a
                            href="mailto:rsdevworks00@gmail.com"
                            className="text-primary font-bold hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                        >
                            rsdevworks00@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg">
                        <span>📞</span>
                        <span className="text-gray-300">or call</span>
                        <a
                            href="tel:+27763389108"
                            className="text-primary font-bold hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                        >
                            +27 69 684 4515
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
