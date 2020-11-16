create database DB_Usuarios;
USE DB_Usuarios;

create table Usuario (
idUser int primary key auto_increment,
nomeCompleto varchar (40),
apelido varchar (15),
email varchar (40),
senha varchar (30)
);

INSERT INTO Usuario values 
(null, 'Luis Fernando Rocha', 'loisfg', 'luis@luis.com', '123456');

SELECT * FROM Usuario;