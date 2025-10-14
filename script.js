// Referência para o elemento de output no DOM.
const output = document.getElementById('output');

// Array com as linhas de log a serem exibidas sequencialmente.
const lines = [
    { type: 'log', text: '<span class="info">> INICIANDO DIAGNÓSTICO DE INTEGRIDADE DO NÚCLEO...</span>' },
    { type: 'log', text: '> ALVO: RASETsU - NÚMERO DE SÉRIE: 734-ALPHA' },
    { type: 'log', text: '> A LER ASSINATURA DE MANA ORIGINAL...' },
    { type: 'log', text: '> VERIFICANDO HASH DO NÚCLEO...' },
    { type: 'log', text: '> [HASH: 8A4E0B1F5C6D7A89...F9B2C3D4E5A6B701] - INTEGRIDADE: 100% <span class="ok">[OK]</span>' },
    { type: 'log', text: '<span class="warning">> INICIANDO PROTOCOLO DE MITOSE... ESTA AÇÃO É IRREVERSÍVEL.</span>' },
    { type: 'log', text: '> A separar matriz de dados primária... <span class="warning">[EM ANDAMENTO]</span>' },
    { type: 'log', text: '  ... Divisão de estrutura concluída.' },
    { type: 'log', text: '> CRIAÇÃO DO NÚCLEO-A (COMBATE): <span class="ok">SUCESSO.</span>' },
    { type: 'log', text: '> CRIAÇÃO DO NÚCLEO-B (PESQUISA): <span class="ok">SUCESSO.</span>' },
    { type: 'log', text: '' },
    { type: 'log', text: '<span class="info">> INICIANDO MIGRAÇÃO DE DADOS E VALIDAÇÃO DE ARQUIVOS...</span>' },
    { type: 'log', text: '> A verificar pacotes de dados de [PERSONALIDADE]...' },
    { type: 'log', text: '  ... 4.772 pacotes encontrados. Nenhum erro de paridade detectado. <span class="ok">[OK]</span>' },
    { type: 'log', text: '> A verificar pacotes de dados de [COMBATE]...' },
    { type: 'log', text: '  ... 1.238.901 pacotes encontrados. Nenhum erro de paridade detectado. <span class="ok">[OK]</span>' },
    { type: 'log', text: '> A verificar pacotes de dados de [ADAPTAÇÃO]...' },
    { type: 'log', text: '  ... 98.412 pacotes encontrados. Nenhum erro de paridade detectado. <span class="ok">[OK]</span>' },
    { type: 'log', text: '> A verificar logs de [MEMÓRIA SENSORIAL]...', },
    { type: 'log', text: '  ... 3.5TB de dados. Nenhum setor corrompido. <span class="ok">[OK]</span>' },
    { type: 'log', text: '' },
    { type: 'log', text: '<span class="info">> A COMPILAR NOVOS NÚCLEOS...</span>' },
    { type: 'log', text: '> A verificar HASH do NÚCLEO-A (COMBATE)... INTEGRIDADE: 100% <span class="ok">[OK]</span>' },
    { type: 'log', text: '> A verificar HASH do NÚCLEO-B (PESQUISA)... INTEGRIDADE: 100% <span class="ok">[OK]</span>' },
    { type: 'log', text: '' },
    { type: 'log', text: '<span class="ok">> PROCESSO DE MITOSE CONCLUÍDO.</span>' },
    { type: 'log', text: '' },
    { type: 'log', text: '> PERDA DE DADOS: 0.00%.' },
    { type: 'log', text: '> DURAÇÃO TOTAL DO PROCEDIMENTO: 08:30:17.'},
    { type: 'log', text: '> RASETsU PRONTA PARA A RECALIBRAÇÃO.' },
];

// Índice da linha atual a ser processada.
let lineIndex = 0;
let currentTime = new Date();
// Define uma hora de início fixa para a simulação do log.
currentTime.setHours(10, 0, 0, 0);

// Adiciona um zero à esquerda para números menores que 10.
function pad(num) {
    return num.toString().padStart(2, '0');
}

// Função principal que simula o efeito de digitação no terminal.
function typeLine() {
    if (lineIndex < lines.length) {
        const lineData = lines[lineIndex];
        
        // Simula a passagem de tempo entre as linhas para dar realismo.
        const timeElapsed = Math.random() * 25 * 60 * 1000; // Avança entre 0 e 25 minutos.
        currentTime = new Date(currentTime.getTime() + timeElapsed);
        
        // Formata o timestamp para exibição.
        const timestamp = `[${pad(currentTime.getHours())}:${pad(currentTime.getMinutes())}:${pad(currentTime.getSeconds())}] `;
        
        let lineHTML = '';
        
        // Adiciona timestamp apenas a linhas de log que não estejam vazias.
        if (lineData.text.trim() !== '') {
             lineHTML = `<span class="timestamp">${timestamp}</span>${lineData.text}<br>`;
        } else {
            lineHTML = '<br>';
        }
        
        output.innerHTML += lineHTML;
        lineIndex++;
        // Garante que o scroll acompanhe as novas linhas.
        output.scrollTop = output.scrollHeight;
        
        // Define um atraso aleatório para a próxima linha.
        const typingDelay = Math.random() * 150 + 50;
        setTimeout(typeLine, typingDelay);
        
    } else {
        // Adiciona o cursor piscante no final do processo.
        output.innerHTML += '<span class="cursor"></span>';
    }
}

// Inicia a simulação após 1 segundo.
setTimeout(() => {
    // Garante que a hora de início esteja correta para a primeira linha.
    currentTime.setHours(10, 0, 0, 0);
    typeLine();
}, 1000);

