import React, { useState } from 'react'
import './Coupons.css'

function Coupons() {
    // Número de WhatsApp configurado
    const WHATSAPP_NUMBER = '5585996246867'

    const [coupons, setCoupons] = useState([
        {
            id: 1,
            title: '🍕 Jantar Especial',
            description: 'Um jantar no restaurante que você escolher',
            expiryDate: '2026-04',
            redeemed: false,
            redeemedDate: null,
            color: 'hsl(340, 82%, 52%)'
        },
        {
            id: 2,
            title: '🎬 Sessão de Cinema',
            description: 'Cinema com pipoca e o filme que você quiser',
            expiryDate: '2026-01',
            redeemed: false,
            redeemedDate: null,
            color: 'hsl(320, 65%, 55%)'
        },
        {
            id: 3,
            title: '💆 Dia de Spa',
            description: 'Um dia relaxante de massagem e cuidados',
            expiryDate: '2026-01',
            redeemed: false,
            redeemedDate: null,
            color: 'hsl(10, 78%, 60%)'
        },
        {
            id: 4,
            title: '🎁 Presente Surpresa',
            description: 'Um presente especial escolhido com carinho',
            expiryDate: '2026-03',
            redeemed: false,
            redeemedDate: null,
            color: 'hsl(350, 75%, 58%)'
        },
        {
            id: 5,
            title: '🏖️ Fim de Semana',
            description: 'Um fim de semana em um lugar especial',
            expiryDate: '2026-06',
            redeemed: false,
            redeemedDate: null,
            color: 'hsl(330, 70%, 50%)'
        },
        {
            id: 6,
            title: '🍰 Café da Manhã em uma padaria',
            description: 'Café da manhã especial servido em uma padaria',
            expiryDate: '2026-03',
            redeemed: false,
            redeemedDate: null,
            color: 'hsl(340, 80%, 55%)'
        },
        {
            id: 7,
            title: '🎮 Noite de Games',
            description: 'Uma noite jogando seus jogos favoritos',
            expiryDate: '2026-06',
            redeemed: false,
            redeemedDate: null,
            color: 'hsl(280, 70%, 55%)'
        }
    ])

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
    }

    const isExpired = (expiryDate) => {
        return new Date(expiryDate) < new Date()
    }

    const handleRedeem = (coupon) => {
        if (coupon.redeemed) {
            // Desfazer resgate
            setCoupons(coupons.map(c =>
                c.id === coupon.id ? { ...c, redeemed: false, redeemedDate: null } : c
            ))
        } else {
            // Resgatar cupom e enviar WhatsApp
            const today = new Date().toLocaleDateString('pt-BR')
            const message = `🎫 *Quero resgatar meu cupom!*\n\n` +
                `📌 *Cupom:* ${coupon.title}\n` +
                `📝 *Descrição:* ${coupon.description}\n` +
                `📅 *Data de resgate:* ${today}\n` +
                `⏰ *Válido até:* ${formatDate(coupon.expiryDate)}\n\n` +
                `Quando podemos realizar? 💕`

            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

            // Abrir WhatsApp
            window.open(whatsappUrl, '_blank')

            // Marcar como resgatado
            setCoupons(coupons.map(c =>
                c.id === coupon.id ? { ...c, redeemed: true, redeemedDate: today } : c
            ))
        }
    }

    const availableCoupons = coupons.filter(c => !c.redeemed && !isExpired(c.expiryDate)).length
    const redeemedCoupons = coupons.filter(c => c.redeemed).length
    const expiredCoupons = coupons.filter(c => !c.redeemed && isExpired(c.expiryDate)).length

    return (
        <section className="coupons" id="coupons">
            <div className="container">
                <h2 className="section-title gradient-text">Cupons de Amor</h2>
                <p className="section-subtitle">
                    Cupons especiais para trocar por momentos inesquecíveis
                </p>

                <div className="coupons-stats">
                    <div className="stat-item glass">
                        <span className="stat-number">{availableCoupons}</span>
                        <span className="stat-label">Disponíveis</span>
                    </div>
                    <div className="stat-item glass">
                        <span className="stat-number">{redeemedCoupons}</span>
                        <span className="stat-label">Resgatados</span>
                    </div>
                    {expiredCoupons > 0 && (
                        <div className="stat-item glass">
                            <span className="stat-number">{expiredCoupons}</span>
                            <span className="stat-label">Expirados</span>
                        </div>
                    )}
                </div>

                <div className="coupons-grid">
                    {coupons.map((coupon, index) => {
                        const expired = isExpired(coupon.expiryDate)
                        return (
                            <div
                                key={coupon.id}
                                className={`coupon-card glass ${coupon.redeemed ? 'redeemed' : ''} ${expired ? 'expired' : ''}`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    borderColor: coupon.color
                                }}
                            >
                                <div className="coupon-header">
                                    <div
                                        className="coupon-icon"
                                        style={{ background: coupon.color }}
                                    >
                                        {coupon.title.split(' ')[0]}
                                    </div>
                                    {coupon.redeemed && (
                                        <div className="redeemed-badge">
                                            ✓ Resgatado
                                        </div>
                                    )}
                                    {expired && !coupon.redeemed && (
                                        <div className="expired-badge">
                                            ⚠ Expirado
                                        </div>
                                    )}
                                </div>

                                <div className="coupon-content">
                                    <h3>{coupon.title.substring(2)}</h3>
                                    <p>{coupon.description}</p>
                                    <div className="coupon-expiry">
                                        <span className="expiry-label">Válido a partir de:</span>
                                        <span className="expiry-date">{formatDate(coupon.expiryDate)}</span>
                                    </div>
                                    {coupon.redeemedDate && (
                                        <div className="coupon-redeemed-date">
                                            Resgatado em: {coupon.redeemedDate}
                                        </div>
                                    )}
                                </div>

                                <div className="coupon-footer">
                                    <button
                                        className="coupon-button"
                                        style={{
                                            background: coupon.redeemed ? 'var(--color-text-muted)' :
                                                expired ? 'var(--color-bg-light)' : coupon.color
                                        }}
                                        onClick={() => !expired && handleRedeem(coupon)}
                                        disabled={expired}
                                    >
                                        {expired ? '⚠ Expirado' : coupon.redeemed ? 'Desfazer' : '📱 Resgatar no WhatsApp'}
                                    </button>
                                </div>

                                {coupon.redeemed && (
                                    <div className="coupon-stamp">USADO</div>
                                )}
                                {expired && !coupon.redeemed && (
                                    <div className="coupon-stamp">EXPIRADO</div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="coupons-note glass">
                    <p>💡 Clique em "Resgatar no WhatsApp" para enviar uma mensagem e garantir seu presente!</p>
                </div>
            </div>
        </section>
    )
}

export default Coupons
