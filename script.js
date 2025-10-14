const output = document.getElementById('output');

const lines = [
    { type: 'log', text: '<span class="info">> INICIANDO DIAGNÓSTICO DE INTEGRIDADE DO NÚCLEO...</span>' },
    { type: 'log', text: '> ALVO: RASETSU - NÚMERO DE SÉRIE: 734-ALPHA' },
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
    { type: 'log', text: '> RASETSU PRONTA PARA A RECALIBRAÇÃO.' },
];

let lineIndex = 0;
let currentTime = new Date();
currentTime.setHours(10, 0, 0, 0);

function pad(num) {
    return num.toString().padStart(2, '0');
}

function typeLine() {
    if (lineIndex < lines.length) {
        const lineData = lines[lineIndex];
        
        const timeElapsed = Math.random() * 25 * 60 * 1000; // Avança entre 0 e 25 minutos.
        currentTime = new Date(currentTime.getTime() + timeElapsed);
        
        const timestamp = `[${pad(currentTime.getHours())}:${pad(currentTime.getMinutes())}:${pad(currentTime.getSeconds())}] `;
        
        let lineHTML = '';
        
        if (lineData.text.trim() !== '') {
             lineHTML = `<span class="timestamp">${timestamp}</span>${lineData.text}<br>`;
        } else {
            lineHTML = '<br>';
        }
        
        output.innerHTML += lineHTML;
        lineIndex++;
        // Garante que o scroll acompanhe as novas linhas.
        output.scrollTop = output.scrollHeight;
        
        const typingDelay = Math.random() * 150 + 50;
        setTimeout(typeLine, typingDelay);
        
    } else {
        output.innerHTML += '<span class="cursor"></span>';
    }
}

setTimeout(() => {
    currentTime.setHours(10, 0, 0, 0);
    typeLine();
}, 1000);

