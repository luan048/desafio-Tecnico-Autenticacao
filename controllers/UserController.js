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
            return {status: 201, body: user}
        }
        catch(error) {
            return {status: 400, body: {message: error.message}}
        }
    }

    login(req, res) {
        const {email, password} = req.body

        try {
            const user = this.service.login(email, password)
            return {status: 201, body: user}
        }
        catch(error) {
            return {status: 400, body: {message: error.message}}
        }
    }
}