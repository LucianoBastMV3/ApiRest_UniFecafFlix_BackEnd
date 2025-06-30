const validate = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: "Dados de entrada inválidos.", details: error.details });
    }

    req.body = value; // Passa os dados validados e sanitizados para o próximo handler
    return next();
};

module.exports = validate;