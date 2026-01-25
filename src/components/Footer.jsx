import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-500 text-center py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex justify-center gap-6 mb-6 flex-wrap">
                    <Link to="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors">
                        Terms of Service
                    </Link>
                    <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors">
                        Privacy Policy
                    </Link>
                </div>
                <p className="text-sm font-medium text-gray-400">
                    © 2026 {'RS Devworks'} • Proudly South African
                </p>
            </div>
        </footer>
    );
}
