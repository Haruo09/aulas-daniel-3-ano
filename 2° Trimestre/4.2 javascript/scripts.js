// SWITCH
console.log("-------------------------- SWITCH");
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

estado = "SC";
console.log("--------------------------");

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

console.log("--------------------------");
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
console.log("-------------------------- WHILE");

let num = 0;

while (num < 10) {
    console.log(num);

    //num = num + 1;
    num++
}
// For
console.log("-------------------------- FOR");
for (let i = 10; i > 5; i--){
    console.log(i)
} 

// Função
console.log("-------------------------- FUNCTION");

function somar(n1, n2){
    let resultado = n1 + n2

    return resultado
}
let conta = somar(10, 5)
console.log( conta )

console.log("-------------------------- LISTAS");
let frutas = ["Abacaxi", "Banana", "Cajú", "Damasco"];

console.log(frutas);
console.log("A lista possui " + frutas.length + " elementos; o primeiro é o " + frutas[0] + " e o último é " + frutas[frutas.length - 1]);
console.log(`A lista possui ${frutas.length} elementos; o primeiro é o ${frutas[0]} e o último é ${frutas[frutas.length - 1]}`);

frutas.push("Figo");  // insere no FINAL da lista
console.log("PUSH", frutas);

frutas.unshift("Goiaba") // insere no INÍCIO da lista
console.log("UNSHIFT", frutas);

let ultimo = frutas.pop() // Remove e Retorna o ÚLTIMO elemento
console.log("POP", ultimo, frutas);

let primeiro = frutas.shift(); // Remove e Retorna o PRIMEIRO elemento
console.log("SHIFT", primeiro, frutas);

let fruta_troca = frutas[0];
frutas[0] = frutas[2];
frutas[2] = fruta_troca;
console.log("TROCA", frutas);

// OBJETOS
console.log("-------------------------- OBJECTS");

let carro = {
    marca: "Fiat",
    modelo: "Uno",
    cor: "Branco",
    motor: 1.0,
    vel_max: 120,
    ano: 2010
}

console.log( carro );

// PERCORRER LISTAS E OBJETOS
console.log("-------------------------- Pervorrer Listas");

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(element);
}

console.log("-------------------------- Percorrer Listas com FOR OF");

for (let fruta of frutas) {
    console.log(fruta);
}

console.log("-------------------------- Percorrer Objetos");

for (const prop in carro) {
    console.log(carro);
}
