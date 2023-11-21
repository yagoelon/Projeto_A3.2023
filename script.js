document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');

    const elemData = document.getElementById("data1")
    console.log("elem",elemData);
    elemData.onchange = function() {
        console.log("mudou");
        console.log('elemData.value',elemData.value);
        const dataComBarra = elemData.value.replaceAll("-","/")
        const newDate = new Date(dataComBarra)
        console.log('newDate',newDate);
    }

    days.forEach(day => {
        
/*
        day.addEventListener('click', function() {
            console.log("clicou");
            const dateInput = day.querySelector('input[type="date"]');
            const currentDate = new Date(dateInput.value);
            const newDate = new Date(currentDate);
            newDate.setDate(newDate.getDate() + 6);
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
        */
    });
});
