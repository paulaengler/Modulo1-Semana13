const Aluno = require("../models/Aluno")
const Matricula = require("../models/Matricula")


class MatriculaController {

    async cadastrar(req,res){
        const curso_id = req.body.curso_id // recebi o id do curso
        const aluno_id = req.body.aluno_id // recebi o id do aluno

        if(!curso_id || !aluno_id){
            return res.status(400).json({message: 'O id do aluno e do curso são obrigatórios'})
        }

        const aluno = await Aluno.findByPk(aluno_id) //consultar se aluno existe

        if(!aluno) 
        return res.status(404).json({message: 'O aluno não existe'})

        //se existir, segue e realiza o create

        //VALIDAR SE ID DO CURSO EXISTE

        //VALIDAR SE JA EXISTE O MESMO CURSO PARA O MESMO ALUNO
    
    const matricula = await Matricula.create({
        curso_id: curso_id,
        aluno_id: aluno_id
    })

    res.status(201).json(matricula)

    }
}

module.exports = new MatriculaController()



// informações para cadastrar a matricula, id do aluno e id do curso
// para interagir com o banco de dados, precisa criar o model de matricula
//res para finalizar a requisição
//const matricula para conseguir buscar o valor depois - retornar o que foi criado na resposta da requisição
//importa o model de Aluno, verificar se existe um aluno com o ID
