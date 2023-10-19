
const { default: axios } = require("axios");
const { describe } = require("mocha");
const baseUrl = require('../../config');
const contactsdata = require('../contactData');
const { expect } = require("chai");
const loginData = require('../../testData.json');

let token;
let id;
const data = {
    email: loginData.email,
    password: loginData.password,
};

describe("get contacts data", () => {
    before(async () => {
        const response = await axios.post(`${baseUrl}/users/login`, data);
        token = response.data.token;
    })


    it('able to get contact id', async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(`${baseUrl}/contacts/`, payload)
            id = (response.data[2]._id);
          expect(response.status).to.be.equal(200);

        } catch (error) {
            console.log(error);
        }
    })

    it('Able to get Contact detail', async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(`${baseUrl}/contacts/${id}`, payload)
          expect(response.status).to.be.equal(200);

        } catch (error) {
            console.log(error);

        }
    })
});
