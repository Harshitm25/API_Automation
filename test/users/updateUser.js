const { default: axios } = require("axios");
const { describe } = require("mocha");
const baseUrl = require('../../config');
const userData = require('../util');
const { expect } = require("chai");

let token;
let data = userData.createData();
let updateData = userData.updatedData();

describe("update user data", () => {
   
    it("data created", async () => {
        const response = await axios.post(`${baseUrl}/users`, data);
        token = response.data.token;
    }).timeout(2000);

    it('update status should be suceess', async () => {
        try {
            const payload = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            const response = await axios.patch(`${baseUrl}/users/me`, updateData, payload);
            expect(response.status).to.be.equal(200);
            
        } catch (error) {
            console.log(error);
        }
       
    }).timeout(20000);

    it("last name should get updated",async()=>
    {
        try{
        const payload = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.patch(`${baseUrl}/users/me`, updateData, payload);

        expect(response.data.lastName).to.be.equal(updateData.lastName);
    }catch(error)
    {
        console.log(error)
    }

    })

});
