// SWITCH
let estado = "MG";

switch (estado) {
    case "MG":
        console.log("Mineiro");
        break;
    
    case "SP":
        console.log("Paulista");
        break;
    
    case "RJ":
        console.log("carioca");
        break;
    
    default:
        console.log("Brasileiro");
        break;
}

console.log("-"*15);
estado = "SC";

switch (estado) {
    case "MG":
    case "SP":
    case "ES":
    case "RJ":
        console.log("Sudeste");
        break;

    case "PR":
    case "SC":
    case "RS":
        console.log("Sul");
        break;
}

console.log("-"*15);
let endereco = "Rua";

switch (endereco) {
    case "Rua":
        console.log("Buscando Rua...");
    
    case "Bairro":
        console.log("Buscando Bairro...");
    
    case "Cidade":
        console.log("Buscando Cidade...");

    case "EStado":
        console.log("Buscando Estado...");
    
    case "País":
        console.log("Buscando País...");

    case "Continente":
        console.log("Buscando Continente...");
}

// ESTRUTURAS DE REPETIÇÃO
// WHILE
let num = 0;

while (num < 10) {
    console.log(num);

    //num = num + 1;
    num++
}
// For
for (let i = 10; i > 5; i--){
    console.log(i)
} 

// Função
console.log("-"*15);

function somar(n1, n2){
    let resultado = n1 + n2

    return resultado
}
let conta = somar(10, 5)
console.log( conta )