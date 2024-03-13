#print ("1)Crie um programa que escreva Olá Mundo! na tela.");
print ("Olá, Mundo!");
print("2)Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas.");
nome=str(input("Digite o seu nome:\n"));
print ("Seja bem-vindo(a)",nome,":)");
print("3) Crie um programa que leia 2 números e mostre a soma deles.");
n1=int(input("Digite um número:"));
n2=int(input("Digite outro número:"));
total=n1+n2;
print("A soma dos dois números é igual a:",total);
print ("4)Crie um algoritmo que leia um número e mostre o seu dobro, triplo e raiz quadrada.");
n3=int(input("Digite um número:\n"));
dobro=n3*2;
triplo=n3*3;
print("Dobro:",dobro);
print("Triplo:",triplo);
print("Raiz Quadrada:",n3**(1/2));
print("5)Faça um algoritmo que leia o preço de um produto e mostre seu novo preço, com 5% de desconto");
produto=str(input("Digite o produto desejado:\n"));
valor=float(input("Digite o valor do produto:\nR$"));
porcen=valor/100*5;
total2=valor-porcen;
print("Você ganhou 15% de desconto na sua compra!");
print("O valor a ser pago é:R$",total2);
print("6)faça um algoritmo que leia o salário de um funcionário e mostre seu novo salário, com 15% de aumento");
s1=float(input("Digite o valor atual do seu salário:\nR$"));
porcen2=s1/100*15;
total3=s1+porcen2;
print("Você recebeu 15% de aumento, parabéns!");
print("O valor do seu salário agora é de:\nR$",total3);
print ("7)Crie um programa que leia o nome de uma cidade e diga se ela começa ou não com o nome Santo");
nome1=str(input("Digite o nome de uma cidade:\n")).strip()
print(nome1[:5].upper() == 'SANTO');
if nome1==True;
print ("8)Crie um programa que leia um número inteiro e mostre na tela se ele é par ou ímpar");
n4=int(input("Digite um número:\n"));
resto=n4%2;
if resto==0:
    print("Esse número é PAR!");
else:
    print("Esse número é ÍMPAR!");
print ("9)Crie um programa que mostre na tela todos os números pares que estão no intervalo entre 1 e 50");
n=0;
while n<52:
   print(n);
   n+=2;
print("10)Faça um programa que leia 5 valores numéricos e guarde-os em uma lista. No final, mostre qual foi o maior e o menor valor digitado e as suas respectivas posições na lista.");
n5=int(input("Digite um número:"));
n6=int(input("Digite um número:"));
n7=int(input("Digite um número:"));
n8=int(input("Digite um número:"));
n9=int(input("Digite um número:"));
list=[n5,n6,n7,n8,n9];
print(list);
menorvalor=min(list);
maiorvalor=max(list);
print("O menor elemento da lista é:",menorvalor,"\n""Posição do menor elemento:", list.index(menorvalor));
print("O maior elemento da lista é:",maiorvalor,"\n""Posição do maior elemento:", list.index(maiorvalor));




    
    





 
    
