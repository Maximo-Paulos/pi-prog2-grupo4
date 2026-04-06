# pi-prog2-grupo4
Punto 1 - Migración a Node y Express
Deberán migrar todo el proyecto base a un nuevo proyecto que utilice Node y Express teniendo en cuenta los siguientes puntos: 
Crear un proyecto en Node que utilice el framework Express.
Analizá todo el proyecto base para planificar los pasos de la migración.
Crear las rutas necesarias para que todas las páginas del proyecto funcionen. Las rutas deberán utilizar controladores.
Crear los controladores que se encarguen de la lógica de cada página. Los controladores deberán renderizar vistas.
Crear las vistas necesarias migrando desde la maqueta y utilizando EJS.
Tener en cuenta que los hipervínculos ya no redirigirán a un archivo .html, sino a una ruta. Lo mismo aplica a los formularios.
Modificar las rutas de los links de CSS e imágenes de cada EJS para que funcione correctamente con la estructura que plantea Express (el uso de la carpeta /public).
La página principal debe mostrar productos que provengan del módulo de datos respetando la información de cada tarjeta: foto, nombre, descripción y cantidad de comentarios.
Completar las siguientes páginas creando los formularios con al menos los campos indicados. Para esta primera entrega todos los formularios se enviarán por GET a una de las rutas existentes en el proyecto. Si bien no procesarán datos lo que debe pasar es que el proyecto no rompa cuando se envían.
Registración:
email: campo de tipo email.
usuario: campo de tipo texto.
contraseña: campo de tipo contraseña.
Login:
email: campo de tipo email.
contraseña: campo de tipo contraseña.
recordarme: campo de tipo checkbox.
Agregar producto:
imagen: campo de tipo texto.
Nombre del producto: campo de tipo texto.
descripción: campo de tipo textarea.


El header y el footer deben estar armados de modo tal que al modificarlo se actualicen en todas las páginas.
Mi Perfil: completar la cabecera y la sección superior con el nombre de usuario,  email y foto de perfil. La información deberás obtenerla del módulo de datos.


 En la página detalle de producto deberás mostrar los datos estáticos de un producto. No es necesario para esta entrega que se vean los datos del producto sobre el cual clieckeaste para llegar al detalle. Reemplazá la foto y la información genérica por los datos de 1 producto con sus comentarios que provengan del módulo de datos.
 Al ejecutar el formulario de búsqueda debe verse la página de resultados de búsqueda. Para esta etapa del proyecto los resultados de búsqueda serán estáticos. Durante la segunda parte de la materia vamos a aprender funcionalidades de base de datos que nos permitan resolver una búsqueda de datos.
Punto 2 - Módulo de datos
La información a mostrar vendrá de un módulo de datos creado por ustedes. El módulo estará dentro de una carpeta llamada /localData  y será un objeto literal con las siguientes propiedades:
usuario: contendrá un objeto literal con los datos de un usuario. Los datos deben coincidir con la información pedida en el formulario de registro. 
Los datos del usuario deben mostrarse en todos los lugares donde corresponda en el  header y en “mi perfil”.
productos: contendrá un array de objetos literales con los datos de los productos. Debe tener al menos 10 productos. Los datos deben coincidir con la información pedida en el formulario de carga de productos. 
La información de los productos debe mostrarse en todos los lugares de la maqueta en donde aparezca un listado de productos por ejemplo en home y en  “mi perfil”.
comentarios: cada uno de los productos tendrá una propiedad llamada "comentarios" con un array de objetos literales con los datos de los comentarios que se ven en el detalle de un producto.. La información de cada comentario debe ser:
nombre de usuario.
texto del comentario.
imagen de perfil: nombre del archivo con la imagen de perfil.  ¿Recordás en qué parte del proyecto van estas imágenes? 
Punto 3 - Personalización del sitio
Deberán modificar el proyecto base proporcionado cumpliendo los siguientes requisitos:
Cada grupo elegirá un tema o tipo de productos para su catálogo y deberá adaptar la estética y contenidos. Por ejemplo: catálogo de autos, de relojes, de celulares, de productos de computación, de libros, de mascotas, de muebles, de cuadros, etc.
Cada equipo deberá reemplazar los productos base por al menos la misma cantidad de la temática que elijan.


Estética general del sitio: el sitio debe verse acorde a un sitio web profesional en condiciones de ser presentado a un cliente. Debe mantener coherencia estética en todas sus páginas, formularios con estilo y el comportamiento responsive incluído en la maqueta actual del proyecto. Sean cuidadosos al manipular el html.
Nombre del sitio:
Deberán definir un nombre que represente al sitio e implementarlo en el header.
El nombre debe persistir en todas las páginas del sitio.


Paleta de colores: 
Deberán cambiar la paleta de colores utilizada en el sitio para darle un estilo distintivo y adecuado a la temática elegida.
Punto 4 - Base de datos
Deberán crear mediante lenguaje SQL una base de datos que contenga las tablas detalladas más abajo. Las instrucciones SQL deberán guardarse en un archivo con extensión .sql e incluirse en el repositorio dentro dentro de una carpeta llamada /scriptSQL. Para guardar el archivo utilicen la funcionalidad “guardar” que provee Workbench. No duden en pedir con tiempo asistencia a sus profesores.
‼️👉El script SQL debe correr sin errores desde Workbench, creando las tablas y los registros. Pruébenlo varias veces antes de entregar. Si el script no corre el punto estará desaprobado.
Una tabla de usuarios donde cada equipo decidirá qué datos tendrá su usuario en base al formulario de registro creado. Cómo mínimo la tabla debe contar con:
Un campo de texto variable para el email.
Un campo de texto variable para la contraseña.
Un campo de texto variable para la foto de perfil.
El campo createdAt con sus correspondientes constraints.
El campo updatedAt con sus correspondientes constraints.
El campo deletedAt  sus correspondientes constraints.
Las claves foráneas que correspondan.
Una tabla de productos que contenga al menos los siguientes campos:
Id del usuario que cargó el producto.
un campo de texto variable para guardar el nombre del archivo de imagen del  producto.
un campo de texto variable para el nombre del producto.
un campo para un texto no limitado para la descripción del producto.
El campo createdAt con sus correspondientes constraints.
El campo updatedAt con sus correspondientes constraints.
El campo deletedAt  sus correspondientes constraints.
Las claves foráneas que correspondan. 
Una tabla de comentarios que tenga al menos: 
Id del post sobre el cual se está comentando.
Id del usuario que creó el comentario.
Un campo de texto no limitado para el comentario.
El campo createdAt con sus correspondientes constraints.
El campo updatedAt con sus correspondientes constraints.
El campo deletedAt  sus correspondientes constraints.
Las claves foráneas que correspondan.
Mediante lenguaje SQL deberán insertar al menos 5 usuarios, 10 productos y 3 comentarios para cada producto. Podrán usar los datos creados en el módulo de datos del punto 2.
Los campos de las tablas deben coincidir con la información solicitada en cada formulario creado para el proyecto. Debe existir coherencia entre los campos pedidos en el formulario y los datos que almacena la tabla. Haceme un resumen del proyecto que tengo que hacer esto 


sdfghj



