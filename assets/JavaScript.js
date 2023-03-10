function insert(n){
    var num = document.querySelector("#tela").innerHTML;
    document.querySelector("#tela").innerHTML = (num + n);
}

function deletar(){
    document.querySelector("#tela").innerHTML = "";
}

function apagar(){
    var tela = document.querySelector("#tela").innerHTML;
    document.querySelector("#tela").innerHTML = tela.substring(0, tela.length - 1);
}

function calcular (){
    var tela = document.querySelector("#tela").innerHTML;
    if(tela){
        document.querySelector("#tela").innerHTML = eval(tela);
    }
    else{
        document.querySelector("#tela").innerHTML = ""; 
    }
}