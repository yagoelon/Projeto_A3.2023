document.addEventListener('DOMContentLoaded', function() {
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
    dateInputs1.forEach(function(input) {
        input.addEventListener('change', function() {
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
    dateInputs2.forEach(function(input) {
        input.addEventListener('change', function() {
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
    dateInputs3.forEach(function(input) {
        input.addEventListener('change', function() {
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
    dateInputs4.forEach(function(input) {
        input.addEventListener('change', function() {
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
    dateInputs5.forEach(function(input) {
        input.addEventListener('change', function() {
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
    dateInputs6.forEach(function(input) {
        input.addEventListener('change', function() {
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
    dateInputs7.forEach(function(input) {
        input.addEventListener('change', function() {
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
    const novoNome = document.getElementById('nome'+ numero).value;
    const novoData = document.getElementById('data'+ numero).value;
    const novoCategoria = document.getElementById('categoria'+ numero).value;
    const novoCorEvento = document.getElementById('cor'+ numero).value;
    const novoInformacoes = document.getElementById('infoTexto'+ numero).value;
    const novoConcluido = document.getElementById('concluido'+ numero).value;

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
            "text": novoInformacoes
        })
        .then(r => console.log("Observação adicionada com sucesso"))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

}
function criarLembretesix() {
    const novoNome6 = document.getElementById('nome6').value;
    const novoData6 = document.getElementById('data6').value;
    const novoCategoria6 = document.getElementById('categoria6').value;
    const novoCorEvento6 = document.getElementById('cor6').value;
    const novoInformacoes6 = document.getElementById('infoTexto6').value;
    const novoConcluido6 = document.getElementById('concluido6').value;

    axios.post('http://localhost:4000/lembretes', {
        "texto": novoNome6,
        "concluido": novoConcluido6,
        "dt": novoData6,
        "categoria": novoCategoria6,
        "cor": novoCorEvento6
    })
    .then(resp => {
        const id_referencia = resp.data.contador;

        axios.post(`http://localhost:5000/lembretes/${id_referencia}/observacoes`, {
            "text": novoInformacoes6
        })
        .then(r => console.log("Observação adicionada com sucesso"))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

}
function criarLembretesfive() {
    const novoNome5 = document.getElementById('nome5').value;
    const novoData5 = document.getElementById('data5').value;
    const novoCategoria5 = document.getElementById('categoria5').value;
    const novoCorEvento5 = document.getElementById('cor5').value;
    const novoInformacoes5 = document.getElementById('infoTexto5').value;
    const novoConcluido5 = document.getElementById('concluido5').value;

    axios.post('http://localhost:4000/lembretes', {
        "texto": novoNome5,
        "concluido": novoConcluido5,
        "dt": novoData5,
        "categoria": novoCategoria5,
        "cor": novoCorEvento5
    })
    .then(resp => {
        const id_referencia = resp.data.contador;

        axios.post(`http://localhost:5000/lembretes/${id_referencia}/observacoes`, {
            "text": novoInformacoes5
        })
        .then(r => console.log("Observação adicionada com sucesso"))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

}
function criarLembretesfour() {
    const novoNome4 = document.getElementById('nome4').value;
    const novoData4 = document.getElementById('data4').value;
    const novoCategoria4 = document.getElementById('categoria4').value;
    const novoCorEvento4= document.getElementById('cor4').value;
    const novoInformacoes4 = document.getElementById('infoTexto4').value;
    const novoConcluido4 = document.getElementById('concluido4').value;

    axios.post('http://localhost:4000/lembretes', {
        "texto": novoNome4,
        "concluido": novoConcluido4,
        "dt": novoData4,
        "categoria": novoCategoria4,
        "cor": novoCorEvento4
    })
    .then(resp => {
        const id_referencia = resp.data.contador;

        axios.post(`http://localhost:5000/lembretes/${id_referencia}/observacoes`, {
            "text": novoInformacoes4
        })
        .then(r => console.log("Observação adicionada com sucesso"))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

}
function criarLembretesthree() {
    const novoNome3 = document.getElementById('nome3').value;
    const novoData3 = document.getElementById('data3').value;
    const novoCategoria3 = document.getElementById('categoria3').value;
    const novoCorEvento3= document.getElementById('cor3').value;
    const novoInformacoes3 = document.getElementById('infoTexto3').value;
    const novoConcluido3 = document.getElementById('concluido3').value;

    axios.post('http://localhost:4000/lembretes', {
        "texto": novoNome3,
        "concluido": novoConcluido3,
        "dt": novoData3,
        "categoria": novoCategoria3,
        "cor": novoCorEvento3
    })
    .then(resp => {
        const id_referencia = resp.data.contador;

        axios.post(`http://localhost:5000/lembretes/${id_referencia}/observacoes`, {
            "text": novoInformacoes3
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
        document.getElementById('nome'+numero).value = r.data[1].nome;
        document.getElementById('data7').value = r.data[1].dt;
        document.getElementById('categoria7').value = r.data[1].categoria;
        document.getElementById('cor7').value = r.data[1].cor;
        document.getElementById('concluido7').checked = r.data[1].concluido;
    })
//TEM QUE CRIAR O GET direiro a parte escrita numero é para fazer de forma simplificada e não ter que repitir 7 vezes a function
    axios.get('http://localhost:5000/lembretes/${id_referencia}/observacoes')
    .then(r => {
        console.log(r);
        document.getElementById('infoTexto'+numero).value = r.data[1].nome;
})

}
//    .catch(e => console.log(e));
//
//        "texto": novoNome7,
//        "concluido": novoConcluido7,
//        "dt": novoData7,
//        "categoria": novoCategoria7,
//        "cor": novoCorEvento7
//    
//     document.getElementById('nome7').value;
//    document.getElementById('data7').value;
//    document.getElementById('categoria7').value;
//    ocument.getElementById('cor7').value;
//    document.getElementById('infoTexto7').value;
//  document.getElementById('concluido7').value;
//
//    axios.post('http://localhost:4000/lembretes', {
//        "texto": novoNome7,
//        "concluido": novoConcluido7,
//        "dt": novoData7,
//        "categoria": novoCategoria7,
//        "cor": novoCorEvento7
//    })
//    .then(resp => {
//        const id_referencia = resp.data.contador;
//
//        axios.post(`http://localhost:5000/lembretes/${id_referencia}/observacoes`, {
//            "text": novoInformacoes7
//        })
//        .then(r => console.log("Observação adicionada com sucesso"))
//        .catch(e => console.log(e));
//    })
//   .catch(e => console.log(e));

/*function criarLembrete(){
    const novoNome7 = document.getElementById('nome7').value;
    const novoData7 = document.getElementById('data7').value;
    const novoCategoria7 = document.getElementById('categoria7').value;
    const novoCorEvento7 = document.getElementById('cor7').value;
    const novoInformacoes7 = document.getElementById('infoTexto7').value;
    const novoConcluido7 = document.getElementById('concluido7').value;

    axios.post('http://localhost:4000/lembretes', { 
        "texto": novoNome7,
        "concluido": novoConcluido7,
        "dt": novoData7,
        "categoria": novoCategoria7, 
        "cor": novoCorEvento7
    })
        .then(resp => {
            //const id_referencia = resp.data.contador;
            console.log("vou fazer o post");
            //axios.post(`http://localhost:5000/lembretes/${id_referencia}/observacoes`, {
            //    "text": novoInformacoes7
            //}).then(r => console.log("ja fiz"));
        })                                        
        .catch(e => console.log(e));
        
}*/

    // function updateMonth(monthNames) {
    //     // const monthOfWeek = newDate.getMonth();
    //     const mothNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    //     const selectedMonth = monthNames[mothNames];

    //     // Atualizar o texto do h2 do card 1
    //     const h1Element = document.querySelector('.month');
    //     h1Element.textContent = selectedMonth;
    // }

    // // Obter todos os elementos de entrada de data
    // const dateInputs1 = document.querySelectorAll('.month');

    // // Adicionar um evento onchange para cada elemento de entrada de data
    // dateInputs1.forEach(function(input) {
    //     input.addEventListener('change', function() {
    //         updateDayOfWeek(input);
    //     });
    // });

    function changeMonth(newMonth) {
        document.getElementById('monthTitle').textContent = newMonth;
    }
