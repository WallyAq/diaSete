import React from 'react'
import './Timeline.css'

function Timeline() {
    const memories = [
        {
            date: 'Dezembro 2023',
            title: 'Nosso Primeiro Dia',
            description: 'O dia em que tudo começou. Coloquei o dedo no seu anel, vc colocou no meu, e começou uma linda relação',
            icon: '💕'
        },
        {
            date: 'Primeiros Meses',
            title: 'Descobrindo um ao Outro',
            description: 'Cada conversa, cada risada, cada momento juntos nos aproximava mais e mais.',
            icon: '🌟'
        },
        {
            date: 'Nossos Momentos',
            title: 'Aventuras Juntos',
            description: 'De passeios simples a grandes aventuras( algumas insalubres), cada momento ao seu lado é especial.',
            icon: '🎭'
        },
        {
            date: 'Hoje',
            title: '2 Anos de Amor',
            description: 'E aqui estamos, um ao lado do outro! yo te amo bastante miamor!',
            icon: '❤️'
        }
    ]

    return (
        <section className="timeline" id="timeline">
            <div className="container">
                <h2 className="section-title gradient-text">Nossa Jornada</h2>
                <p className="section-subtitle">
                    Cada momento ao seu lado é uma memória preciosa
                </p>

                <div className="timeline-container">
                    {memories.map((memory, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-icon">{memory.icon}</div>
                            <div className="timeline-content glass">
                                <span className="timeline-date">{memory.date}</span>
                                <h3>{memory.title}</h3>
                                <p>{memory.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline
