const Aluno = require("../models/Aluno")
const Matricula = require("../models/Matricula")
const Curso = require("../models/Curso")


class MatriculaController {

    async cadastrar(req,res){

    try {

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

    const curso = await Curso.findByPk(curso_id)
    if(!curso) return res.status(404).json({message:'O curso não existe'})

    //VALIDAR SE JA EXISTE O MESMO CURSO PARA O MESMO ALUNO

    const matriculaExistente = await Matricula.findOne({where: {curso_id: curso_id, aluno_id: aluno_id}})
    if(matriculaExistente){
        return res.status(409).json({message: 'Aluno ja cadastrado para esse curso'})
    }   

    //buscar na tabela matricula, um registro onde curso_id seja igual ao curso_id que
    //recebeu no body, se existir, ocorre um erro, pq não é o que quer
    //codigo 409 - conflito

    //sempre que vai buscar o banco de dados, usa o await

    const matricula = await Matricula.create({
    curso_id: curso_id,
    aluno_id: aluno_id
})

    res.status(201).json(matricula)
        
    } catch (error) {
        res.status(500).json({message: 'Não foi possível realizar a matrícula'})
    }
    }
}


module.exports = new MatriculaController()



// informações para cadastrar a matricula, id do aluno e id do curso
// para interagir com o banco de dados, precisa criar o model de matricula
//res para finalizar a requisição
//const matricula para conseguir buscar o valor depois - retornar o que foi criado na resposta da requisição
//importa o model de Aluno, verificar se existe um aluno com o ID
