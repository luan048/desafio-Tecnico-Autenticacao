import bcrypt from 'bcrypt';
import {User} from '../models/UserModel.js';
import jwt from 'jsonwebtoken';

import { format } from 'date-fns'; 

import dotenv from 'dotenv';
dotenv.config();

export class AuthUserService {
    constructor(repository) {
        this.repository = repository;
    }

    findAllUsers() {
        return this.repository.findAll();
    }

    register(name, email, password, tel, role) {
        const userExists = this.repository.findByEmail(email)
        if(userExists) throw new Error("E-mail já existente")
        
        const newUser = new User({name, email, password, tel, role})
        newUser.password = bcrypt.hashSync(newUser.password, 10)

        newUser.data_criacao = format(new Date(), 'dd/MM/yyyy'); // atualiza o data_criacao já formatado

        this.repository.save(newUser)
        return newUser
    }

    login(email, password) {
        const user = this.repository.findByEmail(email)

        if(!user) throw new Error("Usuário e/ou senha inválidos")

        const samePassword = bcrypt.compareSync(password, user.password)
        if(!samePassword) throw new Error("Usuário e/ou senha inválidos")

        user.data_atualizacao = format(new Date(), 'dd/MM/yyyy');
        this.repository.update(user); // usa o metodo para atualizar data_atualizacao já formatado

        const token = jwt.sign({id: user.id, email: user.email}, process.env.SECRET_KEY, {expiresIn: "30m"}) // expira com 30 min
        return {token, user: {...user, password: undefined}}
    }

    verifyToken(token) {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        const user = this.repository.findByEmail(decodedToken.email)
        return user
    }
}