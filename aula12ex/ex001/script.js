function carregar(){
    var mensagem = document.querySelector("#msg");
    var foto = document.querySelector("#imagem");
    var horaAtual = new Date();
    var hora = horaAtual.getHours();
    // var hora = 22
    mensagem.innerHTML = `Agora são ${hora} hora(s)`
    if(hora > 0 && hora < 12){
        mensagem.innerHTML += ` da manhã.`;
        foto.src = "./images/manha.jpg";
        document.body.style.background = '#e4e433';
    }else if(hora < 18){
        mensagem.innerHTML += ` da tarde.`;
        foto.src = "./images/tarde.jpg";
        document.body.style.background = '#eb6f0b';
    }else{
        mensagem.innerHTML += ` da noite.`;
        foto.src = "./images/noite.jpg";
        document.body.style.background = '#252424';
    }
}
