import {v4 as uuidv4} from 'uuid';

export class User {
    constructor({id, name, email, password, tel, role, data_criacao, data_atualizacao}) {
        this.id = id ?? uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.tel = tel;
        this.role = role;
        // ambos null para depois serem atualizados no register e login
        this.data_criacao = data_criacao ?? null;
        this.data_atualizacao = data_atualizacao ?? null;
    }
}