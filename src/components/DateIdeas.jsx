import React, { useState } from 'react'
import './DateIdeas.css'

function DateIdeas() {
    const dateIdeas = {
        romantico: [
            { emoji: '🌅', title: 'Assistir o Pôr do Sol', description: 'Encontrem um lugar bonito e aproveitem o momento juntos' },
            { emoji: '🍽️', title: 'Jantar à Luz de Velas', description: 'Preparem um jantar especial em casa ou vão a um restaurante romântico' },
            { emoji: '🌹', title: 'Piquenique no Parque', description: 'Levem uma cesta com comidas gostosas e curtam a natureza' },
            { emoji: '🎬', title: 'Cinema em Casa', description: 'Escolham um filme, façam pipoca e se aconcheguem no sofá' },
            { emoji: '⭐', title: 'Observar as Estrelas', description: 'Deitem em um lugar tranquilo e admirem o céu noturno' }
        ],
        aventura: [
            { emoji: '🚴', title: 'Passeio de Bike', description: 'Explorem a cidade ou trilhas de bicicleta' },
            { emoji: '🏖️', title: 'Dia na Praia', description: 'Sol, mar e muita diversão juntos' },
            { emoji: '🥾', title: 'Trilha na Natureza', description: 'Façam uma caminhada e descubram lugares novos' },
            { emoji: '🎢', title: 'Parque de Diversões', description: 'Adrenalina e risadas garantidas' },
            { emoji: '🏊', title: 'Piscina ou Clube', description: 'Refresquem-se e relaxem na água' }
        ],
        criativo: [
            { emoji: '🎨', title: 'Aula de Pintura', description: 'Criem arte juntos, mesmo sem experiência' },
            { emoji: '👨‍🍳', title: 'Cozinhar Juntos', description: 'Experimentem uma receita nova e se divirtam na cozinha' },
            { emoji: '📸', title: 'Sessão de Fotos', description: 'Tirem fotos divertidas e criem memórias' },
            { emoji: '🎭', title: 'Teatro ou Show', description: 'Assistam a uma apresentação cultural' },
            { emoji: '🎮', title: 'Noite de Jogos', description: 'Joguem videogame, jogos de tabuleiro ou cartas' }
        ],
        casual: [
            { emoji: '☕', title: 'Café da Tarde', description: 'Conversem em uma cafeteria aconchegante' },
            { emoji: '🛍️', title: 'Passeio no Shopping', description: 'Andem sem pressa e vejam as vitrines' },
            { emoji: '📚', title: 'Livraria ou Biblioteca', description: 'Descubram novos livros juntos' },
            { emoji: '🍦', title: 'Sorvete no Parque', description: 'Tomem um sorvete e caminhem tranquilamente' },
            { emoji: '🎵', title: 'Ouvir Música Juntos', description: 'Compartilhem suas músicas favoritas' }
        ]
    }

    const [currentIdea, setCurrentIdea] = useState(null)
    const [isAnimating, setIsAnimating] = useState(false)

    const generateIdea = () => {
        setIsAnimating(true)

        // Pega todas as ideias de todas as categorias
        const allIdeas = Object.values(dateIdeas).flat()

        // Seleciona uma ideia aleatória
        const randomIdea = allIdeas[Math.floor(Math.random() * allIdeas.length)]

        setTimeout(() => {
            setCurrentIdea(randomIdea)
            setIsAnimating(false)
        }, 500)
    }

    const generateByCategory = (category) => {
        setIsAnimating(true)

        const categoryIdeas = dateIdeas[category]
        const randomIdea = categoryIdeas[Math.floor(Math.random() * categoryIdeas.length)]

        setTimeout(() => {
            setCurrentIdea(randomIdea)
            setIsAnimating(false)
        }, 500)
    }

    return (
        <section className="date-ideas" id="date-ideas">
            <div className="container">
                <h2 className="section-title gradient-text">O Que Fazer Hoje?</h2>
                <p className="section-subtitle">
                    Ideias criativas para nossos encontros especiais
                </p>

                <div className="ideas-container">
                    <div className={`idea-display glass ${isAnimating ? 'animating' : ''}`}>
                        {currentIdea ? (
                            <>
                                <div className="idea-emoji">{currentIdea.emoji}</div>
                                <h3 className="idea-title">{currentIdea.title}</h3>
                                <p className="idea-description">{currentIdea.description}</p>
                            </>
                        ) : (
                            <>
                                <div className="idea-emoji">🎲</div>
                                <h3 className="idea-title">Clique no botão abaixo!</h3>
                                <p className="idea-description">Vamos descobrir o que fazer hoje?</p>
                            </>
                        )}
                    </div>

                    <button
                        className="generate-button"
                        onClick={generateIdea}
                        disabled={isAnimating}
                    >
                        {isAnimating ? '🎲 Gerando...' : '🎲 Gerar Ideia Aleatória'}
                    </button>

                    <div className="category-buttons">
                        <button
                            className="category-btn romantic"
                            onClick={() => generateByCategory('romantico')}
                            disabled={isAnimating}
                        >
                            💕 Romântico
                        </button>
                        <button
                            className="category-btn adventure"
                            onClick={() => generateByCategory('aventura')}
                            disabled={isAnimating}
                        >
                            🏃 Aventura
                        </button>
                        <button
                            className="category-btn creative"
                            onClick={() => generateByCategory('criativo')}
                            disabled={isAnimating}
                        >
                            🎨 Criativo
                        </button>
                        <button
                            className="category-btn casual"
                            onClick={() => generateByCategory('casual')}
                            disabled={isAnimating}
                        >
                            ☕ Casual
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DateIdeas
