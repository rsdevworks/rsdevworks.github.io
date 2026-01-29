import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Page Not Found | RSDevworks</title>
                <meta name="description" content="The page you are looking for could not be found." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center py-32 px-5 border-t border-gray-800">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="mb-8">
                        <h1 className="text-8xl md:text-9xl font-black mb-4 text-primary">404</h1>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h2>
                        <p className="text-xl text-gray-400 mb-8">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                    </div>
                    <Link
                        to="/"
                        className="btn-primary inline-block"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
        </>
    );
}
