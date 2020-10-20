const express = require("express");
const app = module.exports = express();
const client = require("../../src/mongodb");

app.get('/', (request, response) => {
    try {
        client.getTime((res) => {
            response.json(res);
        });
    } catch (err) {
        throw err
    }
});
