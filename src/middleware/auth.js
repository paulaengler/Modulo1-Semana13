//Verificar a autenticação do token informado
//middleware - se tudo der certo, vai pro next, papel do segurança, prosseguir ou barrar


const { verify } = require("jsonwebtoken")

async function auth(req, res, next) {
    try {
        console.log("Entramos no Middleware")

        const { authorization } = req.headers

        console.log(authorization)
        req['payload'] = verify(authorization, process.env.SECRET_JWT)

        next()

    } catch (error) {
        return res.status(401).json({
            message: "Autenticação Falhou!",
            cause: error.message
        })
    }
}

module.exports = { auth }
