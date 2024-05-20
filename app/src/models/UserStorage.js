"use strict"

class UserStorage {
    static #users = {
        id: ["alswl", "alsgml", "alswjd"],
        password : ["1234", "123", "12345"],
        name: ["민지", "민희", "민정"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers =  fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
