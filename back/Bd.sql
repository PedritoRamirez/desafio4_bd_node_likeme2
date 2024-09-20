
-- SCRIPT PARA CREAR LA BASE DE DATOS Y SU TABLA CON ESTRUCTURA, ADEMAS INSERTAR DATOS

CREATE DATABASE likeme;

\c  likeme; -- solo si crean la BD por consola PSQL

CREATE TABLE posts (id SERIAL, 
                    titulo VARCHAR(25),
                    img VARCHAR(1000),
                    descripcion VARCHAR(255),
                    likes INT);

-- INSERTAR EL PRIMER REGISTRO DIRECTAMENTE 

INSERT INTO posts 
VALUES (DEFAULT,
       'Superman',
       'https://upload.wikimedia.org/wikipedia/en/b/b0/Superman_%281978_film_poster%29.jpg',
       'Super Heroe con poderes extraordinarios', 0);