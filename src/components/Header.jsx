import rsLogo from "../assets/rs-logo.png";
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-gray-950/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-5 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/#home" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
                        <img
                            src={rsLogo}
                            alt="rsdevworks logo"
                            className="w-9 h-9 object-contain rounded-lg"
                        />
                        <h2 className="text-white font-bold text-base hidden sm:block font-poppins tracking-tight">{'RSDevworks '}</h2>
                    </Link>
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/#home" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">{' Home '}</Link>
                        <Link to="/#services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">{'What We Do '}</Link>
                        <Link to="/#portfolio" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">{' Our Apps '}</Link>
                        <Link to="/#about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">{' About '}</Link>
                        <Link to="/#contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">{' Contact '}</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
