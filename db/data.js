let data = {
    usuario: {
        email: 'leonmc@gmail.com',
        usuario: 'LeonMc',
        contrasenia: 'LeonMc123',
        fechaNacimiento: '2006-06-15',
        documento: 90123456,
        fotoPerfil: '/',
    }, 
    productos: [
        {
            id: 1,
            nombre: "Fiat Cronos",
            descripcion: "Descripción del producto 1",
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
            descripcion: "Descripción del producto 2",
            imagen: "Volkswagen-Gol.avif",
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
            descripcion: "Descripción del producto 3",
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
            descripcion: "Descripción del producto 4",
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
            descripcion: "Descripción del producto 5",
            imagen: "ford-fiesta.jpg",
            comentarios: []
        },
        {
            id: 6,
            nombre: "Toyota Corolla",
            descripcion: "Descripción del producto 6",
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
            descripcion: "Descripción del producto 7",
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
            descripcion: "Descripción del producto 8",
            imagen: "nissansentra.jpg",
            comentarios: []
        },
        {
            id: 9,
            nombre: "Hyundai Elantra",
            descripcion: "Descripción del producto 9",
            imagen: "hyundaielantra.webp",
            comentarios: []
        },
        {
            id: 10,
            nombre: "Kia Rio",
            descripcion: "Descripción del producto 10",
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