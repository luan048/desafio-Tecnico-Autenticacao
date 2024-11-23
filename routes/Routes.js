import { Router } from "express";

import {UserRepository} from '../database/UserRep.js'
import {AuthUserService} from '../services/UserServices.js'
import {UserController} from '../controllers/UserController.js'

const routers = Router()

const userRepository = new UserRepository();
const userAuthService = new AuthUserService(userRepository);
const userController = new UserController(userAuthService);

routers.post('/createUser', (req, res) => {
    const {status, body} = userController.register(req)
    res.status(status).json(body)
})

routers.post('/login', (req, res) => {
    const {status, body} = userController.login(req)
    res.status(status).json(body)
})

export {routers, userAuthService}