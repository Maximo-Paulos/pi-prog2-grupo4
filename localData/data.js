let data = {
    usuario: {
        email: 'leonmc@gmail.com',
        nombre: 'LeonMc',
        contrasenia: 'LeonMc123',
        fotoPerfil: 'fotoPerfil.jpg',
    }, 
    productos: [
        {
            id: 1,
            nombre: "Fiat Cronos",
            descripcion: "Sedán económico argentino, cómodo para uso diario y con buen baúl.",
            imagen: "cronos.jpg",
            comentarios: [
                {
                    nombreUsuario: 'maria123',
                    texto: 'Muy buen auto, lo recomiendo.',
                    imagenPerfil: 'default-image.png'
                },
                {
                    nombreUsuario: 'bombini',
                    texto: 'Muy buena calidad',
                    imagenPerfil: 'default-image.png'
                }
            ]
        },
        {
            id: 2,
            nombre: "Volkswagen Gol",
            descripcion: "Clásico hatch confiable y simple, muy usado por su bajo costo de mantenimiento",
            imagen: "golf.jpg",
            comentarios: [
                {
                    nombreUsuario: 'juan456',   
                    texto: 'Excelente relación calidad-precio.',
                    imagenPerfil: 'default-image.png',
                },
                {
                    nombreUsuario: 'ana789',
                    texto: 'Muy buen rendimiento.',
                    imagenPerfil: 'default-image.png',
                }
            ]   
        },
        {
            id: 3,
            nombre: "Renault Sandero",
            descripcion: "Hatch compacto y económico, ideal para la ciudad.",
            imagen: "sanderos.jpg",
            comentarios: [
                {
                    nombreUsuario: 'carlos321', 
                    texto: 'Cómodo y espacioso.',
                    imagenPerfil: 'default-image.png',
                },
            ]
        },
        {
            id: 4,
            nombre: "Chevrolet Onix",
            descripcion: "Compacto moderno con buena tecnología y consumo eficiente",
            imagen: "onix.avif",
            comentarios: [
                {
                    nombreUsuario: 'laura654',  
                    texto: 'Muy buen diseño y tecnología.',
                    imagenPerfil: 'default-image.png',
                },
            ]
        },
        {
            id: 5,
            nombre: "Ford Fiesta",
            descripcion: "Hatch ágil y divertido de manejar, con buen equipamiento en sus versiones más completas.",
            imagen: "ford-fiesta.jpg",
            comentarios: []
        },
        {
            id: 6,
            nombre: "Toyota Corolla",
            descripcion: "Sedán confiable y duradero, destacado por su confort y bajo mantenimiento.",
            imagen: "toyotacorolla.jpg",
            comentarios: [
                {
                    nombreUsuario: 'pedro987',  
                    texto: 'Muy confiable y eficiente.',
                    imagenPerfil: 'default-image.png',
                },
                {
                    nombreUsuario: 'MaxiPolos',
                    texto: 'Muy buen diseño.',
                    imagenPerfil: 'default-image.png',
                }
            ]
        },
        {
            id: 7,
            nombre: "Honda Civic",
            descripcion: "Sedán con diseño deportivo, buen rendimiento y calidad de construcción.",
            imagen: "hondacivic.jpg",
            comentarios: [
                {
                    nombreUsuario: 'sophia321', 
                    texto: 'Excelente rendimiento y estilo.',
                    imagenPerfil: 'default-image.png',
                },
            ]
        },
        {
            id: 8,
            nombre: "Nissan Sentra",
            descripcion: "Sedán cómodo y elegante, enfocado en confort y manejo suave",
            imagen: "nissansentra.jpg",
            comentarios: []
        },
        {
            id: 9,
            nombre: "Hyundai Elantra",
            descripcion: "Sedán moderno con buen equipamiento y diseño atractivo.",
            imagen: "hyundai-elantra.webp",
            comentarios: []
        },
        {
            id: 10,
            nombre: "Kia Rio",
            descripcion: "Compacto práctico y eficiente, con buena relación precio-calidad.",
            imagen: "kiario.jpg",
            comentarios: [
                {
                    nombreUsuario: 'lucas654',
                    texto: 'Muy buen auto por su precio.',
                    imagenPerfil: 'default-image.png',
                },
            ]
        }

    ],
};

module.exports = data;