# Calculadora

## Descrição do projeto.

A página possui uma calculadora com operações matemáticas simples.

## Tecnologias

🍕 HTML

🍕CSS

🍕JavaScript

## Motivação

O projeto foi focado para fortalecer funções básicas do JavaScript e principalmente trabalhar a construção do README.

## Execução. 

![Desktop 2023 03 12 - 23 03 03 02](https://user-images.githubusercontent.com/124098830/224592432-f2d2d8cd-7670-4c82-b4d8-025bdbddf330.gif)

## Link.

https://pedroteixeira1998.github.io/Calculadora/

## Foto

![WhatsApp Image 2023-03-12 at 22 56 37](https://user-images.githubusercontent.com/124098830/224590994-acfb97ef-e4ed-4c46-979b-eee29321741a.jpeg)

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

