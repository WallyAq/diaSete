import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Coupons from './components/Coupons'
import Playlist from './components/Playlist'
import DateIdeas from './components/DateIdeas'
import LoveLetter from './components/LoveLetter'
import Footer from './components/Footer'
import FloatingHearts from './components/FloatingHearts'

function App() {
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        setTimeout(() => setShowContent(true), 300)
    }, [])

    return (
        <div className="app">
            <FloatingHearts />
            {showContent && (
                <>
                    <Hero />
                    <Timeline />
                    <Gallery />
                    <LoveLetter />
                    <Coupons />
                    <Playlist />
                    <DateIdeas />
                    <Footer />
                </>
            )}
        </div>
    )
}

export default App
