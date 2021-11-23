const express = require('express');
const app = express();
const morgan = require('morgan');
const {Pool} = require('pg');
require('dotenv').config();

let pool = new Pool();
const porta = process.env.PORT; 


app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get ('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8>"
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Teste BD</title>
    </head>
    <body>
        <form action="/info/get" method = "GET">
        <input type = "submit" value = "GET">
        </form>
        <form action="/info/add" method = "POST">
        <label for="add">ADICIONAR : </label>
        <input type = "text" name = "add" id = "add">
        <input type = "submit" value = "CONFIRMAR">
        </form>
        <form action="/info/delete" method = "POST">
        <label for="delete">REMOVER : </label>
        <input type = "text" name = "delete" id = "delete">
        <input type = "submit" value = "DELETAR">
        </form>
        <form action="/info/update" method = "POST">
        <label for="oldValue"> INFORMAÇÃO ANTERIOR : </label>
        <input type = "text" name = "oldvalue" id = "oldValue">
        <label for="newValue"> NOVA INFORMAÇÃO : </label>
        <input type = "text" name = "newvalue" id = "newValue">
        <input type = "submit" value = "ATUALIZAR">
        </form>
    </body>
    </html>`)
})

app.get('/info/get', (req, res) => {
    try{
    pool.connect(async(error, client, release) => {
        let resp = await client.query(`SELECT * FROM usuario`);
        release();
        res.send(resp.rows);
    })
    }catch(error){
        console.log(error);
    }
});

app.post('/info/add', (req, res) => {
    console.log('made it')
    try {
        pool.connect(async (error, client, release) => {
            let resp = await client.query(`INSERT INTO usuario (usua_nome, usua_email, usua_senha) VALUES'${req.body.add}')`);
            console.log(resp);
            res.redirect('/info/get');
        })
    } catch (error) {
        console.log(error);
    }
});

app.post('/info/delete', (req, res) => {
    console.log('made it')
    try {
        pool.connect(async (error, client, release) => {
            let resp = await client.query(`DELETE FROM TABLE WHERE usua_nome = '${req.body.delete}'`);
            console.log(resp);
            res.redirect('/info/get');
        })
    } catch (error) {
        console.log(error);
    }
});

app.post('/info/update', (req, res) => {
    console.log('made it')
    try {
        pool.connect(async (error, client, release) => {
            let resp = await client.query(`UPDATE usuario SET usua_nome  = '${req.body.newValue}' WHERE usua_nome = '${req.body.oldValue}'`);
            console.log(resp);
            res.redirect('/info/get');
        })
    } catch (error) { 
        console.log(error);
    }
});

app.listen(porta, () => {
    console.log('Rodando na porta ' + porta)
})
