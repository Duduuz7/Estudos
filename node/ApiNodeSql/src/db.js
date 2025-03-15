const Sequelize = require('sequelize');

const database = new Sequelize('PrimeiraApiNode', 'sa', 'Senai@134', {
    dialect: 'mssql',
    // host: 'DESKTOP-9JCILTG\SQLEXPRESS',
    host: 'localhost',
    port: 1433,
    logging: console.log, // Loga todas as queries SQL executadas
});

database.sync();

module.exports = database;
