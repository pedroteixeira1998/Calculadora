# Calculadora

## Descrição do projeto.

A página possui uma calculadora com operações matemáticas simples com a opção de Dark e Light mode.

## Tecnologias

🍕 HTML

🍕CSS

🍕JavaScript

## Motivação

O projeto foi focado para fortalecer funções básicas do JavaScript, trabalhar com toogle (Dark e light mode nesse caso) e principalmente trabalhar a construção do README. 

## Execução. 

![Desktop 2023 03 13 - 19 01 54 02 (1)](https://user-images.githubusercontent.com/124098830/224844193-54b1c4f7-0a79-40ae-9cad-c2809baf9606.gif)

## Link.

https://pedroteixeira1998.github.io/Calculadora/

## Foto

![WhatsApp Image 2023-03-13 at 19 17 42](https://user-images.githubusercontent.com/124098830/224845186-982a8d41-4e29-41d7-93ae-d8c18ee06021.jpeg)

![WhatsApp Image 2023-03-13 at 19 15 10](https://user-images.githubusercontent.com/124098830/224844857-d8cce6b1-158e-48f4-a308-1a86fda7162f.jpeg)

![WhatsApp Image 2023-03-13 at 18 30 46](https://user-images.githubusercontent.com/124098830/224844835-0367a42b-add7-4ea7-ba5a-9bb6065d6471.jpeg)

![WhatsApp Image 2023-03-13 at 18 30 10](https://user-images.githubusercontent.com/124098830/224844846-06055be6-10e9-4f60-8a1a-623cce772fe2.jpeg)

## HTML 

```
<body>
    <div>
        <main>
            <p id="tela"></p>
            <table>
                <tr>
                    <td><button onclick="deletar()">c</button></td>
                    <td><button onclick="apagar()"><</button></td>
                    <td><button onclick="insert('/')">/</button></td>
                    <td><button onclick="insert('*')">X</button></td>
                </tr>
                <tr>
                    <td><button onclick="insert('7')">7</button></td>
                    <td><button onclick="insert('8')">8</button></td>
                    <td><button onclick="insert('9')">9</button></td>
                    <td><button onclick="insert('-')">-</button></td>
                </tr>
                <tr>
                    <td><button onclick="insert('4')">4</button></td>
                    <td><button onclick="insert('5')">5</button></td>
                    <td><button onclick="insert('6')">6</button></td>
                    <td><button onclick="insert('+')">+</button></td>
                </tr>
                <tr>
                    <td><button onclick="insert('1')">1</button></td>
                    <td><button onclick="insert('2')">2</button></td>
                    <td><button onclick="insert('3')">3</button></td>
                    <td rowspan="2"><button style="height: 106px;" onclick="calcular()">=</button></td>
                </tr>
                <tr>
                    <td colspan="2"><button  onclick="insert('0')" class="botao" style="width: 140px;">0</button></td>
                    <td><button onclick="insert('.')">.</button></td>
                </tr>
            </table>
        </main>
    </div>
    <script src="assets/JavaScript.js"></script>
    
</body>
```

## JavaScript

```
function insert(n){
    var num = document.querySelector("#tela").innerHTML;
    var lastChar = num[num.length - 1];
    if( n === "." && lastChar === "."){
        return;}
    if( n === "." && num.indexOf(".") !== -1){
    
        return;}

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
```

## Autor

linkedin: https://www.linkedin.com/in/pedro-teixeira-51a75b265/

Github: https://github.com/pedroteixeira1998

