# Projeto_A3.2023
Repositório destinado ao projeto da A3 de Usabilidade, desenvolvimento web, mobile e jogos e Sistemas distribuidos.

Alunos:

Matheus Lobo dos Santos - RA 82120742
Pablo Augusto Barranjard Rocha - RA 822223870
Yago Elon Alvarenga Lopes - RA 821219662
Yara Nunes de Sousa - RA 821215049


Seja bem vindo ao nosso projetor, professor!


No nosso projeto usamos a linguagem em javascript sem framework.

Neste Github, voce pode ver que existem as pastas de backend e front end.

Para rodar nosso projeto, o primeiro passo é clonar este repositório em sua máquina. Após isso, pode abrir a pasta backend e verá que existem duas subpastas de lembretes e observações que correspondem ao nossos dois microsserviços.

Após realizar a instrução acima, abra o arquivo index.js dentro da pasta lembretes e das linhas 6 a 10 é feito a conexão com o banco de dados. Voce precisará alterar o user e o password para os mesmos que voce acessa seu MySQL. 

O mesmo deve ser feito no index.js da pasta de observacoes.

Após isso, voce deve abrir um terminal em seu VsCode e acessar a pasta de lembrete e dentro dela usar o comando: npm start e também fazer isso no microsserviço de observacoes.


Agora os servidores já estão funcionando e é só abrir seu MySQL e dentro do mesmo, usar os seguinte comandos:


create database schema1;
use schema1;
create table tb_lembretes (
	id int primary key,
    nome varchar(200) not null,
    dt varchar(20),
    categoria varchar(50),
    concluido boolean,
    cor varchar(7)
    );
    

create database schema2;
use schema2;
CREATE TABLE tb_observacoes (
    id INT PRIMARY KEY,
    id_obs VARCHAR(200),
    obs VARCHAR(500) NOT NULL
);



Agora já está tudo pronto pra rodar e para usar nosso planner, voce só precisa adicionar a extensão ThunderClient no VsCode. Fazendo isso, você deve abrir a pasta do Frontend e rodar o index.html usando a opção "Open with Live Server".



*NOTA: Sabemos que o microserviço de observações não está salvando no banco e portanto nao retorna no front, tentamos encontrar o que estava acontecendo, mas infelizmente nao conseguimos pois os horários dos integrantes do grupo nao batiam e ficamos com o prazo apertado. 

De toda forma, obrigado pela paciencia em nos ajudar em sala de aula pra conseguir desenvolver este projeto.
