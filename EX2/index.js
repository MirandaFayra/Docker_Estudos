const express = require('express')

const PORT = 3000;

//porta 0.0.0.0 é para o docker entender que precisa repassar a porta 3000 para a minha máquina ao invés
// de rodar o acesso interno

const HOST = '0.0.0.0'

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(PORT,HOST)