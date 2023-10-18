const { default: axios } = require("axios");
const { describe } = require("mocha");
const baseUrl = require('../../config');
const userData = require('../util');
const { expect } = require("chai");

let token;
var data = userData.createData();

describe("get user data", () => {
    before(async () => {
        const response = await axios.post(`${baseUrl}/users`, data);
        token = response.data.token;
    })
    it('checking the last name should be equal', async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const response = await axios.get(`${baseUrl}/users/me`, payload)
            expect(response.data.lastName).to.be.equal(data.lastName)

        } catch (error) {
            console.log(error);
        }
    })

    it('checking the first name should be equal', async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(`${baseUrl}/users/me`, payload)
            expect(response.data.firstName).to.be.equal(data.firstName)

        } catch (error) {
            console.log(error);
        }
    })

    it('checking the email should be equal', async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(`${baseUrl}/users/me`, payload)
            expect(response.data.email).to.be.equal(data.email)
        } catch (error) {
            console.log(error);
        }
    }).timeout(2000)

})

