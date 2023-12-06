document.addEventListener('DOMContentLoaded', function () {
    // Função para atualizar o texto do h2 com base na data selecionada
    function updateDayOfWeek(inputElement) {
        const dataComBarra = inputElement.value.replaceAll("-", "/");
        const newDate = new Date(dataComBarra);
        const dayOfWeek = newDate.getDay();
        const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const selectedDay = dayNames[dayOfWeek];

        // Atualizar o texto do h2 do card 1
        const h2Element = document.querySelector('#card1');
        h2Element.textContent = selectedDay;
    }

    // Obter todos os elementos de entrada de data
    const dateInputs1 = document.querySelectorAll('.date-input1');

    // Adicionar um evento onchange para cada elemento de entrada de data
    dateInputs1.forEach(function (input) {
        input.addEventListener('change', function () {
            updateDayOfWeek(input);
        });
    });

    function updateDayOfWeek2(inputElement) {
        const dataComBarra = inputElement.value.replaceAll("-", "/");
        const newDate = new Date(dataComBarra);
        const dayOfWeek = newDate.getDay();
        const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const selectedDay = dayNames[dayOfWeek];

        // Atualizar o texto do h2 do card 2
        const h2Element = document.querySelector('#card2');
        h2Element.textContent = selectedDay;
    }
    const dateInputs2 = document.querySelectorAll('.date-input2');

    // Adicionar um evento onchange para cada elemento de entrada de data
    dateInputs2.forEach(function (input) {
        input.addEventListener('change', function () {
            updateDayOfWeek2(input);
        });
    });

    function updateDayOfWeek3(inputElement) {
        const dataComBarra = inputElement.value.replaceAll("-", "/");
        const newDate = new Date(dataComBarra);
        const dayOfWeek = newDate.getDay();
        const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const selectedDay = dayNames[dayOfWeek];

        // Atualizar o texto do h2 do card 3
        const h2Element = document.querySelector('#card3');
        h2Element.textContent = selectedDay;
    }
    const dateInputs3 = document.querySelectorAll('.date-input3');

    // Adicionar um evento onchange para cada elemento de entrada de data
    dateInputs3.forEach(function (input) {
        input.addEventListener('change', function () {
            updateDayOfWeek3(input);
        });
    });

    function updateDayOfWeek4(inputElement) {
        const dataComBarra = inputElement.value.replaceAll("-", "/");
        const newDate = new Date(dataComBarra);
        const dayOfWeek = newDate.getDay();
        const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const selectedDay = dayNames[dayOfWeek];

        // Atualizar o texto do h2 do card 4
        const h2Element = document.querySelector('#card4');
        h2Element.textContent = selectedDay;
    }
    const dateInputs4 = document.querySelectorAll('.date-input4');

    // Adicionar um evento onchange para cada elemento de entrada de data
    dateInputs4.forEach(function (input) {
        input.addEventListener('change', function () {
            updateDayOfWeek4(input);
        });
    });

    function updateDayOfWeek5(inputElement) {
        const dataComBarra = inputElement.value.replaceAll("-", "/");
        const newDate = new Date(dataComBarra);
        const dayOfWeek = newDate.getDay();
        const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const selectedDay = dayNames[dayOfWeek];

        // Atualizar o texto do h2 do card 5
        const h2Element = document.querySelector('#card5');
        h2Element.textContent = selectedDay;
    }
    const dateInputs5 = document.querySelectorAll('.date-input5');

    // Adicionar um evento onchange para cada elemento de entrada de data
    dateInputs5.forEach(function (input) {
        input.addEventListener('change', function () {
            updateDayOfWeek5(input);
        });
    });

    function updateDayOfWeek6(inputElement) {
        const dataComBarra = inputElement.value.replaceAll("-", "/");
        const newDate = new Date(dataComBarra);
        const dayOfWeek = newDate.getDay();
        const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const selectedDay = dayNames[dayOfWeek];

        // Atualizar o texto do h2 do card 6
        const h2Element = document.querySelector('#card6');
        h2Element.textContent = selectedDay;
    }
    const dateInputs6 = document.querySelectorAll('.date-input6');

    // Adicionar um evento onchange para cada elemento de entrada de data
    dateInputs6.forEach(function (input) {
        input.addEventListener('change', function () {
            updateDayOfWeek6(input);
        });
    });

    function updateDayOfWeek7(inputElement) {
        const dataComBarra = inputElement.value.replaceAll("-", "/");
        const newDate = new Date(dataComBarra);
        const dayOfWeek = newDate.getDay();
        const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const selectedDay = dayNames[dayOfWeek];

        // Atualizar o texto do h2 do card 7
        const h2Element = document.querySelector('#card7');
        h2Element.textContent = selectedDay;
    }
    const dateInputs7 = document.querySelectorAll('.date-input7');

    // Adicionar um evento onchange para cada elemento de entrada de data
    dateInputs7.forEach(function (input) {
        input.addEventListener('change', function () {
            updateDayOfWeek7(input);
        });
    });

    function alterarCor() {
        var corEscolhida = document.getElementById("cor1").value;
        document.getElementById("if1").style.backgroundColor = corEscolhida;
        var corEscolhida = document.getElementById("cor2").value;
        document.getElementById("if2").style.backgroundColor = corEscolhida;
        var corEscolhida = document.getElementById("cor3").value;
        document.getElementById("if3").style.backgroundColor = corEscolhida;
        var corEscolhida = document.getElementById("cor4").value;
        document.getElementById("if4").style.backgroundColor = corEscolhida;
        var corEscolhida = document.getElementById("cor5").value;
        document.getElementById("if5").style.backgroundColor = corEscolhida;
        var corEscolhida = document.getElementById("cor6").value;
        document.getElementById("if6").style.backgroundColor = corEscolhida;
        var corEscolhida = document.getElementById("cor7").value;
        document.getElementById("if7").style.backgroundColor = corEscolhida;

    }

    // Adiciona um ouvinte de evento para detectar mudanças no seletor de cores
    document.getElementById("cor1").addEventListener("input", alterarCor);
    document.getElementById("cor2").addEventListener("input", alterarCor);
    document.getElementById("cor3").addEventListener("input", alterarCor);
    document.getElementById("cor4").addEventListener("input", alterarCor);
    document.getElementById("cor5").addEventListener("input", alterarCor);
    document.getElementById("cor6").addEventListener("input", alterarCor);
    document.getElementById("cor7").addEventListener("input", alterarCor);

});
function criarLembretes(numero) {
    const novoNome = document.getElementById('nome' + numero).value;
    const novoData = document.getElementById('data' + numero).value;
    const novoCategoria = document.getElementById('categoria' + numero).value;
    const novoCorEvento = document.getElementById('cor' + numero).value;
    const novoInformacoes = document.getElementById('infoTexto' + numero).value;
    const novoConcluido = document.getElementById('concluido' + numero).value;

    axios.post('http://localhost:4000/lembretes', {
        "texto": novoNome,
        "concluido": novoConcluido,
        "dt": novoData,
        "categoria": novoCategoria,
        "cor": novoCorEvento
    })
        .then(resp => {
            const id_referencia = resp.data.contador;

            axios.post(`http://localhost:5000/lembretes/${id_referencia}/observacoes`, {
                "obs": novoInformacoes
            })
                .then(r => console.log("Observação adicionada com sucesso"))
                .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
}

function obterLembreteseven(numero) {
    

    axios.get('http://localhost:4000/lembretes')
        .then(r => {
            console.log(r);
            document.getElementById('nome' + numero).value = r.data[0].nome;
            document.getElementById('data' + numero).value = r.data[0].dt;
            document.getElementById('categoria' + numero).value = r.data[0].categoria;
            document.getElementById('cor' + numero).value = r.data[0].cor;
            document.getElementById('concluido' + numero).checked = r.data[0].concluido;
        })
        const id_referencia = resp.data.contador;
        axios.get(`http://localhost:5000/lembretes/${id_referencia}/observacoes`)

        .then(r => {
            console.log(r);
            document.getElementById('infoTexto' + numero).value = r.data[0].nome;
        })

}
function changeMonth(newMonth) {
    document.getElementById('monthTitle').textContent = newMonth;
}
