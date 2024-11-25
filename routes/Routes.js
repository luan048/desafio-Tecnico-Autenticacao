import { Router } from "express";

// Para User
import {UserRepository} from '../database/UserRep.js'
import {AuthUserService} from '../services/UserServices.js'
import {UserController} from '../controllers/UserController.js'

const userRepository = new UserRepository();
const userAuthService = new AuthUserService(userRepository);
const userController = new UserController(userAuthService);

// Para Admin
import {VerifyRole} from '../middleware/AuthRole.js'

const routers = Router()

routers.post('/api/createUser', (req, res) => {
    const {status, body} = userController.register(req)
    res.status(status).json(body)
})

routers.post('/api/login', (req, res) => {
    const {status, body} = userController.login(req)
    res.status(status).json(body)
})

routers.get('/api/listarUsers', VerifyRole.preHandler, (req, res) => {
    const {status, body} = userController.index(req)
    res.status(status).json(body)
})

export {routers}