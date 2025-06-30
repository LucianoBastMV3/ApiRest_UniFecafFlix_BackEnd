const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FECAF Flix API',
      version: '1.0.0',
      description: 'Uma API RESTful para gerenciar filmes, Desenvolvida por Luciano Boaventura Bastos para a disciplina de Web Programming For Back-End do curso de Análise e Desenvolvimento de Sistemas da Universidade UniFECAF ',
      contact: {
        name: 'Repositório Luciano',
        url: 'https://github.com/LucianoBastMV3/Back-End',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/v1',
        description: 'Servidor de Desenvolvimento',
      },
    ],
    components: {
      schemas: {
        Filme: {
          type: 'object',
          required: ['nome', 'data_lancamento', 'valor_unitario'],
          properties: {
            id: { type: 'integer', description: 'O ID gerado automaticamente para o filme.', readOnly: true },
            nome: { type: 'string', description: 'O nome do filme.' },
            sinopse: { type: 'string', description: 'Uma breve sinopse do filme.' },
            duracao: { type: 'string', format: 'time', example: '02:30:00', description: 'A duração do filme no formato HH:MM:SS.' },
            data_lancamento: { type: 'string', format: 'date', description: 'A data de lançamento original do filme.' },
            data_relancamento: { type: 'string', format: 'date', description: 'Uma data de relançamento, se aplicável.' },
            foto_capa: { type: 'string', format: 'uri', description: 'URL para a imagem da capa do filme.' },
            valor_unitario: { type: 'number', format: 'float', description: 'O preço do filme.' },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos que contêm as anotações da API
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;