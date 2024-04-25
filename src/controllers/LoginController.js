const { compare } = require('bcryptjs')
const Aluno = require('../models/Aluno')
const { sign } = require('jsonwebtoken')

class LoginController {

    async login(req, res){
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email) {
            return res.status(400).json({ message: 'O email é obrigatório'})
        }

        if (!password) {
            return res.status(400).json({ message: 'O password é obrigatório' })
        }

        const aluno = await Aluno.findOne({
            where: {email: email}
        })

        if(!aluno){
            return res.status(404).json({ error: 'Nenhum aluno corresponde a email e senha fornecidos!' })
        }

        //primeiro, saber se aluno existe, depois comparar a senha

        //comparar a senha informada com a senha criada pela criptografia
        //função compare do bcrypt - importado no inicio do código

        const hashSenha = await compare(password, aluno.password)

        if(hashSenha === false){
            return res.status(403).json({message:'Aluno não encontrado'}) //nao falar que email ou senha não existe, vai saber se um deles esta correto
        }

        const payload = {sub: aluno.id, email: aluno.email, nome: aluno.nome}

        const token = sign(payload, process.env.SECRET_JWT)        

        res.status(200).json({Token: token})

    } catch (error) {
        return res.status(500).json({ error: error, message: 'Algo deu errado!' })
    }
}
}


module.exports = new LoginController


//para pegar o token, cadastrar um aluno, passar as informações, resposta é token