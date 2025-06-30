// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
    console.error("Erro não tratado:", error);

    // Você pode adicionar lógicas para diferentes tipos de erro aqui

    return res.status(500).json({
        message: "Ocorreu um erro inesperado no servidor.",
        error: error.message // Em produção, é melhor não expor a mensagem de erro detalhada
    });
};

module.exports = errorHandler;