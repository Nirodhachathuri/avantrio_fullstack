const express = require('express');

const url ='http://localhost:3000/';
const cors = require('cors');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.get('', (req, res) => {
    axios.get(url)
        .then(response => {res.json(response.data)})
        .catch(error => {
            console.log(error);
        });
})
let port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App running on port ${port} `);
});