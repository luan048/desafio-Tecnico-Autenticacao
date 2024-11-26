export class UserRepository {
    constructor() {
        this.users = [];
    }

    findAll() {
        return this.users;
    }

    findByEmail(email) {
        return this.users.find((user) => user.email === email);
    }

    save(user) {
        this.users.push(user);
    }

    // Faz o Update da Data do Ultimo Login
    update(upUser) {
        const userIndex = this.users.findIndex((user) => user.email === upUser.email) // Procura no armazenamento que corresponde ao email do user

        if(userIndex === -1) throw new Error('Usuário não encontrado') // -1 = não encontrado

        this.users[userIndex] = { // atualiza o elemento do indice que corresponde ao findIndex do userIndex
            ...this.users[userIndex], // as info anteriores do user
            ...upUser, // adiciona a atualização do lastLogin 
        }

        return this.users[userIndex]
    }
}