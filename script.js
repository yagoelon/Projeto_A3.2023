/*
document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');

    const elemData = document.getElementById('data1');
    console.log("elemData",elemData);
    elemData.onchange = function() {
        //console.log("mudou");
        //console.log('elemData.value',elemData.value);
        const dataComBarra = elemData.value.replaceAll("-","/")
        const newDate = new Date(dataComBarra)
        //console.log('newDate',newDate);
        // Atualizar o texto do h2 com base na nova data
        const dayOfWeek = newDate.getDay();
        const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const selectedDay = dayNames[dayOfWeek];
        //console.log('selectDay', selectedDay);
        const h2Element = document.querySelector('h2');
        //console.log('h2Element', h2Element);

        // Atualizar o texto do h2
        h2Element.textContent = selectedDay;
    }

     days.forEach(day => {
        

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
        
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    // Função para atualizar o texto do h2 com base na data selecionada
    function updateDayOfWeek(inputElement) {
        const dataComBarra = inputElement.value.replaceAll("-", "/");
        const newDate = new Date(dataComBarra);
        const dayOfWeek = newDate.getDay();
        const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const selectedDay = dayNames[dayOfWeek];

        // Atualizar o texto do h2
        const h2Element = document.querySelector('h2');
        h2Element.textContent = selectedDay;
    }

    // Obter todos os elementos de entrada de data
    const dateInputs = document.querySelectorAll('.date-input');

    // Adicionar um evento onchange para cada elemento de entrada de data
    dateInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            updateDayOfWeek(input);
        });
    });
 

    function alterarCor() {
        var corEscolhida = document.getElementById("cor").value;
        document.getElementById("if").style.backgroundColor = corEscolhida;
        var corEscolhida2 = document.getElementById("cor").value;
        document.getElementById("if2").style.backgroundColor = corEscolhida2;
      }
  
      // Adiciona um ouvinte de evento para detectar mudanças no seletor de cores
      document.getElementById("cor").addEventListener("input", alterarCor);
      document.getElementById("cor2").addEventListener("input", alterarCor);
      

      
});

