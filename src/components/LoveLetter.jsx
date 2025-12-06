import React from 'react'
import './LoveLetter.css'

function LoveLetter() {
    return (
        <section className="love-letter" id="love-letter">
            <div className="container">
                <div className="letter-container glass">
                    <div className="letter-header">
                        <h2 className="gradient-text">Para Você, Meu Amor</h2>
                        <div className="letter-decoration">💌</div>
                    </div>

                    <div className="letter-content">
                        <p className="letter-opening">Meu amor,</p>

                        <p>
                            Sou horrivel com palavras, oce sabe. Porem, vou tentar colocar em palavras o que eu quero dizer,
                            e o que eu quero dizer e que você e a pessoa mais especial da minha vida. Eu te adimiro pela pessoa que oce é, linda,
                            meiga,atenciosa, muito inteligente e muito engraçada.
                        </p>

                        <p>
                            Você transformou meus dias comuns em dias unicos, e me fez acreditar que existem coisas melhores de que vale a pena lutar,
                            acredito em oce e vou estar do seu lado ate o fim do mundo, ou de Fortaleza.  Sei que tenho MUITOS erros, mas estou disposto a lutar para melhorar
                            e te fazer feliz.
                        </p>

                        <p>
                            Obrigado(a) por cada risada compartilhada, cada abraço apertado, cada palavra de carinho,
                            e até pelos momentos difíceis que nos fizeram crescer juntos. Você é meu grande amor.
                        </p>

                        <p className="letter-closing">
                            Que venham muitos e muitos anos pela frente, repletos de amor, felicidade e cumplicidade.
                            Eu te amo hoje, amanhã e sempre.
                        </p>

                        <p className="letter-signature">
                            Com todo meu amor,<br />
                            <span className="gradient-text">Wallisao Pressão ❤️</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoveLetter
