const { Router } = require("express");
const alunoRoutes = require("./alunos.route");
const cursoRoutes = require("./cursos.route");
const loginRoutes = require("./login.route");
const professorRoutes = require("./professores.route");
const matriculaRoutes = require("./matricula.route");

const routes = Router()

routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/login', loginRoutes)
routes.use('/professores', professorRoutes) 
routes.use('/matriculas', matriculaRoutes) 

module.exports = routes


/* Exercicios semana 12
1- Utilizando o projeto da semana 11, adicione, se necessário, 
os campos e ou tabelas para que exista um sistema de login, com e-mail e senha.
2-Utilizando o projeto da semana 11, adicione um middleware de autenticação utilizando JWT.
3-Utilizando o projeto da semana 11, adicione rotas de login 
e criação de usuário no sistema. Ambas as rotas devem ser Públicas
4-Utilizando o projeto da semana 11, com exceção as rotas de login e criação de usuário, 
deixe todas as rotas privadas, ou seja, é necessário estar logado para utilizar as rotas.
5-OPCIONAL - Organize as rotas por contexto, onde cada contexto é um arquivo separado.*/