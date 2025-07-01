
const express = require('express')
const path = require('path');
const cors = require('cors');

require('dotenv').config({ path: __dirname + '/../.env' })

const app = express()

const port = process.env.PORT || 3000

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Clean Foundation NGO API!')
})

app.get('/api/apply', (req, res) => {
    console.log(req.body);
    res.send("Some data");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})