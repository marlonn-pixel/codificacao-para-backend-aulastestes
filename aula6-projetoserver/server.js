//IMPORTAÇÃO DO MÓDULO NATIVO "HTTP" DO Node.js
import http from 'node:http';

//CRIAÇÃO DA INSTÂNCIA DO SERVIDOR HTTP
const server = http.createServer((req, res) => {

    const { url, method } = req;

    if(url === '/' && method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end('<h1>HOMEPAGE</h1>');
    }

    else if (url === '/contatos' && method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({mensagem: 'Página de contatos'}));
    }

    else{
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Página não encontrada.');
    }

//DEFINIR E ENVIAR A RESPOSTA PARA O CLIENTE
    //res.end('Olá, mundo! Meu primeiro servidor Node.js!');
});

//INICIANDO O SERVIDOR NA PORTA 3000
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});