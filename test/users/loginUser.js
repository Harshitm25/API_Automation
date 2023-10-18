const { default: axios } = require("axios");
const { describe } = require("mocha");
const baseUrl = require('../../config');
const userData = require('../util');
const { expect } = require("chai");
const testData=require('../../testData.json')

let token;
var data = userData.createData();

describe("get user data", () => {
    before(async () => {
        const response = await axios.post(`${baseUrl}/users`, data);
        token = response.data.token;
    })

    it("login success",async()=>
    {
        try{
            const loginData = {
                email: data.email, 
                password: data.password,
            };

        const response = await axios.post(`${baseUrl}/users/login`,loginData);
        expect(response.status).to.be.equal(200)

        }catch(error)
        {
            console.log(error);
        }

    }).timeout(20000)

    it("first name should be matched after successful",async()=>
    {
        try{
            const loginData = {
                email: data.email, 
                password: data.password,
            };

        const response = await axios.post(`${baseUrl}/users/login`,loginData);
        expect(data.firstName).to.be.equal(response.data.user.firstName);

        }catch(error)
        {
            console.log(error);
        }
    }).timeout(2000)


    it("invalid mail and password",async()=>
    {
        try{
            const loginData = {
                email: testData.invalidEmail, 
                password: testData.invalidPassword,
            };

        const response = await axios.post(`${baseUrl}/users/login`,loginData);

        }catch(error)
        {
            expect(error.response.status).to.be.equal(401);

        }
    }).timeout(2000)


});