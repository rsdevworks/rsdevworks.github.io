const contacts = [
    {
        icon: "mail-outline",
        label: "Email",
        value: "rsdevworks00@gmail.com",
        href: "mailto:rsdevworks00@gmail.com",
    },
    {
        icon: "call-outline",
        label: "Phone",
        value: "+27 689 253 516",
        href: "tel:+27689253516",
    },
    {
        icon: "logo-whatsapp",
        label: "WhatsApp",
        value: "+27 689 253 516",
        href: "https://wa.me/27689253516",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-gray-950 border-t border-gray-800 text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-5 relative z-10 text-center">
                <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Get in Touch</p>
                <h2 className="section-title mb-6">Let's Build Something Great</h2>
                <p className="section-subtitle mb-16">
                    Have a project in mind? Reach out — we'd love to hear from you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {contacts.map(({ icon, label, value, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="group card p-8 flex flex-col items-center gap-4 hover:-translate-y-2 border-b-4 border-transparent hover:border-primary transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                <ion-icon name={icon} style={{ fontSize: '28px', color: 'var(--color-primary)' }}></ion-icon>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">{label}</p>
                                <p className="text-white font-semibold text-base group-hover:text-primary transition-colors duration-300">{value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
