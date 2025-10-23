// Elementos do DOM
const pontosInput = document.getElementById('pontos-input');
const energiaInput = document.getElementById('energia-input');
const btnCalcular = document.getElementById('btn-calcular');
const btnRetornar = document.getElementById('btn-retornar');
const resultadoContent = document.getElementById('resultado-content');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');
const themeAudio = document.getElementById('theme-audio');

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  themeAudio.play();
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Função para calcular os saltos da Benatar
function calculateJumps(points, initialEnergy) {
  const steps = [];
  let currentEnergy = initialEnergy;
  let currentPosition = 0;
  let jumps = 0;

  steps.push(`<p><strong>🚀 Iniciando Missão:</strong></p>`);
  steps.push(`<p>• Pontos de salto: [${points.join(', ')}]</p>`);
  steps.push(`<p>• Energia inicial: ${initialEnergy}</p>`);
  steps.push(`<p>• Posição inicial: índice 0</p>`);
  steps.push(`<br>`);

  // Verificação inicial
  if (points.length === 0) {
    return {
      success: false,
      message: '❌ A lista de pontos está vazia! Os Guardiões não têm rota definida.',
      steps: steps
    };
  }

  if (points.length === 1) {
    return {
      success: true,
      jumps: 0,
      message: '✅ Já estamos no destino! Nenhum salto necessário.',
      steps: steps
    };
  }

  steps.push(`<p><strong>📊 Calculando Rota:</strong></p>`);

  // Algoritmo de saltos
  while (currentPosition < points.length - 1) {
    const energyCost = points[currentPosition + 1];

    steps.push(`<div class="passo">`);
    steps.push(`<strong>Salto ${jumps + 1}:</strong><br>`);
    steps.push(`• Posição atual: índice ${currentPosition} (valor: ${points[currentPosition]})<br>`);
    steps.push(`• Próximo ponto: índice ${currentPosition + 1} (custo de energia: ${energyCost})<br>`);
    steps.push(`• Energia disponível: ${currentEnergy}<br>`);

    // Verifica se há energia suficiente
    if (currentEnergy < energyCost) {
      steps.push(
        `<br>⚠️ <strong>ENERGIA INSUFICIENTE!</strong> Precisamos de ${energyCost} mas só temos ${currentEnergy}<br>`
      );
      steps.push(`</div>`);

      return {
        success: false,
        message: `🚨 Os Guardiões ficaram à deriva no espaço! A Benatar não possui energia suficiente para completar a rota. Energia necessária: ${energyCost}, Energia disponível: ${currentEnergy}`,
        steps: steps,
        jumps: jumps
      };
    }

    // Realiza o salto
    currentEnergy -= energyCost;
    currentPosition++;
    jumps++;

    steps.push(`<br>✅ Salto realizado com sucesso!<br>`);
    steps.push(`• Nova posição: índice ${currentPosition}<br>`);
    steps.push(`• Energia restante: ${currentEnergy}<br>`);
    steps.push(`</div>`);
  }

  steps.push(`<br><p><strong>🎯 Destino Alcançado!</strong></p>`);
  steps.push(`<p>• Posição final: índice ${currentPosition} (valor: ${points[currentPosition]})</p>`);
  steps.push(`<p>• Energia final: ${currentEnergy}</p>`);

  return {
    success: true,
    jumps: jumps,
    message: `✅ Missão completada! A Benatar realizou ${jumps} salto(s) para alcançar o destino final.`,
    steps: steps
  };
}

// Função para validar e processar entrada
function processInput() {
  // Limpar resultado anterior
  resultadoContent.innerHTML = '';

  // Obter valores dos inputs
  const pontosStr = pontosInput.value.trim();
  const energiaStr = energiaInput.value.trim();

  // Validações
  if (!pontosStr || !energiaStr) {
    resultadoContent.innerHTML = `
            <div class="erro-msg">
                ⚠️ Por favor, preencha todos os campos!
            </div>
        `;
    return;
  }

  // Converter string de pontos para array
  let points;
  try {
    points = pontosStr.split(',').map(p => {
      const num = parseInt(p.trim());
      if (isNaN(num)) {
        throw new Error('Valor inválido');
      }
      return num;
    });
  } catch (e) {
    resultadoContent.innerHTML = `
            <div class="erro-msg">
                ❌ Formato inválido! Use números separados por vírgula (ex: 0, 10, 5, 20, 10, 5)
            </div>
        `;
    return;
  }

  // Converter energia para número
  const initialEnergy = parseInt(energiaStr);
  if (isNaN(initialEnergy) || initialEnergy < 0) {
    resultadoContent.innerHTML = `
            <div class="erro-msg">
                ❌ A energia inicial deve ser um número válido e não negativo!
            </div>
        `;
    return;
  }

  // Calcular saltos
  const result = calculateJumps(points, initialEnergy);

  // Exibir resultado
  let html = result.steps.join('');

  if (result.success) {
    html += `
            <div class="saida-final">
                🌟 SAÍDA ESPERADA: ${result.jumps} salto(s) 🌟
            </div>
        `;
  } else {
    html += `
            <div class="erro-msg">
                ${result.message}
            </div>
        `;
  }

  resultadoContent.innerHTML = html;
}

// Função para limpar campos
function clearFields() {
  pontosInput.value = '';
  energiaInput.value = '';
  resultadoContent.innerHTML = '';
}

// Event Listeners
btnCalcular.addEventListener('click', processInput);
btnRetornar.addEventListener('click', clearFields);

// Permitir Enter para calcular
pontosInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    processInput();
  }
});

energiaInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    processInput();
  }
});
