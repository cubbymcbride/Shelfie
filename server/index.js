require ('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('WE LIT');
});


app.listen(SERVER_PORT, () => console.log(`Listening boi on ${SERVER_PORT}`));