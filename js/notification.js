addNotification();

function addNotification() {
    const notification = document.getElementById('item-notification');
    if (!notification) {
        return;
    }

    const itens = JSON.parse(localStorage.getItem('itens') || "[]");
    const currentDate = new Date();

    itens.forEach(function (item) {
        const validityDate = new Date(item.validity);
        const nameItem = item.name;

        const differenceInTime = Math.abs(validityDate.getTime() - currentDate.getTime());
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

        if (differenceInDays <= 7) {
            notification.innerHTML += `
                <div class="notification">
                    <p>O Item <span>${nameItem}</span> está proximo ao fim da validade! 😢<p>
                </div>`;
        } else if (validityDate < currentDate) {
            notification.innerHTML += `
                <div class="notification">
                    <p>O Item <span>${nameItem}</span> está vencido! 😰<p>
                </div>`;
        }
    });
}
