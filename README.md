<<<<<<< HEAD
# API de Gerenciamento de Receitas

Este projeto é uma API REST desenvolvida em **Node.js** utilizando **Express** e **TypeORM**, com um banco de dados **PostgreSQL**. A API permite cadastrar, listar e gerenciar receitas culinárias, incluindo ingredientes e etapas de preparo.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeORM**
- **PostgreSQL**
- **TypeScript**

## Configuração do Projeto

### 1. Clonar o repositório:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências:

```sh
npm install
```

### 3. Configurar variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e defina as configurações do banco de dados:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
```

### 4. Executar as migrations:

```sh
npm run typeorm migration:run
```

### 5. Iniciar o servidor:

```sh
npm run dev
```

O servidor estará disponível em `http://localhost:4000`.

## Endpoints Principais

### Criar uma nova receita
**POST** `/recipes`
```json
{
  "name": "Bolo de café",
  "is_fitness": false,
  "preparation_time": "00:10:00",
  "ingredients": [
    { "name": "4 ovos" },
    { "name": "3 xícaras de trigo" }
  ],
  "steps": [
    { "description": "Misture os ovos e o açúcar até esbranquiçar." }
  ]
}
```

### Listar todas as receitas
**GET** `/recipes`
=======

>>>>>>> rota-listar-receita
