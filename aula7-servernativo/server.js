import http from 'node:http';

const server = http.createServer((req, res) => {
    res.end('Olá, mundo!');
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000. Inicializado com sucesso!');
});