function tabuada(){
    let numero = document.getElementById("numero")
    let tabuada = document.getElementById("selTabuada")

    if(numero.value.length == 0){
        alert("Número inválido! Por favor tente novamente.")
    }else{
        let num = Number(numero.value)
        let contador = 1;

        tabuada.innerHTML = ""
        while(contador <= 10){
            let item = document.createElement("option")
            item.text = `${num} x ${contador} = ${num*contador}`
            item.value = `tab${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}