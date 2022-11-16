function parImpar(numero){
    if(numero % 2 == 0){
        return "Par"
    }else{
        return "Impar"
    }
}

// console.log(parImpar(4))
let resposta = parImpar(3)
console.log(resposta)

//==================================================================================================================

function soma(num1=0, num2=0){ // parametros opcionais caso não seja adicionado nenhum valor para os parametros ai fica valendo 0;
    return num1 + num2
}

console.log(soma(2,9))

//===================================================================================================================

let v = function(x){
    return x*2
}

console.log(v(10))

//=====================================================================================================================

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))