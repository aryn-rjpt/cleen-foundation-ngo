import './envloader.js'

import express from 'express';
import cors from 'cors';

import { signup, signin } from './auth.js';
import { setProfile, updateProfile, getUserData } from './db.js';


const app = express()

const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Clean Foundation NGO API!')
})

app.post('/api/signup', async (req, res) => {

    console.log(req.body);

    const { email, password, ...userData } = req.body;

    console.log(userData);

    const resp = await signup(email, password);

    if ( resp.uid ) {

        if ( Object.keys(userData).length === 0 ) {
            console.log("No user data to update.");
        }
        else{
            setProfile(resp.email, userData)
        } 

        res.status(200).json({uid: resp.uid, email: resp.email});

    } else if ( resp === 400 ) {
        res.status(400).send('Email already in use');
    } else {
        res.status(500).send('Internal Server Error');
    }
})

app.post('/api/signin', async (req, res) => {

    const { email, password } = req.body;
    const status = await signin(email, password);

    if ( status === 200 ) {
        res.sendStatus(200);
    } else if ( status === 400 ) {
        res.status(400).send('Invalid credentials');
    } else {
        res.status(500).send('Internal Server Error');
    }

})

app.post('/api/update', async (req, res) => {

    const { email, ...data } = req.body;
    
    const status = await updateProfile(email, data);

    console.log(status);

    if ( status === 200 ) {
        res.status(200).send('Profile updated successfully');
    } else if ( status === 400 ) {
        res.status(400).send('Invalid credentials');
    } else {
        res.status(500).send('Internal Server Error');
    }

})

app.get('/api/getUser', async (req, res) => {

    const { email } = req.query;

    if (!email) {
        return res.status(400).send('email is required');
    }

    const data = await getUserData(email);

    console.log(data);

    if ( data === null ) {
        return res.status(404).send('User not found');
    }

    res.status(200).json(data)

})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


