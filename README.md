API de Gerenciamento de Receitas

Este projeto é uma API para gerenciamento de receitas, permitindo o cadastro, listagem e manipulação de receitas, ingredientes e etapas de preparo.

Tecnologias utilizadas:
- Node.js
- Express
- TypeORM
- PostgreSQL
- TypeScript
- Dotenv
- Cors

Configuração do ambiente:

1. Clone o repositório
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as dependências
   npm install

3. Configure as variáveis de ambiente
   Crie um arquivo .env e adicione as seguintes configurações:

   PORT=4000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=seu_banco

4. Execute as migrations
   npm run typeorm migration:run -- -d ./src/utils/data-source.ts

5. Inicie a aplicação
   npm run dev

Rotas da API
1. Criar uma receita
POST /recipes

json
Copiar
Editar
{
  "name": "Bolo de café",
  "is_fitness": false,
  "preparation_time": 10,
  "ingredients": [
    { "name": "4 ovos" },
    { "name": "3 xícaras de trigo" }
  ],
  "steps": [
    { "description": "Misture os ovos e o açúcar até esbranquiçar." }
  ]
}

2. Listar receitas
   Método: GET
   Rota: /recipes

Como contribuir:

1. Fork o repositório
2. Crie uma branch (git checkout -b minha-feature)
3. Commit suas mudanças (git commit -m "Minha nova feature")
4. Push para a branch (git push origin minha-feature)
5. Abra um Pull Request
