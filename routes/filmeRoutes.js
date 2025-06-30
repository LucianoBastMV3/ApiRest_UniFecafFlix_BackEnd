const express = require("express");
const router = express.Router();
const filmeController = require("../controllers/filmeController");

// Rota para listar todos os filmes ou filtrar por nome/sinopse
// Ex: GET /v1/filmes
// Ex: GET /v1/filmes?search=poderoso
router.get("/", filmeController.getAllOrFilterFilmes);

// Rota para buscar um filme por ID
router.get("/:id", filmeController.getFilmeById);

// Rota para criar um novo filme
router.post("/", filmeController.createFilme);

// Rota para atualizar um filme existente
router.put("/:id", filmeController.updateFilme);

// Rota para deletar um filme
router.delete("/:id", filmeController.deleteFilme);

module.exports = router;
