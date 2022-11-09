var idade = 23;
console.log(`Minha idade é de ${idade}`);

if(idade < 16){
    console.log("Não vota");
}else if(idade < 18 || idade >= 65){
    console.log("Voto é opcional");
}else {
    console.log("Voto é obrigatório");
}