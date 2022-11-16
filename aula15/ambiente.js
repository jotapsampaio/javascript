let num = [2, 3, 5, 6, 1, 9, 7];
// para adicionar um novo elemento no array
num[7] = 4; // adicionou 4 na posição 3;
num.push(9);// adiciona o 9  na ultima posição com o metodo push;
num.sort(); // organiza o array em ordem crescente
console.log(num);
console.log(`Quantas posições possue esse array ${num.length}`); //comprimento o array;

//indexOf() é usado para descobrir se tem um valor e a sua posição no array

let pos = num.indexOf(1); //mostra o indice se tiver, senão mostra -1;
if(pos == -1){
    console.log("não possui esse número no array")
}else{
    console.log(pos);
}
