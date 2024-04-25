const { Router } = require('express') 
const { auth } = require('../middleware/auth')
const AlunoController = require('../controllers/AlunoController')

const alunoRoutes = new Router()

alunoRoutes.post('/', AlunoController.cadastrar)
alunoRoutes.get('/', auth, AlunoController.listar)
alunoRoutes.get('/:id', auth, AlunoController.listarUm)


module.exports = alunoRoutes

//middlere auth fica no meio - entre requisição e resposta 



/* const { Router } = require('express');
const Aluno = require('../models/Aluno');

const nodemon = require('nodemon');

const { sign } = require("jsonwebtoken");
const { auth } = require("../middleware/auth");


const alunoRoutes = new Router();

alunoRoutes.post('/alunos', async (req,res) => {
    
    try {    
        const email = req.body.email;
        const password = req.body.password;
        const nome = req.body.nome;
        const data_nascimento = req.body.data_nascimento;
        const celular = req.body.celular;

        if(!nome) {
            return res.status(400).json({message: 'O nome é obrigatório'})
        }

        if(!data_nascimento) {
            return res.status(400).json({message: 'A data de nascimento é obrigatória'})
        }

        const aluno = await Aluno.create({
            email: email,
            password: password,
            nome: nome,
            data_nascimento: data_nascimento,
            celular: celular,
        })
        res.status(201).json(aluno)

    } catch (error) {
        console.log(error.message); //para ver a mensagem técnica do erro que aconteceu
        res.status(500).json({ error: 'Não foi possível cadastrar o aluno' })
    }
})

module.exports = alunoRoutes; */
