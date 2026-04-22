CREATE SCHEMA data;
USE data;

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(100) NOT NULL,
    fotoPerfil VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios (
    email,
    nombre,
    contrasenia,
    fotoPerfil
)
VALUES (
    'leonmc@gmail.com',
    'LeonMc',
    'LeonMc123',
    'fotoPerfil.jpg'
);