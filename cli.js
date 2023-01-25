import chalk from "chalk";
import pegaArquivo from "./index.js";
import validaUrl from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado =await pegaArquivo(caminhoDoArquivo[2]);

    if(caminho[3] === "validar"){
        console.log(chalk.bgBlueBright("lista de validados"), await validaUrl(resultado));
    }else{
    console.log(chalk.yellow("Lista de links"), resultado);
    };
}

processaTexto(caminho);
//console.log(pegaArquivo(caminho[2]));