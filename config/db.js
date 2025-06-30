const sql = require('mssql');
const dotenv = require('dotenv');

dotenv.config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT),
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true',
        trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true',
        // instanceName: process.env.DB_INSTANCE_NAME, // Adicionado para instâncias nomeadas
        enableArithAbort: true
    }
};

async function connectDB() {
    try {
        await sql.connect(config);
        console.log('Conectado ao SQL Server com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao SQL Server.');
        throw err; // Re-lança o erro para que o chamador possa tratá-lo
    }
}

module.exports = { sql, connectDB };
