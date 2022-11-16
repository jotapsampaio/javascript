let variacoes = [2, 5, 9, 8, 3, 4, 7, 10];

// for(let pos = 0; pos < variacoes.length; pos++){
//     console.log(`A posição ${pos} tem valor ${variacoes[pos]} no array`);
// }

//forma simplificada de fazer repeticões com os arrays

for (let pos in variacoes){
    console.log(`A posição ${pos} tem valor ${variacoes[pos]}`);
}