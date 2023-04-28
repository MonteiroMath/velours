# Velours - Crud

Esse projeto foi desenvolvido em resposta ao teste proposto pela empresa Velours.

O aplicativo faz uso de um backend construído em ExpressJS sobre um banco de dados MySql ou MongoDB (à escolha do usuário).

## Instruções para rodar a aplicação - backend

A aplicação foi desenvolvida em ambiente Linux (Ubuntu 20), utilizando NodeJS versão 18. Se necessário, siga as instruções para instalação do [NodeJS](https://nodejs.org/en/). Você também deverá ter o [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) instalado para seguir as instruções abaixo. 

Também é necessário que o usuário rode localmente um banco de dados MySQL e MongoDB. Para o banco MySQL, o aplicativo requer a criação de um usuário e senha. Já para a versão MongoDB, não é necessário, desde que seu SGDB local autorize a conexão sem autenticação (Do contrário, será necessário ajustar a linha de conexão no arquivo .env.). 

### - git clone

Navegue até o diretório em que deseja armazenadar a aplicação e obtenha o código do repositório utilizando o comando git clone:

> git clone https://github.com/MonteiroMath/velours.git

Concluída a execução, navegue para a pasta root do repositório:

> cd velours

Após, movimente-se para a pasta do backend:

> cd backend

### - npm install

Uma vez na pasta backend do repositório, utilize o comando npm install para instalar as dependências do projeto:

> npm install

Será necessário definir parâmetros em um arquivo .env. Crie e edite um arquivo .env com o editor de sua preferência e defina as seguintes opções (valores exemplo utilizados em desenvolvimento):

````
DBUSER="VELOURS"
PASSWORD="VELOURS123"
DB="MONGODB"
MONGO_ADDR="mongodb://127.0.0.1:27017/"
````

As opções DBUSER e PASSWORD referem-se ao usuário e senha para conexão junto ao banco MYSQL. Já a opção MONGO_ADDR refere-se ao endereço e parâmetros para conexão ao banco mongodb.

O parâmetro DB define qual banco de dados o backend utilizará. Configure-o como "MYSQL" para usar o banco MYSQL ou "MONGODB" para usar o mongo. Caso outros valores sejam inseridos, a aplicação não funcionará.


### - npm start

Concluída a a instalação das dependências e a configuração do arquivo .env, utilize o script npm start para iniciar a execução do backend:

> npm start

O backend funcionará no endereço localhost:3000

## Instruções para rodar a aplicação - frontend

Após iniciar a execução do backend, utilize outro terminal para navegar para a pasta frontend no diretório do projeto

### - npm install

Uma vez na pasta root do repositório, utilize o comando npm install para instalar as dependências do projeto:

> npm install

### - npm run dev

Concluída a instalação das dependências, utilize o script npm run dev para iniciar a execução do código:

> npm run dev

Após, abra o browser de sua escolha e navegue para o endereço localhost:5173 para ter acesso ao aplicativo.

> localhost:5173


### - Observação:

Ao seguir as instruções acima, você rodará o aplicativo em modo de desenvolvimento, não de produção.


## Atendimento aos critérios do teste

### - Requisitos Funcionais

A aplicação permite o registro de informações de produtos, possuindo funções para adicionar, editar e remover produtos.

### - Utilização de Vue e NodeJS

Foi utilizado o Framework Vue para desenvolvimento do frontend e ExpressJS para desenvolvimento do backend.

### - Utilização de dois bancos de dados diferentes

É possível rodar a aplicação com um banco MySQL ou MongoDB.


### - Testes Automatizados utilizando a biblioteca Selenium do Python

Não foram implementados testes requeridos. O desenvolvedor não possuía familiaridade com a biblioteca indicada e, embora não tenha restrições quanto ao aprendizado de novas tecnologias, não teve tempo suficiente para estudar e implementar a solução pedida dentro do prazo do teste.
