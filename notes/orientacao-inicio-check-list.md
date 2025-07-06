Este trecho de código HTML e JavaScript cria uma seção interativa para orientar o usuário sobre como iniciar o check list via WhatsApp, de acordo com o tipo de caminhão ou rastreador selecionado. O `<section>` contém um título, uma breve explicação, um rótulo e um menu suspenso (`<select>`) com várias opções de tipos de caminhão, cada uma representando um cenário diferente de operação.

Quando o usuário seleciona um tipo de caminhão no menu, um evento JavaScript é disparado. O código busca as instruções correspondentes em um objeto chamado `orientacoes`, que armazena listas de passos específicos para cada tipo de veículo. Essas instruções são exibidas dinamicamente em uma lista ordenada dentro da `<div id="orientacoes">`. Se nenhuma opção for selecionada, a lista de orientações é ocultada e o botão de copiar também desaparece.

O botão "Copiar orientações" aparece somente quando há orientações exibidas. Ao clicar nesse botão, o JavaScript copia o texto puro das instruções (sem tags HTML) para a área de transferência do usuário, facilitando o envio dessas informações pelo WhatsApp ou outro canal. Após a cópia, o texto do botão muda temporariamente para "Copiado!" como feedback visual, retornando depois para "Copiar orientações".

Esse conjunto de elementos e scripts torna o processo de consulta e compartilhamento das orientações muito mais prático e intuitivo para o usuário, além de garantir que as informações estejam sempre atualizadas conforme a seleção feita.

### HTML:

```HTML

<section>
        <h2>Orientações para Início do Check List</h2>
        <p>Orientações para iniciar o Check List via WhatsApp, conforme o tipo do veículo ou rastreador. </p>
        <label for="tipo-caminhao">Selecione o tipo de caminhão:</label>
        <select id="tipo-caminhao">
            <option value="">-- Escolha --</option>
            <option value="caminhao1">Caminhão Container [Dalastra/Satel]</option>
            <option value="caminhao2">Caminhão Truck [Barra Mansa]</option>
            <option value="caminhao3">Caminhão Carreta com baú</option>
            <option value="omnilink1">Caminhão Omnilink Container ou carreta</option>
            <option value="omnilink2">Caminhão Omnilink Truck</option>
            <option value="omnilink3">Caminhão Omnilink Carreta com baú</option>
        </select>
        <br>
        <button id="copiar-orientacoes" style="margin-left:10px; display:none;">Copiar orientações</button>

        <div id="orientacoes" style="margin-top:20px;"></div>
    </section>

```
### Javascript:

```js
const orientacoes = {
  caminhao1: [
    "*Início viagem carregado ou de check list*.",
    "- Enviar mensagem escrito *teste* no teclado do rastreador.",
    "- Pressionar o botão de pânico.",
    "- Abrir as portas.",
    "- Retirar a tomada do desengate.",
    "- *Quando terminar, por favor me avise.*",
  ],
  caminhao2: [
    "*Início viagem carregado ou de check list*.",
    "- Enviar mensagem escrito *teste* no teclado do rastreador.",
    "- Pressionar o botão de pânico.",
    "- Abrir as portas.",
    "- Abrir baú.",
    "- *Quando terminar, por favor me avise.*",
  ],
  caminhao3: [
    "*Início viagem carregado ou de check list*.",
    "- Enviar mensagem escrito *teste* no teclado do rastreador.",
    "- Pressionar o botão de pânico.",
    "- Abrir as portas.",
    "- Abrir baú.",
    "- Aguardar confirmação de alerta de baú aberto e fechar o baú.",
    "- Retirar a tomada do desengate.",
    "- *Quando terminar, por favor me avise.*",
  ],
  omnilink1: [
    "Coloca o menu saída.",
    "Coloca veículo trânsito.",
    "Enviar mensagem escrito *teste* no teclado do rastreador.",
    "Aperta o botão de pânico.",
    "Abrir portas.",
    "Retirar a tomada do desengate, por favor.",
    "*Quando terminar, por favor me avise.*",
  ],
  omnilink2: [
    "Coloca o menu saída.",
    "Coloca veículo trânsito.",
    "Enviar mensagem escrito *teste* no teclado do rastreador.",
    "Aperta o botão de pânico.",
    "Abrir portas.",
    "Abrir baú, por favor.",
    "*Quando terminar, por favor me avise.*",
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
    "*Quando terminar, por favor me avise*.",
  ],
};

const select = document.getElementById("tipo-caminhao");
const div = document.getElementById("orientacoes");
const btnCopiar = document.getElementById("copiar-orientacoes");

select.addEventListener("change", function () {
  const tipo = this.value;
  if (orientacoes[tipo]) {
    div.innerHTML = `<ol>${orientacoes[tipo]
      .map((item) => `<li>${item}</li>`)
      .join("")}</ol>`;
    btnCopiar.style.display = "inline-block";
  } else {
    div.innerHTML = "";
    btnCopiar.style.display = "none";
  }
});

btnCopiar.addEventListener("click", function () {
  const tipo = select.value;
  if (orientacoes[tipo]) {
    // Remove tags HTML para copiar texto puro
    const temp = document.createElement("div");
    temp.innerHTML = orientacoes[tipo]
      .map((item) => `<li>${item}</li>`)
      .join("");
    const texto = Array.from(temp.querySelectorAll("li"))
      .map((li) => li.textContent)
      .join("\n");
    navigator.clipboard.writeText(texto).then(() => {
      btnCopiar.textContent = "Copiado!";
      setTimeout(() => (btnCopiar.textContent = "Copiar orientações"), 1500);
    });
  }
});
```
