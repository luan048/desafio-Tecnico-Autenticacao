export class UserController {
    constructor(service) {
        this.service = service;
    }

    register(req, res) {
        const {name, email, password, number, role} = req.body
        try {
            const user = this.service.register(name, email, password, number, role)
            return {status: 201, body: user}
        }
        catch(error) {
            return {status: 400, body: {message: error.message}}
        }
    }

    login(req, res) {
        const {email, password} = req.body

        try {
            const user = this.register.login(email, password)
            return {status: 201, body: user}
        }
        catch(error) {
            return {status: 400, body: {message: error.message}}
        }
    }
}