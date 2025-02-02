# Crud-Simples
## Exercicio de Crud Simples desenvolvido em HTML, CSS, JS

# Crud Simples

# Descrição

Este é um projeto de CRUD simples desenvolvido com Node.js e Express.js. Ele permite criar, visualizar, atualizar e excluir registros de forma intuitiva.

# Tecnologias Utilizadas

Node.js

Express.js

SQLite/MySQL/PostgreSQL (Defina o banco de dados utilizado)

Sequelize (Se aplicável)

Postman/Insomnia (Para testar a API)

# Instalação

Clone este repositório:

git clone https://github.com/cleudioFaria/Crud-Simples.git

Acesse o diretório do projeto:

cd Crud-Simples

# Instale as dependências:

npm install

Configure o banco de dados no arquivo .env (se aplicável).

Execute as migrações do banco de dados:

npx sequelize db:migrate

Inicie o servidor:

npm start

Funcionalidades

Criar um novo registro

Listar todos os registros

Buscar um registro por ID

Atualizar um registro existente

Deletar um registro

# Estrutura do Projeto

## Crud-Simples/
 Crud-Simples/
│── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── database/
│── package.json
│── server.js
│── .env
│── README.md

# Como Testar a API

Você pode testar os endpoints usando o Postman ou Insomnia:

GET /registros → Lista todos os registros

GET /registros/:id → Busca um registro por ID

POST /registros → Cria um novo registro

PUT /registros/:id → Atualiza um registro

DELETE /registros/:id → Deleta um registro

Melhorias Futuras

Implementação de autenticação (JWT)

Validação de entrada de dados

Front-end integrado

Testes automatizados

Autor

Feito com ❤️ por Cléudio Faria

![ClipWindowsGIF (2)](https://github.com/user-attachments/assets/c15d6f45-1a36-4f96-8f95-e0cb14c8918d)

