const express = require("express");
const router = express.Router();
const { filmeController, filmeSchema } = require("../controllers/filmeController");
const validate = require("../middlewares/validationMiddleware");

/**
 * @swagger
 * tags:
 *   name: Filmes
 *   description: Gerenciamento da API de Filmes
 */

/**
 * @swagger
 * /filmes:
 *   get:
 *     summary: Retorna uma lista de filmes
 *     tags: [Filmes]
 *     description: Retorna todos os filmes do catálogo. Pode ser filtrado por nome ou sinopse usando um parâmetro de busca.
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Termo para buscar filmes por nome ou sinopse.
 *     responses:
 *       200:
 *         description: Uma lista de filmes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Filme'
 *       500:
 *         description: Erro no servidor.
 */
router.get("/", filmeController.getAllOrFilterFilmes);

/**
 * @swagger
 * /filmes/{id}:
 *   get:
 *     summary: Retorna um único filme pelo ID
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O ID do filme.
 *     responses:
 *       200:
 *         description: Os detalhes do filme.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Filme'
 *       404:
 *         description: Filme não encontrado.
 *       500:
 *         description: Erro no servidor.
 */
router.get("/:id", filmeController.getFilmeById);

/**
 * @swagger
 * /filmes:
 *   post:
 *     summary: Cria um novo filme
 *     tags: [Filmes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filme'
 *     responses:
 *       201:
 *         description: Filme criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Filme'
 *       400:
 *         description: Dados de entrada inválidos.
 *       500:
 *         description: Erro no servidor.
 */
router.post("/", validate(filmeSchema), filmeController.createFilme);

/**
 * @swagger
 * /filmes/{id}:
 *   put:
 *     summary: Atualiza um filme existente
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O ID do filme a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filme'
 *     responses:
 *       200:
 *         description: Filme atualizado com sucesso.
 *       400:
 *         description: Dados de entrada inválidos.
 *       404:
 *         description: Filme não encontrado.
 *       500:
 *         description: Erro no servidor.
 */
router.put("/:id", validate(filmeSchema), filmeController.updateFilme);

/**
 * @swagger
 * /filmes/{id}:
 *   delete:
 *     summary: Deleta um filme pelo ID
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O ID do filme a ser deletado.
 *     responses:
 *       204:
 *         description: Filme deletado com sucesso (sem conteúdo).
 *       404:
 *         description: Filme não encontrado.
 *       500:
 *         description: Erro no servidor.
 */
router.delete("/:id", filmeController.deleteFilme);

module.exports = router;
