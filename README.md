# 💕 Site de Aniversário de Namoro - 2 Anos

Um lindo site React para celebrar 2 anos de namoro, com design moderno, animações suaves e estética premium.

## ✨ Características

- 🎨 Design moderno com gradientes vibrantes e glassmorphism
- 💖 Animações suaves de corações flutuantes
- 📱 Totalmente responsivo para todos os dispositivos
- 🖼️ Galeria de fotos com lightbox
- 📜 Linha do tempo de memórias
- 💌 Carta de amor personalizada
- ⚡ Construído com React + Vite para performance máxima

## 🚀 Como Executar

### Pré-requisitos

Você precisa ter o Node.js instalado no seu computador. Se não tiver:

1. Baixe e instale o Node.js de: https://nodejs.org/
2. Escolha a versão LTS (recomendada)
3. Após a instalação, reinicie o terminal

### Instalação

1. Abra o terminal nesta pasta
2. Instale as dependências:
```bash
npm install
```

### Executar o Projeto

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

O site estará disponível em: `http://localhost:5173`

### Build para Produção

Para criar uma versão otimizada para produção:
```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## 🎨 Personalização

### Alterar Datas e Textos

Edite os seguintes arquivos:

- **Hero.jsx** - Altere a data de início do namoro
- **Timeline.jsx** - Personalize as memórias e marcos importantes
- **LoveLetter.jsx** - Escreva sua própria carta de amor
- **Footer.jsx** - Ajuste as informações do rodapé

### Adicionar Fotos

1. Coloque suas fotos na pasta `public/images/`
2. Edite `Gallery.jsx` e substitua os placeholders:

```jsx
const images = [
  { id: 1, title: 'Nosso Primeiro Encontro', src: '/images/foto1.jpg' },
  { id: 2, title: 'Momentos Especiais', src: '/images/foto2.jpg' },
  // ... adicione mais fotos
]
```

3. No componente, substitua o placeholder pela imagem real:

```jsx
<img src={image.src} alt={image.title} />
```

### Mudar Cores

Edite `src/index.css` e ajuste as variáveis CSS:

```css
:root {
  --color-primary: hsl(340, 82%, 52%);
  --color-secondary: hsl(320, 65%, 55%);
  /* ... outras cores */
}
```

## 📁 Estrutura do Projeto

```
diaSete/
├── public/
│   └── heart.svg          # Ícone do site
├── src/
│   ├── components/
│   │   ├── Hero.jsx       # Seção principal
│   │   ├── Timeline.jsx   # Linha do tempo
│   │   ├── Gallery.jsx    # Galeria de fotos
│   │   ├── LoveLetter.jsx # Carta de amor
│   │   ├── Footer.jsx     # Rodapé
│   │   └── FloatingHearts.jsx # Corações animados
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada
│   └── index.css          # Estilos globais
├── index.html             # HTML principal
├── package.json           # Dependências
└── vite.config.js         # Configuração Vite
```

## 💡 Dicas

- Use fotos de alta qualidade para melhor resultado
- Personalize as memórias na Timeline com momentos especiais do casal
- Ajuste a carta de amor para torná-la mais pessoal
- Compartilhe o link com seu amor após fazer deploy!

## 🌐 Deploy

Você pode fazer deploy gratuito em:

- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **GitHub Pages**: https://pages.github.com

Basta conectar seu repositório e o deploy será automático!

## ❤️ Feito com Amor

Este site foi criado especialmente para celebrar o amor. Aproveite e feliz aniversário de namoro! 🎉
