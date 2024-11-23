import bcrypt from 'bcrypt'
import {AdminModel} from '../models/AdminModel.js'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

export class AdminService {
    constructor(repository) {
        this.repository = repository
    }

    register(name, email, password, number, role) {
        const adminExistis = this.repository.findByEmail(email)
        if(adminExistis) throw new Error("E-mail já cadastrado")

        const newAdmin = new AdminModel({name, email, password, number, role})
        newAdmin.password = bcrypt.hashSync(newAdmin.password, 10)

        this.repository.save(newAdmin)
        return newAdmin
    }

    login(email, password) {
        const admin = this.repository.findByEmail(email)

        if(!admin) throw new Error("Usuário e/ou senha inválidos")

        const samePassword = bcrypt.compareSync(password, admin.password)
        if(!samePassword) throw new Error("Usuário e/ou senha inválidos")

        const token = jwt.sign({id: admin.id, email: admin.email}, process.env.SECRET_KEY)
        return {token, admin: {...admin, password: undefined}}
    }

    verify(token) {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        const admin = this.repository.findByEmail(decodedToken.email)
        return admin
    }
}