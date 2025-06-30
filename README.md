# FECAF Flix API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Microsoft SQL Server](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

## 📝 Descrição

**FECAF Flix API** é uma API RESTful completa para gerenciar um catálogo de filmes. Este projeto foi desenvolvido como parte da disciplina de "Web Programming For Back-End" do curso de Análise e Desenvolvimento de Sistemas da UniFECAF.

A API permite realizar todas as operações CRUD (Criar, Ler, Atualizar, Deletar) para os filmes, possui validação de dados de entrada, tratamento de erros centralizado e uma documentação interativa gerada com Swagger/OpenAPI.

## ✨ Funcionalidades

- **Gerenciamento Completo de Filmes**: Endpoints para criar, listar, buscar, atualizar e deletar filmes.
- **Busca e Filtragem**: Capacidade de filtrar filmes por nome ou sinopse.
- **Validação de Dados**: Utiliza a biblioteca `Joi` para garantir que os dados enviados para a API sejam válidos e consistentes.
- **Tratamento de Erros Centralizado**: Um middleware de erro robusto para capturar e responder a erros inesperados de forma consistente.
- **Documentação Interativa**: Uma interface Swagger UI para visualizar e testar todos os endpoints da API de forma fácil e intuitiva.

## 🚀 Tecnologias Utilizadas

- **Back-end**: Node.js, Express.js
- **Banco de Dados**: Microsoft SQL Server
- **Driver do Banco de Dados**: `mssql`
- **Validação**: `joi`
- **Variáveis de Ambiente**: `dotenv`
- **Documentação**: `swagger-jsdoc`, `swagger-ui-express`
- **Qualidade de Código**: `express-async-errors`

## 📚 Documentação da API

A documentação completa e interativa da API está disponível através do Swagger UI. Com o servidor rodando, acesse:

**http://localhost:3000/api-docs**

Lá você pode visualizar todos os endpoints, seus parâmetros, corpos de requisição e respostas esperadas, além de poder testar a API diretamente do navegador.

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- Node.js (versão 14 ou superior)
- NPM (geralmente vem com o Node.js)
- Microsoft SQL Server
- Um cliente de banco de dados como o SQL Server Management Studio (SSMS) ou Azure Data Studio.

## 🛠️ Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/LucianoBastMV3/Back-End.git
    cd Back-End
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o banco de dados:**
    - Abra o seu cliente de banco de dados (SSMS, por exemplo).
    - Conecte-se à sua instância do SQL Server.
    - Abra o arquivo `database.sql` e execute o script para criar o banco de dados `FecafFlix` e a tabela `tbl_filme` com os dados iniciais.

4.  **Configure as variáveis de ambiente:**
    - Crie um arquivo chamado `.env` na raiz do projeto.
    - Copie o conteúdo do exemplo abaixo e ajuste os valores de acordo com a sua configuração do SQL Server.

    ```env
    # .env.example

    # Configuração do Servidor da API
    PORT=3000

    # Credenciais do Banco de Dados SQL Server
    DB_USER=seu_usuario_sql
    DB_PASSWORD=sua_senha_sql
    DB_SERVER=localhost
    DB_PORT=1433
    DB_DATABASE=FecafFlix

    # Opções de Conexão
    DB_ENCRYPT=false
    DB_TRUST_SERVER_CERTIFICATE=true
    ```

5.  **Inicie o servidor:**
    ```bash
    npm start
    ```

O servidor estará rodando em `http://localhost:3000`.

## 🛣️ Endpoints da API

| Método HTTP | Endpoint                 | Descrição                                         |
|-------------|--------------------------|---------------------------------------------------|
| `GET`       | `/v1/filmes`             | Lista todos os filmes (pode ser filtrado com `?search=...`) |
| `GET`       | `/v1/filmes/{id}`        | Busca um filme específico pelo seu ID.            |
| `POST`      | `/v1/filmes`             | Cria um novo filme.                               |
| `PUT`       | `/v1/filmes/{id}`        | Atualiza um filme existente.                      |
| `DELETE`    | `/v1/filmes/{id}`        | Deleta um filme.                                  |

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por Luciano Boaventura Bastos.