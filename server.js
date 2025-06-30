const express = require('express');
const dotenv = require('dotenv');
require('express-async-errors'); // Importa para capturar erros async automaticamente
const { connectDB } = require('./config/db');
const filmeRoutes = require('./routes/filmeRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const errorHandler = require('./middlewares/errorMiddleware');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // Conectar ao banco de dados
        await connectDB();

        app.use(express.json());

        // Rotas da API
        // Sugestão: Usar um nome de recurso mais direto e no plural, como 'filmes'
        app.use('/v1/filmes', filmeRoutes);

        // Rota para a documentação da API
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

        app.get('/', (req, res) => {
            res.send('API FECAF Flix está online!');
        });

        // Middleware de tratamento de erros (deve ser o último middleware)
        app.use(errorHandler);

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        // O erro de conexão com o banco de dados será capturado aqui
        console.error("Falha ao iniciar o servidor. Verifique a configuração do SQL Server.");
        // Imprime uma mensagem de erro mais detalhada, se disponível
        if (error.originalError) {
            console.error("Detalhes do erro:", error.originalError.message);
        } else {
            console.error("Detalhes do erro:", error.message);
        }
        process.exit(1); // Encerra o processo se não conseguir conectar ao DB
    }
};

startServer();
