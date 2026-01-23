import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ComingSoon from './components/ComingSoon'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Terms from './components/Terms'
import PrivacyPolicy from './components/PrivacyPolicy'
import Footer from './components/Footer'

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
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 0)
            }
        }
    }, [location])

    return null
}

function App() {
    return (
        <div className="App">
            <Header />
            <ScrollToSection />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
