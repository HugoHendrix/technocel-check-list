
// Função boas vindas
// Exibe a saudação, data e hora atual
function boasVindas() {
    const elementoBoasVindas = document.getElementById('container-boas-vindas');
    const elementoData = document.getElementById('data-atual');
    const elementoHorario = document.getElementById('horario');
    const elementoSaudacao = document.getElementById('saudacao');

    const elementoHoraAtual = new Date();
    const hora = elementoHoraAtual.getHours();

    let saudacao = '';
    if (hora >= 5 && hora < 12) {
        saudacao = '☀ Bom Dia!';
    } else if (hora >= 12 && hora < 18) {
        saudacao = '🌤 Boa Tarde!';
    } else if (hora >= 18 && hora < 24) {
        saudacao = '🌙 Boa Noite!';
    } else {
        saudacao = '🌙Boa Madrugada!';
    }

    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataAtual = elementoHoraAtual.toLocaleDateString('pt-BR', opcoes);
    const horarioAtual = elementoHoraAtual.toLocaleTimeString();
    elementoData.textContent = `📅 Hoje é ${dataAtual}`;
    elementoHorario.textContent = `⏰ Agora são: ${horarioAtual}`;
    elementoSaudacao.textContent = saudacao;

    elementoBoasVindas.style.display = 'block';
}

boasVindas();
setInterval(boasVindas, 1000);


// Função para copiar o CNPJ ao clicar
document.addEventListener('DOMContentLoaded', function () {
    const cnpjSpan = document.getElementById('cnpj');
    if (cnpjSpan) {
        cnpjSpan.addEventListener('click', function () {
            navigator.clipboard.writeText(cnpjSpan.textContent.trim());
            cnpjSpan.title = "Copiado!";
            setTimeout(() => cnpjSpan.title = "Clique para copiar", 1000);
        });
    }
});


// Função para salvar e copiar texto
function salvarTexto(idTextarea, storageKey) {
    const textarea = document.getElementById(idTextarea);
    if (textarea) {
        const texto = textarea.value;
        localStorage.setItem(storageKey, texto);
        console.log(`[SALVAR] Texto salvo para ${storageKey}:`, texto); // Para depuração

    } else {
        console.error(`[ERRO SALVAR] Textarea com ID '${idTextarea}' não encontrada.`);
    }
}

function copiarTexto(idTextarea) {
    const textarea = document.getElementById(idTextarea);
    if (textarea) {
        navigator.clipboard.writeText(textarea.value)
            .then(() => {
                console.log('[COPIAR] Texto copiado com sucesso!'); // Para depuração

            })
            .catch(err => {
                console.error('[ERRO COPIAR] Erro ao copiar texto:', err);
                alert('Falha ao copiar. Seu navegador pode não suportar ou permissão negada.'); // Feedback visual
            });
    } else {
        console.error(`[ERRO COPIAR] Textarea com ID '${idTextarea}' não encontrada para copiar.`);
    }
}

// Carregar texto salvo ao abrir a página
window.addEventListener('DOMContentLoaded', () => {
    // Carregar Passagem de Turno
    const salvoPassagem = localStorage.getItem('passagem-turno-data'); // Nova chave de storage
    const passagemTurnoTextarea = document.getElementById('passagem-turno-textarea');
    if (salvoPassagem && passagemTurnoTextarea) {
        passagemTurnoTextarea.value = salvoPassagem;
        console.log('Passagem de Turno carregada do localStorage.');
    }

    // Carregar Anotações
    const anotacaoSalva = localStorage.getItem('anotacao-data'); // Nova chave de storage
    const anotacaoTextarea = document.getElementById('anotacao-textarea');
    if (anotacaoSalva && anotacaoTextarea) {
        anotacaoTextarea.value = anotacaoSalva;
        console.log('Anotação carregada do localStorage.');
    }
});

// Anexar event listeners para a seção "Passagem de Turno"
const btnSalvarPassagem = document.getElementById('btn-salvar-passagem');
if (btnSalvarPassagem) {
    btnSalvarPassagem.addEventListener('click', () => {
        salvarTexto('passagem-turno-textarea', 'passagem-turno-data');
    });
}

const btnCopiarPassagem = document.getElementById('btn-copiar-passagem');
if (btnCopiarPassagem) {
    btnCopiarPassagem.addEventListener('click', () => {
        copiarTexto('passagem-turno-textarea');
    });
}

//Orientação do check list

const orientacoes = {
    horizonte: [
        "*Por favor enviar inicio check list - código 12*.",        
        "- Pressionar o botão de pânico.",
        "- Abrir as portas.",        
        "*Quando terminar, por favor me avise.*"

    ],
    caminhao1: [
        "*Início viagem carregado ou de check list*.",
        "- Enviar mensagem escrito *teste* no teclado do rastreador.",
        "- Pressionar o botão de pânico.",
        "- Abrir as portas.",
        "- Retirar a tomada do desengate.",
        "- *Quando terminar, por favor me avise.*"
    ],
    caminhao2: [
        "*Início viagem carregado ou de check list*.",
        "- Enviar mensagem escrito *teste* no teclado do rastreador.",
        "- Pressionar o botão de pânico.",
        "- Abrir as portas.",
        "- Abrir baú.",
        "- *Quando terminar, por favor me avise.*"
    ],
    caminhao3: [
        "*Início viagem carregado ou de check list*.",
        "- Enviar mensagem escrito *teste* no teclado do rastreador.",
        "- Pressionar o botão de pânico.",
        "- Abrir as portas.",
        "- Abrir baú.",
        "- Aguardar confirmação de alerta de baú aberto e fechar o baú.",
        "- Retirar a tomada do desengate.",
        "- *Quando terminar, por favor me avise.*"
    ],
    omnilink1: [
        "Coloca o menu saída.",
        "Coloca veículo trânsito.",
        "Enviar mensagem escrito *teste* no teclado do rastreador.",
        "Aperta o botão de pânico.",
        "Abrir portas.",
        "Retirar a tomada do desengate, por favor.",
        "*Quando terminar, por favor me avise.*"
    ],
    omnilink2: [
        "Coloca o menu saída.",
        "Coloca veículo trânsito.",
        "Enviar mensagem escrito *teste* no teclado do rastreador.",
        "Aperta o botão de pânico.",
        "Abrir portas.",
        "Abrir baú, por favor.",
        "*Quando terminar, por favor me avise.*"
    ],
    omnilink3: [
        "Coloca o menu saída.",
        "Coloca veículo trânsito.",
        "Enviar mensagem escrito *teste* no teclado do rastreador.",
        "Aperta o botão de pânico.",
        "Abrir portas.",
        "Abrir baú, por favor.",
        "Aguardar confirmação de alerta de baú aberto e fechar o baú.",
        "Retirar a tomada do desengate.",
        "*Quando terminar, por favor me avise*."
    ],

};

document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('tipo-caminhao');
    const divOrientacoes = document.getElementById('orientacoes'); // Renamed for clarity
    const btnCopiar = document.getElementById('copiar-orientacoes');

    // Function to update displayed instructions
    function updateInstructions() {
        const tipo = select.value;
        if (orientacoes[tipo]) {
            divOrientacoes.innerHTML = `<ol>${orientacoes[tipo].map(item => `<li>${item}</li>`).join('')}</ol>`;
            btnCopiar.style.display = 'inline-block';
        } else {
            divOrientacoes.innerHTML = '';
            btnCopiar.style.display = 'none';
        }
    }

    // Call updateInstructions on initial page load in case a default option is selected
    // and when the select value changes
    select.addEventListener('change', updateInstructions);
    updateInstructions(); // Call once on load

    btnCopiar.addEventListener('click', function () {
        const tipo = select.value;
        if (orientacoes[tipo]) {
            // Remove tags HTML for plain text copy
            // The original approach of creating a temp div and querying li elements is robust
            const tempDiv = document.createElement('div'); // Renamed for clarity
            tempDiv.innerHTML = orientacoes[tipo].map(item => `<li>${item}</li>`).join('');
            const texto = Array.from(tempDiv.querySelectorAll('li')).map(li => li.textContent).join('\n');

            navigator.clipboard.writeText(texto).then(() => {
                btnCopiar.textContent = 'Copiado!';
                setTimeout(() => btnCopiar.textContent = 'Copiar orientações', 1500);
            }).catch(err => {
                console.error('Erro ao copiar texto: ', err);
                alert('Falha ao copiar as orientações. Por favor, tente novamente.');
            });
        }
    });
});

//Ocorrências Check list
const textoBase = `Informamos que a Technocel não conseguiu realizar o checklist da placa em questão pelo motivo abaixo.

É crucial que o condutor nos contate o mais breve possível para a realização dos testes. Sem um checklist válido, a reguladora de sinistros pode negar o pagamento da carga por não conformidade.

Atenção: Solicitações de checklist que não são concluídas em 48 horas são canceladas automaticamente, exigindo um novo pedido após esse prazo.
`;

const motivos = {
    "CONDUTOR_VISUALIZA": "Condutor visualiza as mensagens mas não responde à central.",
    "SEM_CONTATO": "Precisamos do contato do motorista responsável pelo acompanhamento do checklist.",
    "SEM_ESPELHAMENTO": "SEM ESPELHAMENTO: Prezados, verificamos que o veículo em questão ainda não possui espelhamento configurado. Solicitamos, por gentileza, que o espelhamento seja realizado já com a opção de Inteligência Embarcada (I.E.) liberada, a fim de viabilizar as configurações necessárias para o pleno funcionamento das configurações. Agradecemos desde já pela atenção e aguardamos o retorno.",
    "SEM_IE": "O ESPELHAMENTO ATUAL NÃO POSSUI I.E: Prezados, Verificamos que o espelhamento atual não apresenta a opção de inteligência liberada. Seria possível verificar essa questão e refazer o espelhamento com a referida opção ativada. Dessa forma, conseguiremos realizar as configurações necessárias para o correto funcionamento das configurações."
};

document.getElementById('ocorrencia-select').addEventListener('change', function () {
    const motivo = this.value;
    let texto = '';
    if (motivo && motivos[motivo]) {
        texto = textoBase + "\nMOTIVO: " + motivos[motivo];
    }
    document.getElementById('ocorrencia-texto').value = texto;
});

// Orientações TB Cargo
document.getElementById('copiar-tb-cargo').onclick = function () {
    const texto = `✅ Conferir a Rota:

Conferir a rota no link que será enviado pela equipe TB CARGO.

Caso haja necessidade de ajuste, informar previamente.

📍 Macros de Viagem:

Ao iniciar viagem, enviar macro de INICIO DE VIAGEM CARREGADO (macro 3).

Informar todas as paradas e reinícios de viagem.

Ao chegar no cliente, enviar a macro CHEGADA NO CLIENTE (macro 7).

Ao terminar, enviar a macro de FIM DE VIAGEM (macro 11).

🚨 Situação de Risco:

Quando questionado se a viagem segue normal, a resposta para indicar que está tudo bem é TB CARGO.

Qualquer outra resposta será considerada situação de risco.

📞 Suporte 24h Technocel:

Qualquer dúvida ou necessidade durante a viagem, acionar nossa central 24 horas Technocel via:

WhatsApp: https://wa.me/551733347850

Telefone: +55 17 3334-7850`;
    navigator.clipboard.writeText(texto);
};