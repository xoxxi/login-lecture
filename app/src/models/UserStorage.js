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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); 
        const userInfo = Object.keys(users).reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;
