import http from 'node:http';

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === '/' && method === 'GET') {
        res.writeHead(200, {'content-type': 'text/html; charset= utf-8'});
        res.end('<h1>Página inicial</h1>');
    }
    else if (url === '/products' && method === 'GET') {
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify({ mensagem: 'Lista de produtos' }));
    }
    else{
        res.writeHead(404, {'content-type': 'text/plain; charset= utf-8'});
        res.end('Página não encontrada.');
    }

});

server.listen(8080, () =>{
    console.log('Servidor 2 rodando na porta 8080. Inicializado com sucesso!');
})