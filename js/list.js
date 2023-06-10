updateItemList();


//Função para adicionar os itens no localstorage

/* A função addItem() obtém os valores dos elementos de entrada no HTML, 
cria um objeto item com esses valores, recupera a lista de itens do localStorage, 
adiciona o novo item à lista, atualiza os itens armazenados no localStorage 
e limpa os campos de entrada do formulário. */

function addItem() {
  var name = document.getElementById('name').value;
  var validity = document.getElementById('validity').value;
  var amount = document.getElementById('amount').value;
  var unit = document.getElementById('unit').value;

  const item = { name,validity, amount,unit };
  const items = JSON.parse(localStorage.getItem('itens') || "[]");

  item.sequence = items.length + 1;

  items.push(item);

  localStorage.setItem("itens", JSON.stringify(items));

  document.getElementById('name').value = "";
  document.getElementById('validity').value = "";
  document.getElementById('amount').value = "";
  document.getElementById('unit').value = "";
  

  updateItemList();
}

/* Quando a página é completamente carregada, a função atribuída ao window.onload é executada. 
Nesse caso, ela define o estilo CSS do elemento itemList como "block" após um atraso de 5 segundos . */

window.onload = function () {
  const itemList = document.getElementById('table');

  setTimeout(function () {
    itemList.style.display = "block";
  }, 5000);
};

//Função para atualizar a lista de itens

/* A função updateItemList() obtém os itens armazenados no localStorage, limpa a tabela de exibição, 
itera sobre cada item e cria elementos HTML correspondentes para exibir os itens na tabela. 
Isso permite atualizar e exibir a lista de itens de forma dinâmica na página. */

function updateItemList() {
  const itens = JSON.parse(localStorage.getItem('itens') || "[]");
  const itemList = document.getElementById('table');

  itemList.innerHTML = "";

  itens.forEach(function (item) {
    const div = document.createElement('div');
    div.innerHTML = `
            <div class="item">
              <div>${item.name}</div>
                <div class="icons">
                    <span class="material-symbols-outlined" id="delete" onclick="removeItem(${item.sequence})">delete</span>
                    <span class="material-symbols-outlined" id="info" onclick="showInfo(${item.sequence})">info</span>
                </div>
            </div>
        `;
    div.classList.add("item-list");
    div.id = "item-list"
    itemList.appendChild(div);
  });
}

//Função para remover item

/* A função removeItem(sequence) remove o item correspondente 
à sequência fornecida do localStorage e atualiza a exibição da lista de itens. */

function removeItem(sequence) {
  const items = JSON.parse(localStorage.getItem('itens') || "[]");

  const updatedItems = items.filter(function (item) {
    return item.sequence !== sequence;
  });

  localStorage.setItem('itens', JSON.stringify(updatedItems));
  updateItemList();
}


//Função para exibir as informações de cada item 

/* A função showInfo(sequence) busca o item correspondente à sequência fornecida, 
cria um elemento card para exibir suas informações e o adiciona ao corpo da página. 
Isso permite exibir um cartão ou painel com os detalhes do item selecionado.*/

function showInfo(sequence) {
  const items = JSON.parse(localStorage.getItem('itens') || "[]");
  const item = items.find((item) => item.sequence === sequence);

  if (item) {
    const card = document.createElement('div');
    card.classList.add('card-item');

    const dataValidade = new Date(item.validity);
    const dia = String(dataValidade.getDate()).padStart(2, '0');
    const mes = String(dataValidade.getMonth() + 1).padStart(2, '0');
    const ano = dataValidade.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    card.innerHTML = `
        <h2>${item.name}</h2>
        <p>Validade: ${dataFormatada}</p>
        <p>Quantidade: ${item.amount}<span> ${item.unit}</span></p>
        <button onclick="closeCard()">Fechar</button>
      `;
    document.body.appendChild(card);
  }
}

/* A função closeCard() encontra o cartão aberto utilizando a 
classe CSS "card-item" e o remove do documento HTML, fechando-o. */

function closeCard() {
  const card = document.querySelector('.card-item');
  if (card) {
    card.remove();
  }
}






