
const { faker } = require('@faker-js/faker');


class GenerateData {
    constructor() {
    }

    createData() {
        const randomName = faker.person.firstName('male');
        const lastName = faker.person.lastName();
        const email = faker.internet.email().toLowerCase();
        return {
            firstName: randomName,
            lastName: lastName,
            email: email,
            password:"mypassword"
        };
    }

    updatedData(){
        const lastName = faker.person.lastName();

        return {
            lastName: lastName

        };

    }
}



module.exports = new GenerateData(); 