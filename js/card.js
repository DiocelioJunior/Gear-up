var cardData = {
    "cards": [
      {
        "link": "pagina1.html",
        "title": "Primeiros Socorros",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt!"
      },
      {
        "link": "pagina2.html",
        "title": "Numeros de Emergencia",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt!"
      },
      {
        "link": "pagina3.html",
        "title": "Sugestões de Listas",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt!"
      }
    ]
  };

  var cardContainer = document.getElementById("card-container-info");

  cardData.cards.forEach(function(card) {
    var cardElement = document.createElement("a");
    cardElement.href = card.link;
    cardElement.className = "card";
    cardElement.innerHTML = `
      <h4>${card.title}</h4>
      <p>${card.content}</p>
    `;
    
    cardContainer.appendChild(cardElement);
  });