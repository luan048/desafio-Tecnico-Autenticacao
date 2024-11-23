import bcrypt from 'bcrypt'
import {User} from '../models/UserModel.js'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

export class AuthUserService {
    constructor(repository) {
        this.repository = repository;
    }

    register(name, email, password, number, role) {
        const userExists = this.repository.findByEmail(email)
        if(userExists) throw new Error("E-mail já existente")
        
        const newUser = new User({name, email, password, number, role})
        newUser.password = bcrypt.hashSync(newUser.password, 10)

        this.repository.save(newUser)
        return newUser
    }

    login(email, password) {
        const user = this.repository.findByEmail(email)

        if(!user) throw new Error("Usuário e/ou senha inválidos")

        const samePassword = bcrypt.compareSync(password, user.password)
        if(!samePassword) throw new Error("Usuário e/ou senha inválidos")

        const token = jwt.sign({id: user.id, email: user.email}, process.env.SECRET_KEY, {expiresIn: "1d"})
        return {token, user: {...user, password: undefined}}
    }

    verifyToken(token) {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        const user = this.repository.findByEmail(decodedToken.email)
        return user
    }
}