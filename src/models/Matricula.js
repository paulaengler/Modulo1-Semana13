const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");


const Matricula = connection.define("matriculas", {
    aluno_id: {
        type: DataTypes.INTEGER
    },
    curso_id: {
        type: DataTypes.INTEGER
    }
})

module.exports = Matricula


//models - ponte entre aplicação e banco de dados
//passa o nome da tabela e o que quer acessar
