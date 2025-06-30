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
    try {
      const { search } = req.query; // Usando um único parâmetro 'search'
      let filmes;

      if (search) {
        filmes = await Filme.filterByNameOrSynopsis(search);
      } else {
        filmes = await Filme.getAll();
      }

      res.status(200).json(filmes);
    } catch (error) {
      console.error("Erro ao obter filmes:", error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  },

  getFilmeById: async (req, res) => {
    try {
      const { id } = req.params;
      const filme = await Filme.getById(id);
      if (filme) {
        res.status(200).json(filme);
      } else {
        res.status(404).json({ message: "Filme não encontrado." });
      }
    } catch (error) {
      console.error(`Erro ao obter filme com ID ${req.params.id}:`, error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  },

  createFilme: async (req, res) => {
    try {
      // Validação dos dados de req.body com Joi
      const { error, value } = filmeSchema.validate(req.body);
      if (error) {
        // Retorna um erro 400 (Bad Request) com os detalhes da validação
        return res.status(400).json({ message: "Dados de entrada inválidos.", details: error.details });
      }

      const novoFilme = await Filme.create(value);
      res.status(201).json(novoFilme);
    } catch (error) {
      console.error("Erro ao criar filme:", error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  },

  updateFilme: async (req, res) => {
    try {
      const { id } = req.params;
      // Validação dos dados de req.body com Joi
      const { error, value } = filmeSchema.validate(req.body);
      if (error) {
        // Retorna um erro 400 (Bad Request) com os detalhes da validação
        return res.status(400).json({ message: "Dados de entrada inválidos.", details: error.details });
      }

      const filmeAtualizado = await Filme.update(id, value);
      if (filmeAtualizado) {
        res.status(200).json(filmeAtualizado);
      } else {
        res.status(404).json({ message: "Filme não encontrado para atualização." });
      }
    } catch (error) {
      console.error(`Erro ao atualizar filme com ID ${req.params.id}:`, error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  },

  deleteFilme: async (req, res) => {
    try {
      const { id } = req.params;
      const linhasAfetadas = await Filme.deleteById(id);
      if (linhasAfetadas > 0) {
        res.status(204).send(); // 204 No Content: sucesso, sem corpo na resposta
      } else {
        res.status(404).json({ message: "Filme não encontrado para exclusão." });
      }
    } catch (error) {
      console.error(`Erro ao deletar filme com ID ${req.params.id}:`, error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  },
};

module.exports = filmeController;
