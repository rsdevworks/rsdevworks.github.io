import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import ComingSoon from './components/ComingSoon'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Terms from './components/Terms'
import PrivacyPolicy from './components/PrivacyPolicy'
import MyVirtualCardsPrivacy from './components/MyVirtualCardsPrivacy'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import { getOrganizationSchemas, createJsonLdScript } from './utils/structuredData'

function Home() {
    return (
        <>
            <Hero />
            <ComingSoon />
            <Services />
            <About />
            <Portfolio />
            <Contact />
        </>
    )
}

function ScrollToSection() {
    const location = useLocation()

    useEffect(() => {
        // Scroll to top on page navigation (for /terms, /privacy)
        if (!location.hash) {
            window.scrollTo(0, 0)
        }

        // Scroll to hash section if present
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 0)
            }
        }
    }, [location.pathname, location.hash])

    return null
}

function App() {
    const organizationSchemas = getOrganizationSchemas()

    return (
        <div className="App">
            <Helmet>
                {/* Organization Schema for Knowledge Graph */}
                {organizationSchemas.map((schema, idx) => (
                    <script key={idx} type="application/ld+json">
                        {createJsonLdScript(schema)}
                    </script>
                ))}
                {/* Global site verification and tracking */}
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            </Helmet>
            <Header />
            <ScrollToSection />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/myvirtualcards/privacy" element={<MyVirtualCardsPrivacy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
