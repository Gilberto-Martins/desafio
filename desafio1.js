
/*
let numb1 =20;
let numb2 = 10;
let dive = numb1 / numb2;
console.log(`O resutado foi ${dive}`);
console.log(`O primeiro valor foi: ${numb1} e o segundo valor foi ${numb2}`)
*/


/*

não esta funcionando o codigo da divisão

let limit = parseInt(gets());

for (let i = 0; i < limit; i++) {
    
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X / Y).toFixed(1);
        console.log(divisao);
    }
}
*/
// que merda é essa?
const pessoa = {
    nome: 'Ana',
    idade: 21,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}


const { nome, idade } = pessoa
console.log(nome , idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { bemHumorada = true, sobrenome} = pessoa
console.log(bemHumorada, sobrenome)

const { endereco:{ logradouro , numero}} = pessoa
console.log(logradouro , numero)