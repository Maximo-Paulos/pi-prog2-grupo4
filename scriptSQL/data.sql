DROP DATABASE IF EXISTS data;
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
    deletedAt TIMESTAMP NULL
);

CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuarioId INT UNSIGNED NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    productoId INT UNSIGNED NOT NULL,
    usuarioId INT UNSIGNED NOT NULL,
    texto TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (productoId) REFERENCES productos(id),
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

-- Usuarios (ids 1 a 5)
INSERT INTO usuarios (email, nombre, contrasenia, fotoPerfil) VALUES
('leonmc@gmail.com', 'LeonMc', 'LeonMc123', 'fotoPerfil.jpg'),
('maria123@gmail.com', 'maria123', 'Maria123', 'maria123.jpg'),
('bombini@gmail.com', 'bombini', 'Bombini123', 'bombini.jpg'),
('juan456@gmail.com', 'juan456', 'Juan456', 'juan456.jpg'),
('ana789@gmail.com', 'ana789', 'Ana789', 'ana789.jpg');

-- Productos (ids 1 a 10)
INSERT INTO productos (usuarioId, imagen, nombre, descripcion) VALUES
(1, 'cronos.jpg', 'Fiat Cronos', 'Sedán económico argentino, cómodo para uso diario y con buen baúl.'),
(1, 'golf.jpg', 'Volkswagen Gol', 'Clásico hatch confiable y simple, muy usado por su bajo costo de mantenimiento.'),
(2, 'sandero.jpg', 'Renault Sandero', 'Hatch compacto y económico, ideal para la ciudad.'),
(3, 'onix.avif', 'Chevrolet Onix', 'Compacto moderno con buena tecnología y consumo eficiente.'),
(4, 'ford-fiesta.jpg', 'Ford Fiesta', 'Hatch ágil y divertido de manejar, con buen equipamiento.'),
(5, 'toyotacorolla.jpg', 'Toyota Corolla', 'Sedán confiable y duradero, destacado por su confort y bajo mantenimiento.'),
(1, 'hondacivic.jpg', 'Honda Civic', 'Sedán con diseño deportivo, buen rendimiento y calidad de construcción.'),
(2, 'nissansentra.jpg', 'Nissan Sentra', 'Sedán cómodo y elegante, enfocado en confort y manejo suave.'),
(3, 'hyundai-elantra.webp', 'Hyundai Elantra', 'Sedán moderno con buen equipamiento y diseño atractivo.'),
(4, 'kiario.jpg', 'Kia Rio', 'Compacto práctico y eficiente, con buena relación precio-calidad.');

-- Comentarios (3 por producto)
INSERT INTO comentarios (productoId, usuarioId, texto) VALUES
(1, 1, 'Muy buen auto, lo recomiendo.'),
(1, 2, 'Me gustó mucho el diseño.'),
(1, 3, 'Parece una buena opción para todos los días.'),
(2, 1, 'Muy buena relación precio calidad.'),
(2, 2, 'Es un modelo muy confiable.'),
(2, 3, 'Me gusta porque es económico.'),
(3, 1, 'Buen auto para usar en la ciudad.'),
(3, 4, 'Se ve cómodo y práctico.'),
(3, 5, 'Me parece una opción interesante.'),
(4, 2, 'Tiene muy buena tecnología.'),
(4, 3, 'El diseño exterior está muy bueno.'),
(4, 5, 'Lo elegiría por su equipamiento.'),
(5, 1, 'Siempre me gustó este modelo.'),
(5, 4, 'Muy lindo auto para manejar.'),
(5, 5, 'Se lo ve muy completo.'),
(6, 1, 'Toyota suele ser muy confiable.'),
(6, 2, 'Muy buena opción familiar.'),
(6, 4, 'Tiene fama de durar muchos años.'),
(7, 2, 'Me gusta el estilo deportivo.'),
(7, 3, 'Se nota que es un auto cómodo.'),
(7, 5, 'Muy buena terminación.'),
(8, 1, 'Es elegante y moderno.'),
(8, 3, 'Me parece muy cómodo para viajar.'),
(8, 4, 'Tiene un diseño sobrio y lindo.'),
(9, 1, 'Muy atractivo visualmente.'),
(9, 2, 'Parece venir bien equipado.'),
(9, 5, 'Es una buena alternativa.'),
(10, 2, 'Muy práctico para todos los días.'),
(10, 3, 'Me gusta por su consumo.'),
(10, 5, 'Buena opción por el precio.');
