create database cryptoguard;
use cryptoguard;
create table producto (   
  id int primary key, // es entero porque se guarda un numero 
  bitcoin varchar(120)//es varcgar porque es letra);

create table ventas( id int primary key, // es entero porque se guarda un numero 
  ProductosVendidos int,// es un numero porque es la cantidad de productos vendidos
fechaDeVenta datetime,// es un numero porque es la fecha de las ventas
  ValorDeLaVenta int,// es un numero porque es el valor de la venta 
productoPorVender varchar(120)//es varchar porque es letra)

create comprador(documento int primary key, // es entero porque se guarda un numero 
  PrimerNombre varchar(50),//es varchar porque es letra
  apellido varchar(50),//es varchar porque es letra);

create table comentarios (id int primary key, // es entero porque se guarda un numero 2
  comprador varchar(50),//es varchar porque es letra
vendedor varchar(50),//es varchar porque es letra
  administrador varchar(50),//es varchar porque es letra)

create table vendedor(documento int primary key, // es entero porque se guarda un numero 
nombre varchar(50),//es varchar porque es letra
apellido varchar(50),//es varchar porque es letra)

