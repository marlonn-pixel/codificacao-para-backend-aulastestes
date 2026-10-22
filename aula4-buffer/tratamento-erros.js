//TRY... CATCH...

try{
    console.log(nome);
}catch (erro){
    console.log("Ocorreu um erro.");
}

console.log("O programa permanece executando normalmente.");

//CRIANDO ERRO COM O THROW
//REGRA DE NEGÓCIO: NÃO DEVE ACEITAR IDADE NEGATIVA!
const idade = -10;

try{
    if(idade < 0){
        throw new Error("A idade não pode ser negativa.");
    }
    console.log("Idade válida.");
}catch (erro){
    console.log(erro.message);
}

//UTILIZANDO O FINALLY
try{
    console.log(email);
}catch (erro){
    console.log("Ocorreu um erro.");
}finally{
    console.log("Finalizada a operação.");
}