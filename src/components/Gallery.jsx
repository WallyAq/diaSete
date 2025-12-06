import React, { useState } from 'react'
import './Gallery.css'

import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'
import foto3 from '../assets/foto3.jpg'
import foto4 from '../assets/foto4.jpg'
import foto5 from '../assets/foto5.jpg'
import foto6 from '../assets/foto6.jpg'

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    // Placeholder images - you can replace with actual photos
    const images = [
        { id: 1, title: 'A just', src: foto1, color: 'hsl(340, 82%, 52%)' },
        { id: 2, title: 'call', src: foto2, color: 'hsl(320, 65%, 55%)' },
        { id: 3, title: 'to say', src: foto3, color: 'hsl(10, 78%, 60%)' },
        { id: 4, title: 'I', src: foto4, color: 'hsl(350, 75%, 58%)' },
        { id: 5, title: 'love', src: foto5, color: 'hsl(330, 70%, 50%)' },
        { id: 6, title: 'you', src: foto6, color: 'hsl(340, 80%, 55%)' }
    ]

    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <h2 className="section-title gradient-text">Nossos Momentos</h2>
                <p className="section-subtitle">
                    Uma coleção de memórias que guardaremos para sempre
                </p>

                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className="gallery-item glass"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                background: `linear-gradient(135deg, ${image.color}40 0%, ${image.color}20 100%)`
                            }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="gallery-placeholder">
                                {image.src ? (
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <span className="gallery-icon">📷</span>
                                )}
                            </div>
                            <div className="gallery-overlay">
                                <h3>{image.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content">
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                            ✕
                        </button>
                        <div className="lightbox-image">
                            {selectedImage.src ? (
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                                />
                            ) : (
                                <span className="gallery-icon">📷</span>
                            )}
                        </div>
                        <h3>{selectedImage.title}</h3>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Gallery
