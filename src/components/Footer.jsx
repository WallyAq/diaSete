import React from 'react'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()
    const startYear = 2023
    const yearsTogetherDisplay = currentYear - startYear

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-heart">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="footerHeartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="var(--color-primary)" />
                                    <stop offset="100%" stopColor="var(--color-secondary)" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M50,90 C50,90 10,65 10,40 C10,25 20,15 30,15 C40,15 50,25 50,25 C50,25 60,15 70,15 C80,15 90,25 90,40 C90,65 50,90 50,90 Z"
                                fill="url(#footerHeartGradient)"
                            />
                        </svg>
                    </div>

                    <div className="footer-text">
                        <p className="footer-main">
                            Feito com o coração pro meu momo
                        </p>
                        <p className="footer-years">
                            {yearsTogetherDisplay} {yearsTogetherDisplay === 1 ? 'ano' : 'anos'} juntos e contando...
                        </p>
                        <p className="footer-date">
                            Dezembro 2023 - Dezembro {currentYear}
                        </p>
                    </div>
                </div>


                <div className="footer-quote">
                    <p>"se amor fosse dinheiro, eu teria trilhões para te dizer que te amo"</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
