import {v4 as uuidv4} from 'uuid'

export class User {
    constructor({id, name, email, password, number, role}) {
        this.id = id ?? uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.number = number;
        this.role = role;
    }
}