n1=float(input("Digite o valor do seu salário:"))
print("Valor do salário é: R${:.2f}".format(n1))
print("Você recebeu um aumento de: 15%")
n2=n1*(15/100)
print("O aumento foi de:R${:.2f}".format(n2))
n3=n1+(n1*(15/100))
print("Agora o seu salário é:R${:.2f}".format(n3))
print("Parabéns!")
