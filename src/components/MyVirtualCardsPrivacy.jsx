import { Helmet } from "react-helmet-async";
import { getMetadata } from "../utils/metadata";

export default function MyVirtualCardsPrivacy() {
    const meta = getMetadata('myvirtualcards-privacy');
    return (
        <>
            <Helmet>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <link rel="canonical" href={meta.canonical} />
                <meta property="og:title" content={meta.ogTitle} />
                <meta property="og:description" content={meta.ogDescription} />
                <meta property="og:url" content={meta.canonical} />
            </Helmet>
            <section id="myvirtualcards-privacy" className="py-32 bg-gray-950 border-t border-gray-800 text-white">
                <div className="max-w-4xl mx-auto px-5">
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">MyVirtualCards</p>
                    <h1 className="text-5xl md:text-6xl font-black mb-4 text-primary">Privacy Policy</h1>
                    <p className="text-gray-400 mb-8">Effective: September 13, 2025</p>

                    <div className="prose prose-invert max-w-none space-y-6">

                        {/* TL;DR */}
                        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-8">
                            <h2 className="text-lg font-bold text-white mb-3">Quick Summary (TL;DR)</h2>
                            <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                <li>Your cards are stored locally on your device — we can't see them.</li>
                                <li>Backups are encrypted before upload and linked to your email only.</li>
                                <li>You can delete your account and all data anytime in App settings.</li>
                                <li>No passwords, no marketing emails, no selling of data.</li>
                            </ul>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                            MyVirtualCards ("we", "our", or "us") respects your privacy. This policy explains what information we collect, how we use it, and your choices when using the MyVirtualCards mobile application ("App").
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1) Information We Collect</h2>
                        <ul className="list-disc pl-6 text-gray-300 space-y-3">
                            <li>
                                <strong>Local Card Data.</strong> Store/rewards cards you add are stored locally on your device. We do not access or share this data from our servers.
                            </li>
                            <li>
                                <strong>Account &amp; Login Data.</strong> To use backup and sync features, you log in using your email and a one-time passcode (OTP). We do not store passwords.
                            </li>
                            <li>
                                <strong>Backup Data (Optional).</strong> If you use backup, your card data is encrypted on your device and stored with our cloud provider (<a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Supabase</a>). Backups are linked to your account (email login).
                            </li>
                            <li>
                                <strong>Email Address.</strong> Used to authenticate you and to link your encrypted backup. We do not use it for marketing.
                            </li>
                            <li>
                                <strong>Ads &amp; Usage Data via AdMob.</strong> We use Google AdMob to show ads (unless you subscribe to remove ads). AdMob may collect device identifiers and app interaction data per <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google's Privacy Policy</a> and <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary underline">Ads Policy</a>.
                            </li>
                            <li>
                                <strong>Subscription Data.</strong> If you subscribe to remove ads, payment and subscription details are handled securely by the app store (Google Play / Apple App Store). We do not process or store your payment information.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2) How We Use Information</h2>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li>Provide passwordless login and account authentication.</li>
                            <li>Enable backup and restore functionality linked to your account.</li>
                            <li>Operate, maintain, and improve the App.</li>
                            <li>Display ads through Google AdMob (unless removed via subscription).</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3) Data Security</h2>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li>Backups are encrypted before upload; we cannot read your raw card contents.</li>
                            <li>Email is used only for authentication and backup identification.</li>
                            <li>While no method is 100% secure, we use reasonable safeguards appropriate to the data.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4) Data Sharing</h2>
                        <p className="text-gray-300 leading-relaxed">We do not sell your personal information.</p>
                        <p className="text-gray-300 leading-relaxed">Third-party services we rely on:</p>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li>Supabase for encrypted backup storage.</li>
                            <li>Google AdMob for advertising.</li>
                            <li>Google Play / Apple App Store for subscription and payment processing.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">5) Data Retention</h2>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li>Local card data remains only on your device.</li>
                            <li>Encrypted backups are retained until you delete them through the App or request deletion.</li>
                            <li>Login data (email) is retained as long as your account exists.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">6) User Data &amp; Account Deletion</h2>
                        <p className="text-gray-300 leading-relaxed">
                            You can delete your account and associated data at any time using the "Delete Account" option in the App settings.
                        </p>
                        <p className="text-gray-300 leading-relaxed">When you delete your account:</p>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li>Any encrypted backups linked to your email will be deleted from our servers (Supabase).</li>
                        </ul>
                        <p className="text-gray-300 leading-relaxed">Once deletion is confirmed, your data cannot be recovered.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">7) Children's Privacy</h2>
                        <p className="text-gray-300 leading-relaxed">
                            The App is not directed to children under 13, and we do not knowingly collect personal information from children.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">8) International Transfers</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Backup data may be stored on servers outside your country. By using the backup feature, you consent to this transfer.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">9) Changes to This Policy</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We may update this policy from time to time. We will update the "Effective" date above and make the updated version available in the App and/or on the listing page.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">10) Contact Us</h2>
                        <p className="text-gray-300 leading-relaxed">
                            If you have questions or requests (including account or backup deletion), contact:{" "}
                            <a href="mailto:rsdevworks00@gmail.com" className="text-primary underline">rsdevworks00@gmail.com</a>
                        </p>

                        <p className="text-gray-500 text-sm mt-12">© 2025 MyVirtualCards (VRC)</p>
                    </div>
                </div>
            </section>
        </>
    );
}
