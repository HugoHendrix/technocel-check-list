function boasVindas() {
    const elementoBoasVindas = document.getElementById('container-boas-vindas');
    const elementoData = document.getElementById('data-atual');  
    const elementoHorario = document.getElementById('horario');
    const elementoSaudacao = document.getElementById('saudacao');

    const elementoHoraAtual = new Date();
    const hora = elementoHoraAtual.getHours();

    let saudacao = '';
    if (hora >= 5 && hora < 12) {
        saudacao = 'Bom dia';
    } else if (hora >= 12 && hora < 18) {
        saudacao = 'Boa tarde';
    } else if (hora >= 18 && hora < 24) {
        saudacao = 'Boa noite';
    } else {
        saudacao = 'Boa madrugada';
    }

    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataAtual = elementoHoraAtual.toLocaleDateString('pt-BR', opcoes);
    const horarioAtual = elementoHoraAtual.toLocaleTimeString();
    elementoData.textContent = `Hoje é ${dataAtual}`;
    elementoHorario.textContent = `Agora são ${horarioAtual}`;
    elementoSaudacao.textContent = saudacao;
    
    elementoBoasVindas.style.display = 'block';
}

boasVindas();
setInterval(boasVindas, 1000); 