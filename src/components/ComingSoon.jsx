import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ComingSoon() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleNotifyMe = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    to_email: 'rsdevworks00@gmail.com',
                    user_email: email,
                }
            );
            setMessage('✓ Thanks! You\'ll be notified when we launch.');
            setEmail('');
        } catch (error) {
            console.error('Failed to send email:', error);
            setMessage('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="coming-soon" className="py-32 bg-gray-900 relative overflow-hidden border-t border-gray-800">
            <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
                <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Early Access</p>
                <h2 className="section-title mb-6">
                    MyVirtualCards – Launching Early 2026
                </h2>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 md:p-10 mb-10 border border-gray-700">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                        The ultimate digital wallet for every barcoded card in your life
                    </p>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        🛒 Supermarket loyalty • 💪 Gym & student cards • 🚪 Access cards • 🏥 Medical aid • 📚 Library cards • ⛽ Fuel rewards • ☕ Coffee punch cards
                    </p>
                </div>

                <form
                    onSubmit={handleNotifyMe}
                    className="max-w-lg mx-auto flex flex-col sm:flex-row gap-2 bg-gray-800/50 rounded-lg p-1.5 border border-gray-700 hover:border-gray-600 transition-all"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email for early access"
                        required
                        disabled={loading}
                        className="flex-1 px-4 py-3 rounded-md border-none text-base focus:outline-none bg-gray-900 text-white placeholder:text-gray-500 disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending...' : 'Notify Me'}
                    </button>
                </form>

                {message && (
                    <p className="mt-4 text-sm font-medium" style={{ color: message.includes('✓') ? '#10b981' : '#ef4444' }}>
                        {message}
                    </p>
                )}

                <p className="mt-8 text-gray-500 text-sm font-medium">
                    ✓ Be the first to ditch the plastic. 100% free at launch.
                </p>
            </div>
        </section>
    );
}
