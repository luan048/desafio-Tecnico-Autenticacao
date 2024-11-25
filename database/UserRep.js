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
        this.users.push(user)
    }
}