// variavel que permite comunicar com o banco de dados - variavel connection
// connection tbm no database config
//digita connection e da enter - importa automático
// importação do sequelize para os tipos de dados - data types

const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
const { password } = require("../config/database.config");

// nome tabela 'alunos' - virgula - colunas que vai ter acesso, colunas que vamos ter acesso
// algumas colunas podem ficar só pro desenvolvedor

//código desconhece o que tem no banco de dados, por isso precisa definir o que representa um aluno

const Aluno = connection.define('alunos', {
    email: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    celular: {
        type: DataTypes.STRING
    }
}) 

//variavel Aluno - manipular a tabela de alunos, usa a variável Aluno - ponte entre código e BD

module.exports = Aluno

//ao exportar - variavel pode ser chamada em qq lugar do código e interagir com o banco de dados


//cada tabela precisa ter um arquivo na pasta models, com o nome da tabela e extensão js