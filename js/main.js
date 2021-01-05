
//var nome = "Lucas Barbosa";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos ");
//alert (idade + idade2);
//console.log(nome); //É executado na aba console do browser
//console.log(idade + idade2);
//console.log(frase.toUpperCase());
//console.log(frase.replace("Japão", "Brasil"));
//alert (frase.replace("Japão", "Brasil"));

//var lista = ["maça", "pera", "laranja"];
//console.log(lista[1]); //Vai mostar o item 1 da lista
//lista.push ("uva"); // Adiciona um item na lista
//lista.pop(); //Exclui um item da lista
//console.log(lista);
//console.log(lista.toString()); //Tansforma array em string
//console.log(lista.join (" - ")); // Adiciona "-", entre as palavras
//alert(lista[1]); // Msg de alert para o item 1 da lista
//console.log(lista.length); //Tamanho da lista
//console.log(lista.reverse()); //Troca a ordem da lista

//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta); // Mosta o noem e a cor
//console.log(fruta.nome);
//alert (fruta.cor);

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"Uva", cor:"Roxa"}]
//console.log(frutas);
//alert (frutas[1].nome);

/* IF
var idade = prompt ("Qual é a sua idade?");
//var idade = 18;
if (idade >= 18){
    alert ("maior de idade");
}else{
    alert ("Menor de idade")
}
*/

/* WHILE
var count = 0;
while (count <= 5){
    console.log(count);
    alert (count);
    count = count + 1;
};
*/

/* FOR
var count;
for(count = 0; count <=5; count++){
    alert (count);
};
*/

/* DAY
var d = new Date();
//alert (d); // Mostra a data completa
alert (d.getHours());
*/

/*
function soma(n1, n2){
    return n1 + n2;
}
alert (soma (5, 10));
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert (setReplace("Vai Brasil", "Brasil", "Japão"));
*/
/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //document.getElementById("agradecimento"); //Função pega qualquer id elemento
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
window.open("https://www.uol.com.br/"); //Abre o site em uma nova aba
//window.location.href = "https://www.uol.com.br/"; //Abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert ("troca texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML  = "Passe o mouse aqui";
}

function load(){
    alert ("Página Carregada!");
}

function funcaoChange(elemento){
console.log(elemento.value);
}