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
CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuarioId INT UNSIGNED NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);
INSERT INTO productos (
    usuarioId,
    imagen,
    nombre,
    descripcion
)
VALUES (
    1,
    'cronos.jpg',
    'Fiat Cronos',
    'Sedán económico argentino, cómodo para uso diario y con buen baúl.'
);

CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    productoId INT UNSIGNED NOT NULL,
    usuarioId INT UNSIGNED NOT NULL,
    texto TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (productoId) REFERENCES productos(id),
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

INSERT INTO comentarios (
    productoId,
    usuarioId,
    texto
)
VALUES (
    1,
    1,
    'Muy buen auto, lo recomiendo.'
);

INSERT INTO usuarios (email, nombre, contrasenia, fotoPerfil)
VALUES ('leonmc@gmail.com', 'LeonMc', 'LeonMc123', 'fotoPerfil.jpg');

INSERT INTO usuarios (email, nombre, contrasenia, fotoPerfil)
VALUES ('maria123@gmail.com', 'maria123', 'Maria123', 'maria123.jpg');

INSERT INTO usuarios (email, nombre, contrasenia, fotoPerfil)
VALUES ('bombini@gmail.com', 'bombini', 'Bombini123', 'bombini.jpg');

INSERT INTO usuarios (email, nombre, contrasenia, fotoPerfil)
VALUES ('juan456@gmail.com', 'juan456', 'Juan456', 'juan456.jpg');

INSERT INTO usuarios (email, nombre, contrasenia, fotoPerfil)
VALUES ('ana789@gmail.com', 'ana789', 'Ana789', 'ana789.jpg');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (1, 'cronos.jpg', 'Fiat Cronos', 'Sedán económico argentino, cómodo para uso diario y con buen baúl.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (1, 'golf.jpg', 'Volkswagen Gol', 'Clásico hatch confiable y simple, muy usado por su bajo costo de mantenimiento.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (2, 'sandero.jpg', 'Renault Sandero', 'Hatch compacto y económico, ideal para la ciudad.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (3, 'onix.avif', 'Chevrolet Onix', 'Compacto moderno con buena tecnología y consumo eficiente.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (4, 'ford-fiesta.jpg', 'Ford Fiesta', 'Hatch ágil y divertido de manejar, con buen equipamiento.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (5, 'toyotacorolla.jpg', 'Toyota Corolla', 'Sedán confiable y duradero, destacado por su confort y bajo mantenimiento.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (1, 'hondacivic.jpg', 'Honda Civic', 'Sedán con diseño deportivo, buen rendimiento y calidad de construcción.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (2, 'nissansentra.jpg', 'Nissan Sentra', 'Sedán cómodo y elegante, enfocado en confort y manejo suave.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (3, 'hyundai-elantra.webp', 'Hyundai Elantra', 'Sedán moderno con buen equipamiento y diseño atractivo.');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion)
VALUES (4, 'kiario.jpg', 'Kia Rio', 'Compacto práctico y eficiente, con buena relación precio-calidad.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (1, 1, 'Muy buen auto, lo recomiendo.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (1, 2, 'Me gustó mucho el diseño.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (1, 3, 'Parece una buena opción para todos los días.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (2, 1, 'Muy buena relación precio calidad.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (2, 2, 'Es un modelo muy confiable.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (2, 3, 'Me gusta porque es económico.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (3, 1, 'Buen auto para usar en la ciudad.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (3, 4, 'Se ve cómodo y práctico.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (3, 5, 'Me parece una opción interesante.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (4, 2, 'Tiene muy buena tecnología.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (4, 3, 'El diseño exterior está muy bueno.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (4, 5, 'Lo elegiría por su equipamiento.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (5, 1, 'Siempre me gustó este modelo.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (5, 4, 'Muy lindo auto para manejar.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (5, 5, 'Se lo ve muy completo.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (6, 1, 'Toyota suele ser muy confiable.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (6, 2, 'Muy buena opción familiar.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (6, 4, 'Tiene fama de durar muchos años.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (7, 2, 'Me gusta el estilo deportivo.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (7, 3, 'Se nota que es un auto cómodo.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (7, 5, 'Muy buena terminación.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (8, 1, 'Es elegante y moderno.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (8, 3, 'Me parece muy cómodo para viajar.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (8, 4, 'Tiene un diseño sobrio y lindo.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (9, 1, 'Muy atractivo visualmente.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (9, 2, 'Parece venir bien equipado.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (9, 5, 'Es una buena alternativa.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (10, 2, 'Muy práctico para todos los días.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (10, 3, 'Me gusta por su consumo.');

INSERT INTO comentarios (productoId, usuarioId, texto)
VALUES (10, 5, 'Buena opción por el precio.');