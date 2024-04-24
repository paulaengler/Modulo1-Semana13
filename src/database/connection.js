const { Sequelize } = require('sequelize'); // Uso da biblioteca Sequelize
const databaseConfig = require('../config/database.config'); // Importação do objeto de acesso ao banco de dados

const connection = new Sequelize(databaseConfig) // Instância de conexão com o banco de dados utilizando como argumento o objeto de acesso ao banco de dados

module.exports = { connection } // Exportação da conexão com o banco de dados


/* exporta o conteudo de um arquivo para chamar em outro
esta exportando no arquivo database.config
e aqui esta puxando

sequelize é biblioteca pronta, importa ela
atribui uma variavel connection
e exporta a connection
para ter acesso em qq lugar do código
a qualquer momento que precisar comunicar com bd, a variavel faz a comunicação*/