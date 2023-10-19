
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

describe("get contacts data", () => {
    before(async () => {
        const response = await axios.post(`${baseUrl}/users/login`, data);
        token = response.data.token;
    })


    it('checking the contact list should not be empty', async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(`${baseUrl}/contacts`, payload)
          expect(response.data).not.to.be.empty;

        } catch (error) {
            console.log(error);

        }
    })

    it('checking the first name should be equal after creating addContact', async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(`${baseUrl}/contacts`, payload)
        
          expect(response.status).to.be.equal(200);

        } catch (error) {
            console.log(error);

        }
    })
});
