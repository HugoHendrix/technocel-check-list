
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


// Função para salvar e copiar texto da passagem de turno
// Salva o texto no localStorage e copia para a área de transferência
function salvarTexto(idTextarea, storageKey) {
    const textarea = document.getElementById(idTextarea);
    if (textarea) {
        const texto = textarea.value;
        localStorage.setItem(storageKey, texto);
    }
}

function copiarTexto(idTextarea) {
    const textarea = document.getElementById(idTextarea);
    if (textarea) {
        navigator.clipboard.writeText(textarea.value);
    }
}

// Carregar texto salvo ao abrir a página
window.addEventListener('DOMContentLoaded', () => {
    const salvo = localStorage.getItem('passagem-turno');
    const passagemTurno = document.getElementById('passagem-turno');
    if (salvo && passagemTurno) passagemTurno.value = salvo;

    const anotacaoSalva = localStorage.getItem('anotacao');
    const anotacao = document.getElementById('anotacao');
    if (anotacaoSalva && anotacao) anotacao.value = anotacaoSalva;
});

const btnSalvarPassagem = document.getElementById('btn-salvar-passagem');
if (btnSalvarPassagem) btnSalvarPassagem.onclick = () => salvarTexto('passagem-turno', 'passagem-turno');
const btnCopiarPassagem = document.getElementById('btn-copiar-passagem');
if (btnCopiarPassagem) btnCopiarPassagem.onclick = () => copiarTexto('passagem-turno');

// Salvar e copiar anotacao
const btnSalvarAnotacao = document.getElementById('btn-salvar-anotacao');
if (btnSalvarAnotacao) btnSalvarAnotacao.onclick = () => salvarTexto('anotacao', 'anotacao');
const btnCopiarAnotacao = document.getElementById('btn-copiar-anotacao');
if (btnCopiarAnotacao) btnCopiarAnotacao.onclick = () => copiarTexto('anotacao');


const orientacoes = {
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
    ]
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