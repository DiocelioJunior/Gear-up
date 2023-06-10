// Função que verifica as datas de validade dos itens e cria notificações
function checkValidityDates() {
  // Recupera os itens do armazenamento local ou usa um array vazio se não houver
  const items = JSON.parse(localStorage.getItem('itens') || "[]");
  const alertItem = document.getElementById('alert-icon');

  // Cria uma variável para a data atual
  const currentDate = new Date();

  // Cria arrays vazios para armazenar os itens próximos e vencidos da validade
  const itemsNearExpiration = [];
  const itemsExpired = [];

  // Percorre o array de itens usando o método forEach
  items.forEach(item => {
    // Cria variáveis constantes para o item atual, a data de validade e o nome do item
    const validityDate = new Date(item.validity);
    const nameItem = item.name;

    // Calcula a diferença em tempo e em dias entre a data de validade e a data atual
    const differenceInTime = Math.abs(validityDate.getTime() - currentDate.getTime());
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    // Se a diferença em dias for menor ou igual a 7, cria uma notificação com o nome e a data de validade do item
    if (differenceInDays <= 7) {
      const notification = new Notification('Alguns itens estão próximos da data de vencimento! 😥', {
        body: `O item ${nameItem} está próximo do fim da validade!`
      });

      alertItem.style.display = 'block';
    }
    // Se a data de validade for menor que a data atual, cria uma notificação com o nome e a data de validade do item
    else if (validityDate < currentDate) {
      const notification = new Notification('Alguns itens estão vencidos 😥', {
        body: `O item ${nameItem} está vencido!`
      });
    }
  });
}

// Verifica se o navegador suporta notificações
if ('Notification' in window) {
  // Usa um operador ternário para simplificar a verificação da permissão de notificação
  Notification.permission === 'granted' ? console.log('Permissão concedida') : Notification.requestPermission().then(function (permission) {
    // Se a permissão for concedida, imprime uma mensagem no console
    if (permission === 'granted') {
      console.log('Permissão concedida');
    }
  });
}

checkValidityDates();

