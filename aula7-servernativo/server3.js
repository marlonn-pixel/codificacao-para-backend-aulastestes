import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.type('html').send('<h1>Página inicial</h1>');
});

app.listen(3001,() => {
    console.log('Servidor 3 rodando na porta 3001. Inicializado com sucesso!');
});