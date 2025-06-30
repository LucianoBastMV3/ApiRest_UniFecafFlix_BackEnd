# Relatório de Testes da API - FECAF Flix

Este documento contém os resultados dos testes realizados nos endpoints da API de filmes.

---

## 1. Documentação Interativa (Swagger UI)

**Objetivo:** Verificar se a documentação da API está sendo servida corretamente.

**Resultado:**

[COLE AQUI O PRINT DA TELA PRINCIPAL DO SWAGGER UI EM http://localhost:3000/api-docs]

---

## 2. Criação de um Novo Filme (POST /v1/filmes)

### 2.1. Teste de Sucesso

**Objetivo:** Verificar se é possível criar um novo filme com dados válidos.

**Resultado (Status 201 Created):**

[COLE AQUI O PRINT DA REQUISIÇÃO POST BEM-SUCEDIDA]

### 2.2. Teste de Falha (Validação)

**Objetivo:** Verificar se a API rejeita dados inválidos.

**Resultado (Status 400 Bad Request):**

[COLE AQUI O PRINT DA TENTATIVA DE CRIAÇÃO COM DADOS INVÁLIDOS]

---

## 3. Listagem e Busca de Filmes (GET /v1/filmes)

**Objetivo:** Verificar a listagem geral e o filtro por nome/sinopse.

**Resultado (Status 200 OK):**

[COLE AQUI O PRINT DA REQUISIÇÃO GET COM O PARÂMETRO `?search=...`]

---

## 4. CRUD Completo

**Objetivo:** Demonstrar o ciclo de vida completo de um recurso (Busca, Atualização e Exclusão).

### 4.1. Busca por ID (GET /v1/filmes/:id) - Status 200 OK
[COLE AQUI O PRINT DA BUSCA PELO ID DO FILME CRIADO]

### 4.2. Atualização (PUT /v1/filmes/:id) - Status 200 OK
[COLE AQUI O PRINT DA ATUALIZAÇÃO DO FILME]

### 4.3. Exclusão (DELETE /v1/filmes/:id) - Status 204 No Content
[COLE AQUI O PRINT DA EXCLUSÃO DO FILME]

### 4.4. Verificação da Exclusão (GET /v1/filmes/:id) - Status 404 Not Found
[COLE AQUI O PRINT DA TENTATIVA DE BUSCAR O FILME JÁ EXCLUÍDO]