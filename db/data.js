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
            imagen: "/images/products/cronos.jpg",
            comentarios: [
                {
                    nombreUsuario: 'maria123',
                    texto: 'Muy buen auto, lo recomiendo.',
                    imagenPerfil: '/images/users/default-image.png'
                },
                {
                    nombreUsuario: 'bombini',
                    texto: 'Muy buena calidad',
                    imagenPerfil: '/images/users/default-image.png'
                }
            ]
        },
        {
            id: 2,
            nombre: "Volkswagen Gol",
            descripcion: "Descripción del producto 2",
            imagen: "/images/products/Volkswagen-Gol.avif",
            comentarios: [
                {
                    nombreUsuario: 'juan456',   
                    texto: 'Excelente relación calidad-precio.',
                    imagenPerfil: '/images/users/default-image.png',
                },
                {
                    nombreUsuario: 'ana789',
                    texto: 'Muy buen rendimiento.',
                    imagenPerfil: '/images/users/default-image.png',
                }
            ]   
        },
        {
            id: 3,
            nombre: "Renault Sandero",
            descripcion: "Descripción del producto 3",
            imagen: "/images/products/sanderos.jpg",
            comentarios: [
                {
                    nombreUsuario: 'carlos321', 
                    texto: 'Cómodo y espacioso.',
                    imagenPerfil: '/images/users/default-image.png',
                },
            ]
        },
        {
            id: 4,
            nombre: "Chevrolet Onix",
            descripcion: "Descripción del producto 4",
            imagen: "/images/products/onix.avif",
            comentarios: [
                {
                    nombreUsuario: 'laura654',  
                    texto: 'Muy buen diseño y tecnología.',
                    imagenPerfil: '/images/users/default-image.png',
                },
            ]
        },
        {
            id: 5,
            nombre: "Ford Fiesta",
            descripcion: "Descripción del producto 5",
            imagen: "/images/products/ford-fiesta.jpg",
            comentarios: []
        },
        {
            id: 6,
            nombre: "Toyota Corolla",
            descripcion: "Descripción del producto 6",
            imagen: "/images/products/toyotacorolla.jpg",
            comentarios: [
                {
                    nombreUsuario: 'pedro987',  
                    texto: 'Muy confiable y eficiente.',
                    imagenPerfil: '/images/users/default-image.png',
                },
                {
                    nombreUsuario: 'MaxiPolos',
                    texto: 'Muy buen diseño.',
                    imagenPerfil: '/images/users/default-image.png',
                }
            ]
        },
        {
            id: 7,
            nombre: "Honda Civic",
            descripcion: "Descripción del producto 7",
            imagen: "/images/products/hondacivic.jpg",
            comentarios: [
                {
                    nombreUsuario: 'sophia321', 
                    texto: 'Excelente rendimiento y estilo.',
                    imagenPerfil: '/images/users/default-image.png',
                },
            ]
        },
        {
            id: 8,
            nombre: "Nissan Sentra",
            descripcion: "Descripción del producto 8",
            imagen: "/images/products/nissansentra.jpg",
            comentarios: []
        },
        {
            id: 9,
            nombre: "Hyundai Elantra",
            descripcion: "Descripción del producto 9",
            imagen: "/images/products/hyundaielantra.webp",
            comentarios: []
        },
        {
            id: 10,
            nombre: "Kia Rio",
            descripcion: "Descripción del producto 10",
            imagen: "/images/products/kiario.jpg",
            comentarios: [
                {
                    nombreUsuario: 'lucas654',
                    texto: 'Muy buen auto por su precio.',
                    imagenPerfil: '/images/users/default-image.png',
                },
            ]
        }

    ],
};

module.exports = data;