require('dotenv').config();

const config = {
    server: {
        // Usa la variable PORT (que pone Render) o SERVER_PORT, o 5000 por defecto
        port: parseInt(process.env.PORT || process.env.SERVER_PORT || '5000'),
    },
    database: {
        connectionString: process.env.MONGODB_URI,
        options: {},
    },
    auth: {
        secret: process.env.SECRET_KEY || 'secreto_super_seguro_por_defecto',
        expiresIn: process.env.EXPIRES_IN || '1d',
        // Si no hay variable, usa 10 salt rounds por defecto
        salt: parseInt(process.env.SALT_ROUNDS || '10'),
    },
    cors: {
        // OJO: Esta configuración de aquí suele ser ignorada si usas la lógica dinámica
        // que pusimos en app.js, pero por si acaso, dejémoslo bien.
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        credentials: true,
    }
};

module.exports = config;