import chalk from "chalk";
import fs from "fs";

// const texto = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)";

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultados =[];

    //const linksExtraidos = texto.match(regex);
    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayResultados.push({[temp[1]] :[temp[2]]})
    }
    return arrayResultados.length === 0? "Não há links": arrayResultados;
    //const linksExtraidos = regex.exec(texto);
    //console.log(linksExtraidos);
}

//extraiLinks(texto);

//console.log(chalk.red("Olá mundo..."));

//const paragrafo = "Texto retornado por uma função";

//function texto(string){
//    return string;
//}

//console.log(texto(paragrafo));

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "Não há o arquivo no caminho..."));
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    try{
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return(extraiLinks(texto));
    
    }catch(erro){
        trataErro(erro);
    }
}

/*function pegaArquivo(caminhoDoArquivo){
    const encoding = "UTF-8";
    fs.promises
    .readFile(caminhoDoArquivo,encoding)
    .then((texto) => console.log(texto))
    .catch((erro) => trataErro(erro))
}*/// por promessas

/*function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.readFile(caminhoDoArquivo, encoding,(erro, texto) =>{
        if (erro){
            trataErro(erro);
        }
        console.log(chalk.blue(texto));
    })
}*/// metodo de forma sincrona

//pegaArquivo('.//Arquivos/texto.md');
export default pegaArquivo;

