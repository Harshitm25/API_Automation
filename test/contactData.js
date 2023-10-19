const { faker } = require('@faker-js/faker');

class ContactData {
    constructor() {
    }

    createContactData() {
        const firstName = faker.person.firstName('male');
        const lastName = faker.person.lastName();
        const email = faker.internet.email().toLowerCase();
        
        return {
            firstName: firstName,
            lastName: lastName,
            birthdate: "1970-01-01",
            email: email,
            phone: "12334444",
            street1: "1 Main St.",
            street2: "Apartment A",
            city: "Anytown",
            stateProvince: "KS",
            postalCode: "12345",
            country: "INDIA"
        };
    }
}

module.exports = new ContactData;
