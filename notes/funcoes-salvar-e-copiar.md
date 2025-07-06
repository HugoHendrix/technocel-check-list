Esta seção do código HTML, intitulada "Passagem de Turno", permite que o usuário registre e gerencie check lists pendentes de forma prática. O campo `<textarea>` serve para digitar as pendências do turno, enquanto os botões "Salvar texto" e "Copiar texto" facilitam o armazenamento e o compartilhamento dessas informações.

O funcionamento é garantido por duas funções JavaScript reutilizáveis: `salvarTexto` e `copiarTexto`. A função `salvarTexto` recebe como parâmetros o ID do `<textarea>` e a chave de armazenamento, salvando o conteúdo digitado no `localStorage` do navegador. Isso permite que o texto permaneça disponível mesmo após fechar ou recarregar a página. Já a função `copiarTexto` também recebe o ID do `<textarea>`, seleciona o texto e o copia para a área de transferência do usuário, facilitando o envio das informações por outros meios, como WhatsApp ou e-mail.

Essas funções são reutilizáveis porque aceitam como argumento o ID de qualquer `<textarea>` da página, podendo ser aplicadas em outros campos de texto semelhantes, bastando passar o ID correspondente ao chamar a função. Por exemplo, para salvar ou copiar o conteúdo de outro `<textarea>` com ID "observacoes", basta chamar `salvarTexto('observacoes', 'observacoes')` ou `copiarTexto('observacoes')`. Isso torna o código mais flexível e fácil de manter, permitindo a expansão da funcionalidade para outros contextos do sistema.

### HTML:

```HTML
<section class="flash default">
      <h2>📣Passagem de Turno</h2>
      <label for="passagem-turno">Informe aqui os check lists pendentes</label>
      <textarea name="passagem-turno" id="passagem-turno" cols="100" rows="10" placeholder="Exemplo: Caminhão Truck aguardando documentação, rastreador Omnilink pendente de atualização, etc."></textarea>
      <br>
      <button class="accent" id="btn-salvar-passagem">Salvar texto</button>
      <button class="success" id="btn-copiar-passagem">Copiar texto</button>
  </section>

```

### JAVASCRIPT:

```JS
    function salvarTexto(idTextarea, storageKey) {
        const texto = document.getElementById(idTextarea).value;
        localStorage.setItem(storageKey, texto);
        alert('Texto salvo!');
    }

    function copiarTexto(idTextarea) {
        const textarea = document.getElementById(idTextarea);
        textarea.select();
        document.execCommand('copy');
        alert('Texto copiado!');
    }

    // Carregar texto salvo ao abrir a página
    window.addEventListener('DOMContentLoaded', () => {
        const salvo = localStorage.getItem('passagem-turno');
        if (salvo) document.getElementById('passagem-turno').value = salvo;
    });

    document.getElementById('btn-salvar-passagem').onclick = () => salvarTexto('passagem-turno', 'passagem-turno');
    document.getElementById('btn-copiar-passagem').onclick = () => copiarTexto('passagem-turno');
```

## Exemplo de uso:

Como utilizar as funções `salvarTexto` e `copiarTexto` na prática em diferentes situações:

Suponha que você tenha outro campo de texto na sua página, por exemplo, para observações gerais:

```html
<textarea id="observacoes" placeholder="Digite suas observações aqui"></textarea>
<button onclick="salvarTexto('observacoes', 'observacoes')">Salvar Observações</button>
<button onclick="copiarTexto('observacoes')">Copiar Observações</button>
```

Neste exemplo, ao clicar no botão "Salvar Observações", o conteúdo do `<textarea id="observacoes">` será salvo no localStorage com a chave "observacoes". Ao clicar em "Copiar Observações", o texto será copiado para a área de transferência.

Você pode reutilizar essas funções para qualquer outro `<textarea>` da sua página, bastando passar o ID correto como argumento. Isso facilita a manutenção e a expansão do sistema, pois não é necessário criar novas funções para cada campo de texto.

Outro exemplo prático seria salvar e copiar um campo chamado "comentarios":

```html
<textarea id="comentarios"></textarea>
<button onclick="salvarTexto('comentarios', 'comentarios')">Salvar Comentários</button>
<button onclick="copiarTexto('comentarios')">Copiar Comentários</button>
```

Dessa forma, sempre que precisar adicionar um novo campo de texto com funcionalidade de salvar e copiar, basta seguir esse padrão, tornando o código mais organizado e reutilizável.