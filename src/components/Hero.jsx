import React, { useEffect, useState } from 'react'
import './Hero.css'

function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="hero" id="hero">
            <div className="hero-content container">
                <div className={`hero-text ${isVisible ? 'fade-in-up' : ''}`}>
                    <h1 className="gradient-text">2 Anos de Nós</h1>
                    <p className="hero-subtitle">
                        Celebrando 730 dias de amor, momentos divertidos e momentos do balacobaco
                    </p>
                    <div className="hero-date">
                        <span className="date-label">Desde</span>
                        <span className="date-value">07 de Dezembro de 2023</span>
                    </div>
                </div>

                <div className="hero-heart-container">
                    <div className="big-heart">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="var(--color-primary)" />
                                    <stop offset="100%" stopColor="var(--color-secondary)" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M50,90 C50,90 10,65 10,40 C10,25 20,15 30,15 C40,15 50,25 50,25 C50,25 60,15 70,15 C80,15 90,25 90,40 C90,65 50,90 50,90 Z"
                                fill="url(#heartGradient)"
                                className="heart-path"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Descubra nossa história</span>
                <div className="scroll-arrow">↓</div>
            </div>
        </section>
    )
}

export default Hero
