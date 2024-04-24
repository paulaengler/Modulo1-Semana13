const Professor = require('../models/Professores')

class ProfessorController {


async cadastrar(req,res){
    try {    
        const nome = req.body.nome;
        const materia = req.body.materia;

        if(!nome) {
            return res.status(400).json({message: 'O nome é obrigatório'})
        }

        if(!materia) {
            return res.status(400).json({message: 'Informar a matéria que o professor leciona é obrigatório'})
        }

        const professor = await Professor.create({
            nome: nome,
            materia: materia
        })
        res.status(201).json(professor)

    } catch (error) {
        console.log(error.message); 
        res.status(500).json({ error: 'Não foi possível cadastrar o professor' })
    }
}


async listar(req, res){
    const professores = await Professor.findAll()
    res.json(professores)
}



async atualizar(req, res){
    const id = req.params.id;
    const { nome, materia} = req.body;

    try {
    
        const atualizada = await Professor.findByPk(id)
        if(!atualizada) {
            return res.status(404).json({ error: 'Professor não encontrado'})
        }
    
    if (!nome || !materia) {
        return res.status(400).json({ error: 'Nome e materia são campos obrigatórios'})
    }

    await Professor.update({ nome, materia},
    {where: { id} });

    const professorAtualizado = await Professor.findByPk(id);
    res.status(200).json(professorAtualizado);

    } catch(error) {
        console.error('Erro ao atualizar o professor', error);
        res.status(500).json({ error: 'Erro ao atualizar o professor'})
    }
};

async deletar(req, res){
    const { id }  = req.params;

    const novo = await Professor.findByPk(id);

    if(!novo) {
        return res.status(404).json({ error: 'Professor não encontrado'})
    }

    await novo.destroy();

    return res.status(204).json({});
};
}


module.exports = new ProfessorController