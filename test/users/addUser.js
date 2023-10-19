const baseUrl = require('../../config');
const userData = require('../userData')
const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require('chai');

var data = userData.createData();

describe('User Test', () => {
    let token;
    let response;

    it('Create User and Retrieve Token', async () => {
        try {
            response = await axios.post(`${baseUrl}/users`, data);
            token = response.data.token;
            console.log(response.status);
            expect(response.status).to.be.equal(201)
        }
        catch (error) {
            console.log(error)
        }

    }).timeout(20000);

    it('give error when uses the same email', async () => {
        try {
            response = await axios.post(`${baseUrl}/users`, data);
            console.log(response.status);
        }
        catch (error) {
            expect(error.response.status).to.be.equal(400)
        }
    }).timeout(20000);
});




