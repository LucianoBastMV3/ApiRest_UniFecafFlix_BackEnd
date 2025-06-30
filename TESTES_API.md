# Relatório de Testes da API - FECAF Flix

Este documento contém os resultados dos testes realizados nos endpoints da API de filmes.

---

## 1. Documentação Interativa (Swagger UI)

**Objetivo:** Verificar se a documentação da API está sendo servida corretamente.

**Resultado:**

![image](https://github.com/user-attachments/assets/3e16ca6f-6abe-4dba-a0b5-80cd57c24cb5)

---

## 2. Criação de um Novo Filme (POST /v1/filmes)

### 2.1. Teste de Sucesso

**Objetivo:** Verificar se é possível criar um novo filme com dados válidos.

**Resultado (Status 201 Created):**

![image](https://github.com/user-attachments/assets/3377aab7-f518-4c60-ab29-577a1848feed)
![image](https://github.com/user-attachments/assets/112416ec-481b-4b4c-b6ec-2b2c264fe992)
![image](https://github.com/user-attachments/assets/f73182e7-91f6-4bcd-b50b-d05c402bb599)

### 2.2. Teste de Falha (Validação)

**Objetivo:** Verificar se a API rejeita dados inválidos.

**Resultado (Status 400 Bad Request):**

![image](https://github.com/user-attachments/assets/b90ae324-5c6e-40aa-b644-687c7fba9e5b)
![image](https://github.com/user-attachments/assets/a0f9fda6-f6cf-4536-a50d-af0af2123774)

---

## 3. Listagem e Busca de Filmes (GET /v1/filmes)

**Objetivo:** Verificar a listagem geral.

**Resultado (Status 200 OK):**

![image](https://github.com/user-attachments/assets/5f34dcdb-ea12-4b7c-ad83-1a6afb4b9c04)
![image](https://github.com/user-attachments/assets/202d4493-1a9d-4aa7-83de-5c7c484acac3)

---

## 4. Filtragem de Filmes por ID (GET /v1/filmes{id})

**Objetivo:** Verificar a listagem do filmes selecionado pelo id.

**Resultado (Status 200 OK):**

![image](https://github.com/user-attachments/assets/12f12a61-2719-417c-94da-cd7f1360f78a)
![image](https://github.com/user-attachments/assets/0947e6fb-4d54-4a59-bbe7-fbee05049625)

---

## 5. Atualização de Filme por ID (PUT /v1/filmes{id})

**Objetivo:** Atualizar as informações do filme selecionado pelo id.

**Resultado (Status 200 OK):**

![image](https://github.com/user-attachments/assets/6f5a46ad-bdae-415c-b2b8-097a733833c5)
![image](https://github.com/user-attachments/assets/4c8d1f03-1f6c-470e-a621-43c9a9117078)

---

## 6. Exclusão de Filme por ID (DELETE /v1/filmes{id})

**Objetivo:** Deletar as informações do filme selecionado pelo id.

**Resultado (Status 200 OK):**

![image](https://github.com/user-attachments/assets/3d1ea27e-a9cc-4928-9873-4f55b179a52a)
![image](https://github.com/user-attachments/assets/a6fe0abd-43ef-409d-9530-16657bdc3356)

---
