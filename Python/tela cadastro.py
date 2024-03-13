#!/usr/bin/python3.6
import mysql.connector;
conexao = mysql.connector.connect(
    host = "localhost",
    user = "aluno",
    password = "@riobranco",
    database = "bdtecnologia",
    )
nome = "Andressa";
idade = 22;
email = "dre.emy@outlook.com";
comando = "insert into tbusuario(nome,idade,email)values({nome},{idade},{email})";
cursor.execute(comando);
cursor.commit(conexao);

sudo yum install mysql-connector-python
