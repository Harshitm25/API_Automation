
const { default: axios } = require("axios");
const { describe } = require("mocha");
const baseUrl = require('../../config');
const contactsdata = require('../contactData');
const { expect } = require("chai");

const loginData = require('../../testData.json');

let token;
const data = {
    email: loginData.email,
    password: loginData.password,
};

describe("add contacts data", () => {
    before(async () => {
        const response = await axios.post(`${baseUrl}/users/login`, data);
        token = response.data.token;
    })
    it('contacts should get added', async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
   
        const response = await axios.post(`${baseUrl}/contacts`, contactsdata.createContactData(), payload);
            expect(response.status).to.be.equal(201);

        } catch (error) {
            console.log(error);
        }

    }).timeout(20000);

});
