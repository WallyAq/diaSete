import React, { useEffect, useState } from 'react'
import './FloatingHearts.css'

function FloatingHearts() {
    const [hearts, setHearts] = useState([])

    useEffect(() => {
        // Generate random floating hearts
        const heartArray = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDuration: 10 + Math.random() * 10,
            animationDelay: Math.random() * 5,
            size: 20 + Math.random() * 30,
            opacity: 0.1 + Math.random() * 0.3
        }))
        setHearts(heartArray)
    }, [])

    return (
        <div className="floating-hearts">
            {hearts.map(heart => (
                <div
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: `${heart.left}%`,
                        animationDuration: `${heart.animationDuration}s`,
                        animationDelay: `${heart.animationDelay}s`,
                        fontSize: `${heart.size}px`,
                        opacity: heart.opacity
                    }}
                >
                    ❤️
                </div>
            ))}
        </div>
    )
}

export default FloatingHearts
