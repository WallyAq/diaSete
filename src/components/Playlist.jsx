import React from 'react'
import './Playlist.css'

function Playlist() {
    // Link embed do Spotify configurado
    const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/playlist/21x43vrORLyScxeUFhJas6?utm_source=generator"

    return (
        <section className="playlist" id="playlist">
            <div className="container">
                <h2 className="section-title gradient-text">Nossa Playlist</h2>
                <p className="section-subtitle">
                    Músicas que oce gosta do rock
                </p>

                <div className="playlist-container glass">
                    <div className="playlist-decoration">
                        <span className="music-note">🎵</span>
                        <span className="music-note">🎶</span>
                        <span className="music-note">💕</span>
                    </div>

                    <div className="playlist-embed">
                        <iframe
                            src={SPOTIFY_EMBED_URL}
                            width="100%"
                            height="380"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Nossa Playlist de Amor"
                        ></iframe>
                    </div>

                    <div className="playlist-message">
                        <p>🎧 Músicas que oce gosta do rock</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Playlist
