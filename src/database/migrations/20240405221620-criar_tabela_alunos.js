'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('alunos', {
       id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
       },
       nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      data_nascimento: {
        allowNull: false,
        type: Sequelize.DATE
      },
       createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
       updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('alunos');
  }
};


/* criando as tabelas 
toda tabela precisa de id - valor unico
usava o pgadmin para criar as tabelas
atraves das migrations (sequelize), manda o banco de dados criar uma tabela usando javascript

create.tabela , método que espera o nome da tabela 'alunos'
passa um objeto - e passa o nome das colunas com as suas configurações
createdAt - hora que foi criado
updateAt - hora que foi atualizado */