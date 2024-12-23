export class UserController {
    constructor(service) {
        this.service = service;
    }

    index(req) {
        const users = this.service.findAllUsers()
        return {status: 200, body: {users}}
    }

    register(req, res) {
        const {name, email, password, tel, role} = req.body

        try {
            const user = this.service.register(name, email, password, tel, role)

            // Após criar retorna o status e o output
            return {
                status: 201,
                body: {
                    id: user.id,
                    data_criacao: user.data_criacao,
                }
            }
        }
        catch(error) {
            return {status: 400, body: {message: error.message}}
        }
    }

    login(req, res) {
        const {email, password} = req.body

        try {
            const {token, user} = this.service.login(email, password)

            return {
                status: 201, 
                body: {
                    id: user.id,
                    data_criacao: user.data_criacao,
                    data_atualizacao: user.data_atualizacao,
                    token,
                }
            }
        }
        catch(error) {
            return {status: 400, body: {message: error.message}}
        }
    }
}