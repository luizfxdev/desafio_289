# 🚀 Guardiões da Galáxia - Calculadora de Saltos da Benatar

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## 📖 Sobre o Desafio

Os Guardiões da Galáxia estão em uma missão cósmica a bordo da **Benatar**! Peter Quill precisa calcular os saltos espaciais ideais para chegar ao destino antes que a nave fique sem energia.

Este projeto implementa um **algoritmo de otimização de rota** que calcula o número mínimo de saltos necessários para completar uma jornada espacial, considerando os custos de energia de cada ponto da trajetória.

## 🎯 O Problema

Dada uma lista de pontos de salto onde cada posição representa a energia necessária para alcançar aquele ponto, e uma quantidade inicial de energia, o algoritmo deve:

- ✅ Calcular o número mínimo de saltos para chegar ao destino
- ✅ Verificar se há energia suficiente para completar a rota
- ✅ Exibir um relatório detalhado de cada salto realizado
- ❌ Informar quando a missão é impossível

### Exemplo de Entrada:
```
Pontos: [0, 10, 5, 20, 10, 5]
Energia Inicial: 50
```

### Saída Esperada:
```
5 saltos para alcançar o destino final
```

## 🌟 Funcionalidades

- 🎮 **Interface Sci-Fi Interativa** - Design inspirado nos Guardiães da Galáxia
- 📊 **Validação em Tempo Real** - Feedback instantâneo sobre a viabilidade da rota
- 📈 **Cálculo Detalhado** - Visualização passo a passo de cada salto
- 🎵 **Áudio Tema** - Música ambiente para imersão total (Marvin Gaye & Tammi Terrell - Ain't No Mountain High Enough)
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em qualquer dispositivo
- 🎬 **Background Dinâmico** - Vídeo espacial em loop para experiência visual

## 🎨 Recursos Visuais

### Background
O vídeo de background utilizado é uma modificação do jogo **No Man's Sky**, capturado e compartilhado no YouTube.

📹 **Fonte do Vídeo**: [Space Background - No Man's Sky Mod](https://www.youtube.com/watch?v=7cFOXiSJeZo&t=108s)

### Música Tema
🎵 A música tema utilizada é **"Ain't No Mountain High Enough"** de Marvin Gaye & Tammi Terrell, icônica trilha sonora dos filmes dos Guardiões da Galáxia.



## 💼 Aplicações em Projetos Reais

Este algoritmo pode ser adaptado para diversos cenários do mundo real:

### 🚗 Logística e Transporte
- **Otimização de rotas de entrega** considerando consumo de combustível
- **Planejamento de viagens** com paradas estratégicas para reabastecimento
- **Gestão de frotas elétricas** calculando autonomia entre estações de recarga

### ✈️ Aviação
- **Cálculo de escalas** para voos de longa distância
- **Otimização de consumo de combustível** em rotas internacionais
- **Planejamento de voos espaciais** (literalmente!)

### 🔋 Gestão de Energia
- **Sistemas de energia renovável** com armazenamento em baterias
- **Planejamento de carregamento** de veículos elétricos
- **Otimização de uso** em dispositivos móveis

### 🎮 Desenvolvimento de Jogos
- **Mecânicas de movimentação** baseadas em recursos limitados
- **Sistemas de viagem rápida** em jogos de mundo aberto
- **Gerenciamento de recursos** em jogos de estratégia

### 🤖 Robótica
- **Planejamento de trajetória** para robôs autônomos
- **Otimização de bateria** em drones de entrega
- **Navegação eficiente** em ambientes complexos

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e moderna
- **CSS3** - Animações e design responsivo com Flexbox
- **JavaScript Vanilla** - Lógica de algoritmo pura, sem dependências
- **Google Fonts** - Tipografia Orbitron e Inter

## 📦 Estrutura do Projeto

```
desafio_289/
│
├── index.html          # Página principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica do algoritmo
├── README.md           # Documentação
│
└── assets/             # Recursos multimídia (não inclusos)
    ├── background.mp4  # Vídeo de fundo (No Man's Sky)
    └── theme.mp3       # Música tema (Ain't No Mountain High Enough)
```

## 🚀 Como Usar

1. **Clone o repositório**
```bash
git clone https://github.com/luizfxdev/desafio_289.git
cd desafio_289
```

2. **Adicione os recursos multimídia**
   - Crie a pasta `assets/`
   - Adicione `background.mp4` (vídeo espacial)
   - Adicione `theme.mp3` (música tema)

3. **Abra o projeto**
   - Execute `index.html` no seu navegador
   - Ou use um servidor local como Live Server (VSCode)

## 📝 Como Funciona

### Input
- **Pontos de Salto**: Lista de números separados por vírgula (ex: `0, 10, 5, 20, 10, 5`)
- **Energia Inicial**: Valor numérico representando a energia disponível (ex: `50`)

### Processamento
1. O algoritmo percorre sequencialmente os pontos de salto
2. Para cada salto, verifica se há energia suficiente
3. Deduz o custo de energia e avança para o próximo ponto
4. Continua até alcançar o destino ou ficar sem energia

### Output
- **Sucesso**: Número de saltos realizados com detalhamento de cada etapa
- **Falha**: Mensagem indicando onde a energia se esgotou

## 🎯 Complexidade do Algoritmo

- **Tempo**: O(n) - onde n é o número de pontos
- **Espaço**: O(1) - uso constante de memória
- **Abordagem**: Guloso (Greedy) - solução ótima local

## 🌐 Deploy

Este projeto é 100% front-end e pode ser hospedado em:
- GitHub Pages
- Netlify
- Vercel
- Qualquer servidor web estático

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Luiz FX**
- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- LinkedIn: [in/luizfxdev](https://www.linkedin.com/in/luizfxdev)
- Portfólio: [luizfxdev.com.br](https://luizfxdev.com.br)

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para:
1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## ⭐ Mostre seu apoio

Se este projeto te ajudou de alguma forma, considere dar uma ⭐ no repositório!

---

<div align="center">
  <p>Feito com 💚 e muito ☕ por <strong>Luiz FX</strong></p>
  <p><em>"I am Groot!" - Groot</em></p>
</div>
