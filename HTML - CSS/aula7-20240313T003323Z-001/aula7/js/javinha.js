/*----Toda linguagem de programação:----
Declaração de váriavel
If else simples e Composto
Laço de repetição:
For/while 
Operador lógico e comparação
Operador Aritmético
Array: matriz e vetor */
function Entrar() {
var user= document.getElementById("cxuser").value;
var senha= document.getElementById("cxsenha").value;
var perfil= document.getElementById("cxperfil").value;

if(user=="Andressa"|| senha== "123" ||perfil== "ADM")
{
alert("Acesso permitido");
}
else
{
alert("Acesso negado");
}
}
function calcular(){
    var peso=document.getElementById("cxpeso").value;
    var altura=document.getElementById("cxaltura").value;
    var imc=peso/(altura*altura);
    alert(imc);
    if(imc<=18.5)
{
    alert("Abaixo do peso");
    }
    else if(imc<24.9)
    {
        alert("Peso ideal, Parabéns!");
    }
    else if(imc< 29.9)
    {
alert("Acima do peso!");
    }
    else if(imc<34.9)
    {
        alert("Ob grau 1");

    }
    else if(imc<39.9)
    {
        alert("Ob grau 2");
    }
    else{
        alert("ob grau 3");
    }
}
var n1 =  0;
while(n1<=10)
{
    document.while (n1);
    n1++;
        
    }
}