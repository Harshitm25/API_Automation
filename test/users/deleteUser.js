const { default: axios } = require("axios");
const { describe } = require("mocha");
const baseUrl = require('../../config');
const userData = require('../util');
const { expect } = require("chai");

let token;
let data = userData.createData();

describe("delete user data", () => {
    before(async () => {
        const response = await axios.post(`${baseUrl}/users`, data);
        token = response.data.token;
    })

    it('delete status should be success', async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.delete(`${baseUrl}/users/me`, payload);
            expect(response.status).to.be.equal(200); // Assuming your API returns a 204 status for a successful delete.
        } catch (error) {
            console.log(error);
        }
    }).timeout(20000);

    it("verify user has been deleted", async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(`${baseUrl}/users/me`, payload);
        } catch (error) {
            expect(error.response.status).to.be.equal(401);
        }
    });
});
