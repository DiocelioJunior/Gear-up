// Declare variáveis para elementos
var time = 000;
var gifElement = document.getElementById("gif");
var homePage = document.getElementById("home");
var btnAdd = document.getElementById('add-btn');
var cardNewItens = document.getElementById('card-new-item');
var btnClose = document.getElementById('btn-close');

// Defina funções

/* O setTimeout() é usado nesse trecho de código para aguardar um tempo determinado e, 
em seguida, ocultar o elemento gifElement, definindo seu estilo display como "none". 
Isso permite exibir o GIF por um período específico antes de ocultá-lo. */

setTimeout(function () {
    gifElement.style.display = "none";
}, time);

/*A função checkNameAdded() verifica se um nome foi adicionado ao localStorage, 
retornando true se um nome for encontrado e false se nenhum nome for encontrado. 
Isso permite verificar se um nome específico foi previamente armazenado no localStorage. */

function checkNameAdded() {
    var nome = localStorage.getItem("nome");

    if (nome) {
        return true;
    }
    return false;
}

/*A função home() modifica a propriedade display do elemento homePage para o 
valor "block"*/

function home() {
    homePage.style.display = "block";
}

/*A função saveName() obtém o nome digitado pelo usuário, o salva no localStorage, 
oculta um elemento card, exibe um alerta caso o nome seja inválido, limpa o valor 
do campo de entrada de texto e, em seguida, executa a função home(). */

function saveName() {
    var name = document.getElementById("name-input").value;

    if (name) {
        localStorage.setItem("name", name);
    } else {
        alert("Por favor, insira o nome!");
        return;
    }

    name = "";
    hideCard();
    location.reload();
    home();
}

setTimeout(card, time);

/* A função hideCard() oculta o elemento com o ID "card-container" definindo 
sua propriedade display como "none". Isso torna o elemento invisível na página */

function hideCard() {
    var card = document.getElementById("card-container")
    card.style.display = "none";
}

/* A função card() verifica se existe um nome salvo no armazenamento local. 
Se existir, oculta um cartão específico, exibe a página inicial, mostra o nome salvo e torna um botão visível. 
Se não houver um nome salvo, exibe o cartão. */

function card() {
    var card = document.getElementById("card-container")
    var savedName = localStorage.getItem("name");

    if (savedName) {
        hideCard();
        home();
        showName(savedName);
        btnAdd.style.display = "block"
    } else {
        card.style.display = "block";
    }
}

/* A função showName(name) localiza o elemento com o ID "user-name" e define seu conteúdo de texto como o 
valor fornecido no parâmetro name. Isso resulta em exibir o nome especificado no elemento correspondente na página. */

function showName(name) {
    var userName = document.getElementById("user-name")
    userName.textContent = name;
}


/* Quando o botão com o ID "btnAdd" é clicado, essa função é acionada e 
realiza as seguintes ações: exibe um novo conjunto de itens relacionados 
ao cartão, alterna a visibilidade do elemento da página inicial e oculta o 
próprio botão "btnAdd". */

btnAdd.addEventListener("click",function(){
    cardNewItens.style.display ="block";
    homePage.classList.toggle('hide');
    btnAdd.style.display ="none";
});

/* Quando o botão com o ID "btnClose" é clicado, essa função é acionada e 
realiza as seguintes ações: oculta o conjunto de itens relacionados ao cartão, 
exibe novamente o elemento da página inicial e torna o botão "btnAdd" visível 
novamente. */

btnClose.addEventListener("click",function(){
    cardNewItens.style.display ="none";
    homePage.classList.remove('hide');
    btnAdd.style.display ="block";
});
