alert("Boa Noite!");
/*
var nome= "Andressa";
var n1= 100;
var n2= 21;
var total= n1/n2;
document.write("Total"+total);
*/
function fazersoma(){
    var v1=document.getElementById("nota1").value;
    var v6=document.getElementById("dobro1").value;
    var v2=document.getElementById("nota2").value;
    var v7=document.getElementById("dobro2").value;
    var v3=document.getElementById("nota3").value;
    var v8=document.getElementById("dobro3").value;
    var v4=document.getElementById("nota4").value;
    var v9=document.getElementById("dobro4").value;
    var v5=document.getElementById("nota5").value;
    var v10=document.getElementById("dobro5").value;
    var v11=document.getElementById("maiornota").value;
    var total= parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4)+parseInt(v5);
    alert("Total"+total);
}
function escola1(){
    var n1=document.getElementById("nota1").value;
    var n2=document.getElementById("nota2").value;
    var n3=document.getElementById("nota3").value;
    var n4=document.getElementById("nota4").value;
    var n5=document.getElementById("nota5").value;
    var media=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4)+parseFloat(n5))/5;
    document.getElementById("cxmedia").value=media;
    if(media>=7)
    {
        alert("aprovado");
}
else
{
    alert("reprovado");
    


}}
function escola(){
    var n11=document.getElementById("valor1").value;
    var n6=document.getElementById("dobro1").value;
    var n12=document.getElementById("valor2").value;
    var n7=document.getElementById("dobro2").value;
    var n13=document.getElementById("valor3").value;
    var n8=document.getElementById("dobro3").value;
    var n14=document.getElementById("valor4").value;
    var n9=document.getElementById("dobro4").value;
    var n15=document.getElementById("valor5").value;
    var n10=document.getElementById("dobro5").value;
    var multi1 =(parseInt(n11)*parseInt(n11));
    var multi2 =(parseInt(n12)*parseInt(n12));
    var multi3 =(parseInt(n13)*parseInt(n13));
    var multi4 =(parseInt(n14)*parseInt(n14));
    var multi5 =(parseInt(n15)*parseInt(n15));
    
document.getElementById("dobro1").value=multi1;
document.getElementById("dobro2").value=multi2;
document.getElementById("dobro3").value=multi3;
document.getElementById("dobro4").value=multi4;
document.getElementById("dobro5").value=multi5;

}
function escola2() {

    if(n1>=n2)
    {
        (n1>=n3)
        {
            (n1>=n4)
            {
                (n1>=n5)
                alert(n1+"é maior")
            }
        }
    }
}
else
{
    
}
 if(n2>=n1)
 {
     (n2>=n3)
     {
         (n2>=n4)
           {
             (n2>=n5)
             alert(n2+"é maior")
           }
         }
     }
 }
 else
 {

 }
if(n3>=n1)
{
    (n3>=n2)
    {
        (n3>=n4)
        {
            (n3>=n5)
            alert(n3+"é maior")
        }
    }
}
else{

}
if(n4>=n1)
{
    (n4>=n2)
    {
        (n4>=n3)
        {
            ()
        }
    }
}
    

