//ATIVIDADE 1 - CRIAÇÃO DE BUFFER
const buffer1 = Buffer.from("Olá, mundo!");
console.log(buffer1.toString("utf8"));
console.log(buffer1.length);

const buffer2 = Buffer.from("Node.JS");
console.log(buffer2.toString("utf8"));
console.log(buffer2.length);

//ATIVIDADE 2 - CRIAÇÃO DE STREAM DE LEITURA (READ STREAM)
import { createReadStream } from "node:fs";

const leitura = createReadStream("ocorrencias.txt", {
    encoding: "utf-8"
});

leitura.on("data", (chunk) => {
    console.log("Bloco recebido:");
    console.log(chunk);
});

leitura.on("end", () => {
    console.log("Leitura finalizada!");
});

leitura.on("error", (erro) => {
    console.error("Erro ao ler o arquivo:", erro.message);
});

//ATIVIDADE 3 - CRIAÇÃO DE STREAM DE ESCRITA (WRITE STREAM)
import { createWriteStream } from "node:fs";

const escrita = createWriteStream("fechamento.txt", {
    encoding: "utf-8"
});

escrita.write("Data: 21/10/2026\n");
escrita.write("Atendimentos realizados: 30\n");
escrita.write("Status: Concluído\n");
escrita.write("Responsável: Marlon Santos\n");
escrita.end();