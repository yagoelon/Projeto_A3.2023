# Projeto_A3.2023
Repositório destinado ao projeto da A3 de Usabilidade, desenvolvimento web, mobile e jogos e Sistemas distribuidos.

Alunos:

Matheus Lobo dos Santos - RA 82120742
Pablo Augusto Barranjard Rocha - RA 822223870
Yago Elon Alvarenga Lopes - RA 821219662
Yara Nunes de Sousa - RA 821215049


Seja bem vindo ao nosso projetor, professor!


No nosso projeto usamos a linguagem em javascript sem framework.

Temos um planner semanal onde há dois microsserviços, um de lembretes e um de observações.

Nosso banco de dados foi feito no mysql em conexão local, voce deve criar no seu banco os database e as table com os seguintes nomes:


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
    
select * from tb_lembretes;

create database schema2;
use schema2;
CREATE TABLE tb_observacoes (
    id INT PRIMARY KEY,
    id_obs VARCHAR(200),
    obs VARCHAR(500) NOT NULL
);
select * from tb_observacoes;


Vale lembrar que no arquivo index de lembretes e de observações, há um trecho onde ele faz a conexão com o banco de dados, nao se esqueça de alterar o user e o password para os cadastrados em sua máquina.



*NOTA: Sabemos que o microserviço de observações não está salvando no banco e portanto nao retorna no front, tentamos encontrar o que estava acontecendo, mas infelizmente nao conseguimos pois os horários dos integrantes do grupo nao batiam e ficamos com o prazo apertado. 

De toda forma, obrigado pela paciencia em nos ajudar em sala de aula pra conseguir desenvolver este projeto.
