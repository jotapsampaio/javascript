function contagem(){
    let inicio = document.querySelector("#contador");
    let fim = document.querySelector("#limite");
    let passo = document.querySelector("#incremento");
    let resultado = document.querySelector("#resposta");

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERRO] Dados inválidos em algum dos campos!")
    }else{
        resultado.innerHTML = "Contando: <br>";
        let valorDoInicio = Number(inicio.value);
        let valorDoFim = Number(fim.value);
        let valorDoPasso = Number(passo.value);
        if(valorDoPasso == 0){
            alert("Valor Inválido! Será acrescentado 1 ao passo.");
            valorDoPasso = 1;
        }

        if(valorDoInicio < valorDoFim){
            //Ordem crescente
            for(let contador = valorDoInicio; contador <= valorDoFim; contador += valorDoPasso){
                //codigo para colocar emojis pelo js.
                resultado.innerHTML += `${contador} \u{1F449}`;
            }
        }else{
            //Ordem decrescente
            for(let contador = valorDoInicio; contador >= valorDoFim; contador -= valorDoPasso){
                resultado.innerHTML += `${contador} \u{1f449}`;
            }
        }
        resultado.innerHTML += `\u{1F4A3}`;
    }   
}