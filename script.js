document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');

    days.forEach(day => {
        day.addEventListener('click', function() {
            const dateInput = day.querySelector('input[type="date"]');
            const currentDate = new Date(dateInput.value);
            const newDate = new Date(currentDate);
            newDate.setDate(newDate.getDate() + 7);
            const formattedDate = newDate.toISOString().substr(0, 10);
            dateInput.value = formattedDate;

            // Atualizar o texto do h2 com base na nova data
            const dayOfWeek = newDate.getDay();
            const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
            const selectedDay = dayNames[dayOfWeek];
            const h2Element = day.querySelector('h2');

            // Atualizar o texto do h2
            h2Element.textContent = selectedDay;
        });
    });
});
