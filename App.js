const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3001,() =>{
    console.log('Servidor corriendo');
});

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'));
    });

app.get('/registro', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
    });

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
    });