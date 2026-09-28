# Cambios realizados

## Primera etapa: correcciones generales

Se revisó el sitio completo y se corrigieron errores pequeños de textos, tildes, nombres de platos, horarios y etiquetas de imágenes. También se mejoró el funcionamiento de los menús desplegables para que puedan utilizarse con teclado y lectores de pantalla.

Los botones de Presencial y Delivery ahora son clicables en toda su superficie. Además, el JavaScript evita mostrar valores incompletos como `undefined` y puede manejar de forma segura la ausencia del contenedor del menú.

Se comprobaron la sintaxis de JavaScript, la estructura de los datos, las rutas de archivos y la carga de las tres páginas en un navegador real.

## Segunda etapa: rediseño responsive

Se reorganizó la portada y las cartas conservando los colores, imágenes, tipografías y todo el contenido original. La navegación, las llamadas a la acción y las categorías ahora son más claras, mientras que los platos siguen cargándose desde los mismos datos, sin recortar la carta.

El diseño se adapta progresivamente a teléfonos pequeños, iPhone, dispositivos plegables, tablets, escritorio, pantallas amplias y 4K. También se incorporaron un menú móvil accesible, controles utilizables con teclado y ajustes para áreas seguras y movimiento reducido.

Se retiraron las flechas de las etiquetas de Pizzería, Parrilla y Cafetería porque esas imágenes son informativas y no funcionan como enlaces.

También se separaron los ingredientes, acompañamientos y aclaraciones que estaban incluidos dentro de nombres largos. Ahora se guardan como descripciones y aparecen con un texto secundario más pequeño, sin modificar platos ni precios.

La carta presencial ya no muestra accesos a WhatsApp ni una opción de reserva inexistente. El bloque lateral quedó como una ayuda informativa para quienes ya están siendo atendidos en el local.

En teléfonos, la lista de categorías se puede deslizar directamente sobre los botones y la barra de desplazamiento visual permanece oculta.

## Tercera etapa: optimización responsive, movimiento y rendimiento

Se corrigieron los puntos de quiebre intermedios para que la portada conserve una composición cómoda a 600 px y el diseño de dos columnas comience recién en tablets. La barra de categorías permanece en una sola fila desplazable, evitando que ocupe demasiado alto o se superponga con el resumen lateral.

El bloque de delivery vuelve a una estructura apilada en tablets, se eliminó el ancho mínimo que provocaba desplazamiento horizontal en navegadores estrechos y se mejoró la legibilidad de descripciones y etiquetas de precios. También se añadieron márgenes seguros para dispositivos con recortes laterales.

Se incorporó un sistema de movimiento breve y coherente: entrada suave del encabezado principal, revelado progresivo de secciones, apertura animada del menú móvil, microinteracciones en botones y tarjetas, transición entre categorías y una cabecera con respuesta visual al desplazamiento. Todas las animaciones respetan la preferencia de movimiento reducido.

La carga inicial prioriza únicamente la imagen principal, las imágenes secundarias se decodifican de forma asíncrona y las tarjetas de la carta utilizan renderizado diferido cuando el navegador lo admite. La categoría activa también queda centrada y visible al abrir o recargar un enlace con categoría seleccionada.
