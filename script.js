document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector('.add-event-button');
    addButton.addEventListener('click', function() {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('info');
        eventDiv.style.backgroundColor = '#e74c3c';
        eventDiv.innerHTML = `
            <p>ID: 2</p>
            <p>Nome: Nova Tarefa</p>
            <p>Data: 2023-11-07</p>
            <p>Categoria: Trabalho</p>
            <p>Concluído: Não</p>
        `;
        document.querySelector('.event').appendChild(eventDiv);
    });
});
