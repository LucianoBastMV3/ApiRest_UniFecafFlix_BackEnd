const Filme = require("../models/filmeModel");
const Joi = require('joi');

// Schema de validação para os dados de um filme
const filmeSchema = Joi.object({
    nome: Joi.string().min(1).max(255).required(),
    sinopse: Joi.string().allow(null, ''),
    duracao: Joi.string().pattern(/^(\d{2}):(\d{2}):(\d{2})$/).allow(null).messages({'string.pattern.base': 'O campo duração deve estar no formato HH:MM:SS'}),
    data_lancamento: Joi.date().iso().required(),
    data_relancamento: Joi.date().iso().allow(null),
    foto_capa: Joi.string().uri().allow(null, ''),
    valor_unitario: Joi.number().precision(2).positive().required()
});


const filmeController = {
  // Função unificada para listar todos ou filtrar
  getAllOrFilterFilmes: async (req, res) => {
    const { search } = req.query; // Usando um único parâmetro 'search'
    let filmes;

    if (search) {
      filmes = await Filme.filterByNameOrSynopsis(search);
    } else {
      filmes = await Filme.getAll();
    }

    res.status(200).json(filmes);
  },

  getFilmeById: async (req, res) => {
    const { id } = req.params;
    const filme = await Filme.getById(id);
    if (filme) {
      res.status(200).json(filme);
    } else {
      res.status(404).json({ message: "Filme não encontrado." });
    }
  },

  createFilme: async (req, res) => {
    const novoFilme = await Filme.create(req.body);
    res.status(201).json(novoFilme);
  },

  updateFilme: async (req, res) => {
    const { id } = req.params;
    const filmeAtualizado = await Filme.update(id, req.body);
    if (filmeAtualizado) {
      res.status(200).json(filmeAtualizado);
    } else {
      res.status(404).json({ message: "Filme não encontrado para atualização." });
    }
  },

  deleteFilme: async (req, res) => {
    const { id } = req.params;
    const linhasAfetadas = await Filme.deleteById(id);
    if (linhasAfetadas > 0) {
      res.status(204).send(); // 204 No Content: sucesso, sem corpo na resposta
    } else {
      res.status(404).json({ message: "Filme não encontrado para exclusão." });
    }
  },
};

module.exports = { filmeController, filmeSchema };
