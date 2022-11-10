function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var anoNascimento = document.querySelector("#anoNasc");
    var resultado = document.querySelector("#resposta");
    
    if(anoNascimento.value.length === 0 || Number(anoNascimento.value) > ano){
        alert(`[ERRO] Informação inválida!!!`)
    }else{
        var sexo = document.getElementsByName("sexo");
        var idade = ano - Number(anoNascimento.value);
        var genero = "";
        //Criando uma tag img pelo js.
        var img = document.createElement("img");
        //adicionando atributos a tag, um id com nome foto.
        img.setAttribute("id", "foto");
        if(genero == sexo[1].checked){
            if(idade >= 0 && idade <= 10){
                //criança
                genero = "menino";
                img.setAttribute("src", "./images/crianca_menino.jpg");
            }else if(idade <= 21){
                //jovem
                genero = "jovem";
                img.setAttribute("src", "./images/jovem_homem.jpg");
            }else if(idade <= 50){
                //adulto
                genero = "adulto";
                img.setAttribute("src", "./images/adulto_homem.jpg");
            }else{
                //idoso
                genero = "idoso";
                img.setAttribute("src", "./images/idoso_homem.jpg");
            }
        }else{
            genero = "Mulher";
            if(idade >= 0 && idade <= 10){
                //crianca
                genero = "menina";
                img.setAttribute("src", "./images/crianca_menina.jpg");
            }else if(idade <= 21){
                //jovem
                genero = "jovem";
                img.setAttribute("src", "./images/jovem_mulher.jpg");
            }else if(idade <= 50){
                //adulta
                genero = "mulher";
                img.setAttribute("src", "./images/adulta_mulher.jpg");
            }else{
                //idosa
                genero = "idosa";
                img.setAttribute("src", "./images/idosa_mulher.jpg");
            }
        }
        resultado.style.textAlign = "center";
        resultado.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`;
        resultado.appendChild(img);
    }
    
}