const { sql } = require("../config/db");

const Filme = {
  getAll: async () => {
    try {
      const result = await sql.query("SELECT * FROM tbl_filme");
      return result.recordset;
    } catch (err) {
      console.error("Erro ao buscar todos os filmes:", err);
      throw err;
    }
  },

  getById: async (id) => {
    try {
      const result = await sql.query`SELECT * FROM tbl_filme WHERE id = ${id}`;
      return result.recordset[0];
    } catch (err) {
      console.error(`Erro ao buscar filme com ID ${id}:`, err);
      throw err;
    }
  },

  filterByNameOrSynopsis: async (query) => {
    try {
      // Adiciona os caracteres curinga (%) para a busca parcial de forma segura
      const searchQuery = `%${query}%`;
      // Usa a query parametrizada para prevenir SQL Injection
      const result = await sql.query`SELECT * FROM tbl_filme WHERE nome LIKE ${searchQuery} OR sinopse LIKE ${searchQuery}`;
      return result.recordset;
    } catch (err) {
      console.error(
        `Erro ao filtrar filmes por nome ou sinopse com a query '${query}':`,
        err
      );
      throw err;
    }
  },

  create: async (filmeData) => {
    try {
      const { nome, sinopse, duracao, data_lancamento, data_relancamento, foto_capa, valor_unitario } = filmeData;
      const result = await sql.query`
        INSERT INTO tbl_filme (nome, sinopse, duracao, data_lancamento, data_relancamento, foto_capa, valor_unitario)
        OUTPUT INSERTED.*
        VALUES (${nome}, ${sinopse}, ${duracao}, ${data_lancamento}, ${data_relancamento}, ${foto_capa}, ${valor_unitario})
      `;
      return result.recordset[0];
    } catch (err) {
      console.error('Erro ao criar filme:', err);
      throw err;
    }
  },

  update: async (id, filmeData) => {
    try {
      const { nome, sinopse, duracao, data_lancamento, data_relancamento, foto_capa, valor_unitario } = filmeData;
      const result = await sql.query`
        UPDATE tbl_filme
        SET nome = ${nome},
            sinopse = ${sinopse},
            duracao = ${duracao},
            data_lancamento = ${data_lancamento},
            data_relancamento = ${data_relancamento},
            foto_capa = ${foto_capa},
            valor_unitario = ${valor_unitario}
        OUTPUT INSERTED.*
        WHERE id = ${id}
      `;
      return result.recordset[0];
    } catch (err) {
      console.error(`Erro ao atualizar filme com ID ${id}:`, err);
      throw err;
    }
  },

  deleteById: async (id) => {
    try {
      const result = await sql.query`DELETE FROM tbl_filme WHERE id = ${id}`;
      return result.rowsAffected[0]; // Retorna o número de linhas afetadas
    } catch (err) {
      console.error(`Erro ao deletar filme com ID ${id}:`, err);
      throw err;
    }
  },
};

module.exports = Filme;
