//CRIAÇÃO DO BUFFER
//const buffer = Buffer.from ("Olá, Turma! Sejam muito bem-vindo(a)s!")
//
//console.log(buffer);
//console.log(buffer.toString());
//console.log(buffer.length);

import { createReadStream } from "node:fs";
const leitura = createReadStream("dados.txt", {
    encoding: "utf-8",
    highWaterMark: 200,
});

leitura.on("data", (chunk) => {
    console.log("Bloco novo recebido:");
    console.log(chunk);
});

leitura.on("end", () => {
    console.log("Fim da leitura.");
});

leitura.on("error", (erro) => {
    console.log("Erro ao processar a leitura:", erro.message);
});
